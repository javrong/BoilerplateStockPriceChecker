'use strict';

const chai 		= require('chai');
const mongoose	= require('mongoose');

const ConnectionString = process.env.DB;

module.exports = function (app) {

  app.route('/api/stock-prices')
    .get(function (req, res){
      
    });
    
};
