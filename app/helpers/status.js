/**
 * Session
 * @module helpers/status
 */

 module.exports = {
 	setIndexStatus: function setIndexStatus (data) {
		return data ? 200 : 404;
	},
	setStoreStatus: function setStoreStatus (data) {
		return data ? 201 : 400;
	},
	setDestroyStatus: function setDestroyStatus (data) {
		return data ? 204 : 400;
	},
 };