<% if (options.keepDefaultRouter) { %>
import { createRouter as createDefaultRouter, routerOptions } from './defaultRouter'
<% } else { %>
const createDefaultRouter = null
const routerOptions = null
<% } %>

<% if (options.routerFilePath) { %>
import { createRouter as customCreateRouter } from '<%= options.routerFilePath %>'
<% } else { %>
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const customCreateRouter = (ssrContext, createDefaultRouter, routerOptions, config, getRoutesDomainOrSubdomain) => {
  const options = routerOptions || createDefaultRouter(ssrContext, config).options
  const routes = getRoutesDomainOrSubdomain(ssrContext, options.routes)

  return new Router({
    ...options,
    routes
  })
}
<% } %>

export function createRouter(ssrContext, config) {
  return customCreateRouter(ssrContext, createDefaultRouter, routerOptions, config, getRoutesDomainOrSubdomain)
}

const getRoutesDomainOrSubdomain = (ssrContext, routes) => {
  const rootDomain = '<%= options.rootDomain %>'
  const subdomains = [<%= options.subDomains.map(subdomain => `'${subdomain}'`).join(', ') %>]
  const routesDirectory = getRoutesDirectory(ssrContext, rootDomain, subdomains)

  if (!routesDirectory) {
    return routes
  }

  return routes
    .filter(route => {
      return !routeIsUnderDirectory(route, [...subdomains, rootDomain].filter(domain => domain !== routesDirectory))
    })
    .map((route) => {
      if (!routeIsUnderDirectory(route, routesDirectory)) {
        return route
      }

      return {
        ...route,
        path: route.path.substr(routesDirectory.length + 1) || '/',
        name: route.name.substr(routesDirectory.length + 1) || 'index'
      }
    })
}

const getRoutesDirectory = (ssrContext, rootDomain, subdomains) => {
  let routesDirectory = null

  if (!rootDomain || !subdomains || !subdomains.length) {
    return routesDirectory
  }

  if (process.server && ssrContext && ssrContext.nuxt && ssrContext.req) {
    const req = ssrContext.req

    // get the subdomain from the request host
    const matcher = req.headers.host.match(/^(\w+(-\w+)?)\.(localhost|\w+(-\w+)?)(\.\w+)?/)
    routesDirectory = matcher[1] || matcher[0]

    // if the subdomain is not in the list of user provided domains, set the root directory to root - domain given by the user
    routesDirectory = subdomains.includes(routesDirectory) ? routesDirectory : rootDomain

    // Save to the object that will be sent to the client as inline-script
    ssrContext.nuxt.routesDirectory = routesDirectory
  }

  // Get what we saved on SSR
  if (process.client && window.__NUXT__ && window.__NUXT__.routesDirectory) {
    routesDirectory = window.__NUXT__.routesDirectory
  }

  return routesDirectory
}

const routeIsUnderDirectory = (route, directory) => {
  const dirs = Array.isArray(directory) ? directory : [directory]

  for (const dir of dirs) {
    if (route.path === '/' + dir || route.path.startsWith('/' + dir + '/')) {
      return true
    }
  }

  return false
}
