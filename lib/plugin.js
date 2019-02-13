import { createRouter as customCreateRouter } from '<%= options.routerFilePath %>'
<% if (options.keepDefaultRouter) { %>
import { createRouter as createDefaultRouter } from './defaultRouter'
<% } else { %>
const createDefaultRouter = null
<% } %>

export function createRouter(ssrContext) {
  return customCreateRouter(ssrContext, createDefaultRouter)
}
