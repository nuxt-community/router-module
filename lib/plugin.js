import { createRouter as customCreateRouter } from '<%= options.routerFilePath %>'

<% if (options.keepDefaultRouter) { %>
import { createRouter as createDefaultRouter, routerOptions } from './defaultRouter'
<% } else { %>
const createDefaultRouter = null
const routerOptions = null
<% } %>

export function createRouter(ssrContext) {
  return customCreateRouter(ssrContext, createDefaultRouter, routerOptions)
}
