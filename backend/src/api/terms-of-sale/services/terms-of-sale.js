'use strict';

/**
 * terms-of-sale service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::terms-of-sale.terms-of-sale');
