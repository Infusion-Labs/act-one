/**
 * User
 *
 * @module      :: Model
 * @description :: This is the base user model
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

  attributes: require('waterlock').models.user.attributes({

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

  }),

  beforeCreate: require('waterlock').models.user.beforeCreate,
  beforeUpdate: require('waterlock').models.user.beforeUpdate
};
