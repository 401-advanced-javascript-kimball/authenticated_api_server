/**
 * Altered version of sample usage code 
 * https://www.npmjs.com/package/express-swagger-generator#usage
 * 
 * This will add the /api-docs route to the express app instance.
 * 
 * To use, alter the options object as needed and call the exported 
 * function as follows:
 * 
 * ```js
 * const express = require('express');
 * // Prepare the express app
 * const app = express();
 * // Add the swagger /api-docs route to the server
 * const swagger = require('../docs/swagger');
 * swagger(app);
 * ```
 */
'use strict';

const swaggerGenerator = require('express-swagger-generator');

let options = {
  swaggerDefinition: {
    info: {
      description: 'Authenticated API Server',
      title: 'authenticated_api_server',
      version: '1.0.0',
    },
    host: 'jk-401js-lab15.herokuapp.com',
    basePath: '/',
    produces: [
      "application/json",
      "application/xml"
    ],
    schemes: ['https', 'http'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: "",
      },
      basicAuth: {
        type: 'basic',
        in: 'header',
        name: 'Authorization',
        description: "",
      }
    }
  },
  basedir: __dirname, //app absolute path
  files: ['../lib/**/*.js', '../src/**/*.js'] //Path to the API handle folder
};

/**
 * Add the /api-docs route to the express app instance.
 *
 * @param {Express} app - Your express app instance
 */
module.exports = app => swaggerGenerator(app)(options);
