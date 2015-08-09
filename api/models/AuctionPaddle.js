/**
* AuctionPaddle.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    number: 'integer',
    key: {
      type: 'string',
      size: 6
    },
    user: {
      model: 'user'
    },
    auction: {
      model: 'auction'
    }
  }
};
