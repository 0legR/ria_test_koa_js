/**
 * App Goods Manager
 * @module managers/goodsManager
 */
 const Memcached = require('memcached'),
    memcached = new Memcached('127.0.0.1:11211'),
    idGenerator = require('../helpers/idGenerator'),
    isEmptyObject = require('../helpers/emptyObject');

(function () {
    "use strict";

   var self = module.exports = {
        findById: function findById (id) {
            if (id) {
                return new Promise(resolve => {
                    memcached.get(id, (err, data) => resolve(data));
                });
            } else {
                return null;
            }
        },
        store: function store (data) {
            if (!isEmptyObject.isEmpty(data)) {
                const id = idGenerator.generate();
                const timeToKeep = 600;
                return new Promise(resolve => {
                    memcached.set(id, data, timeToKeep, err => resolve(id));
                });
            } else {
                return null;
            }
        },
        destroy: function destroy (id) {
            return new Promise(resolve => {
                memcached.del(id, (err, data) => resolve(data));
            });
        }
    }
}());