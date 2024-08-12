/**
 * Copyright (c) 2024 Anthony Mugendi
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

// server/middlewares/unifiedServer/index.js

/**
 * Unified Server Module
 * This module provides a unified interface for different server frameworks.
 */

const expressUnifier = require('./expressUnifier');
const fastifyUnifier = require('./fastifyUnifier');
const koaUnifier = require('./koaUnifier');

/**
 * Unifies the request and response objects across different server frameworks
 * @param {string} framework - The server framework being used ('express', 'koa', or 'fastify')
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 * @returns {Object} Unified request and response objects
 */
function unifyServer(framework, req, res, next) {
  switch (framework.toLowerCase()) {
    case 'express':
    case 'fastify':
      return expressUnifier(req, res, next);
    case 'koa':
      return koaUnifier(req,  next);
    default:
      throw new Error(`Unsupported server framework: ${framework}`);
  }
}

module.exports = unifyServer;
