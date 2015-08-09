/**
* Donation.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    fromUser: {
      model: 'user'
    },
    fundraiser: {
      model: 'fundraiser'
    },
    payment: {
      model: 'payment'
    },
    event: {
      model: 'event'
    }
  }

};
