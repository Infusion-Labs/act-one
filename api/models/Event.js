/**
* Event.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: 'string',
    organization: {
      model: 'organization'
    },
    auctions: {
      collection: 'auction',
      via: 'event'
    },
    attendees: {
      collection: 'attendee',
      via: 'event'
    },
    donations: {
      collection: 'donation',
      via: 'event'
    }
  }
};
