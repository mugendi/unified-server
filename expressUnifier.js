/**
 * Copyright (c) 2024 Anthony Mugendi
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

// server/middlewares/unifiedServer/expressUnifier.js

/**
 * Express Unifier Module
 * Unifies Express request and response objects to a common format
 */

function expressUnifier(req, res, next) {
    return {
      getBody: () => req.body,
      getQuery: () => req.query,
      getParams: () => req.params,
      setStatus: (status) => res.status(status),
      send: (body) => res.json(body),
      next: next
    };
  }
  
  module.exports = expressUnifier;