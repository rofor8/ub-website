import { onRequest as __api_auth_js_onRequest } from "/Users/reuben/Dev/ub/ub-website/functions/api/auth.js"

export const routes = [
    {
      routePath: "/api/auth",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_auth_js_onRequest],
    },
  ]