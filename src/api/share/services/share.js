'use strict';

/**
 * share service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::share.share');
