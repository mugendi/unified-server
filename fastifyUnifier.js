/**
 * Copyright (c) 2024 Anthony Mugendi
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

// server/middlewares/unifiedServer/fastifyUnifier.js

/**
 * Fastify Unifier Module
 * Unifies Fastify request and response objects to a common format
 */

function fastifyUnifier(req, res, next) {
    return {
      getBody: () => req.body,
      getQuery: () => req.query,
      getParams: () => req.params,
      setStatus: (status) => res.status(status),
      send: (body) => res.send(body),
      next: next
    };
  }
  
  module.exports = fastifyUnifier;