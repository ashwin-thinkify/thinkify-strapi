'use strict';

/**
 * frontend-candidate service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::frontend-candidate.frontend-candidate');
