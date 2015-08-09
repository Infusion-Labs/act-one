/**
* AuctionItem.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: 'string',
    description: 'string',
    startingBid: 'float',
    buyNowPrice: 'float',
    bidIncrement: 'float',
    value: 'float',
    auction: {
      model: 'auction'
    },
    photos: {
      collection: 'auctionItemPhoto',
      via: 'item'
    },
    bids: {
      collection: 'auctionBid',
      via: 'item'
    }
  }

};
