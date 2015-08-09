/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    firstName: 'string',
    lastName: 'string',
    email: {
      type: 'string'
    },
    phone: 'string',
    password: 'string',
    company: {
      model: 'organization'
    },
    bids: {
      collection: 'auctionBid',
      via: 'user'
    },
    auctionPaddles: {
      collection: 'auctionPaddle',
      via: 'user'
    },
    donations: {
      collection: 'donation',
      via: 'fromUser'
    },
    events: {
      collection: 'event',
      via: 'attendees'
    },
    payments: {
      collection: 'payment',
      via: 'user'
    },
    roles: {
      collection: 'role',
      via: 'users'
    }
  }

};
