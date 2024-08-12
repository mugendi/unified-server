/**
 * Copyright (c) 2024 Anthony Mugendi
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

// server/middlewares/unifiedServer/koaUnifier.js

/**
 * Koa Unifier Module
 * Unifies Koa context object to a common format
 */

function koaUnifier(ctx, next) {

  return {
    getBody: () => ctx.request.body,
    getQuery: () => ctx.query,
    getParams: () => ctx.params,
    setStatus: (status) => (ctx.status = status),
    send: (body) => (ctx.body = body),
    next: next,
  };
}

module.exports = koaUnifier;
