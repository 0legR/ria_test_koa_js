/**
 * is Empty Object
 * @module helpers/emptyObject
 */

module.exports = {
	isEmpty: function isEmpty(obj) {
	    for(var prop in obj) {
	        if(obj.hasOwnProperty(prop))
	            return false;
	    }
	    return true;
	}
};