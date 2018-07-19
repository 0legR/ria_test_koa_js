/**
 * Goods Controller
 * @module controllers/goodsController
 */

/**
 * @example curl -XGET "http://localhost:8081/goods/11"
 */

const goodsManager = require('../managers/goodsManager'),
	statusHelper = require('../helpers/status');


async function get (ctx, next) {
	try {
		ctx.body = await goodsManager.findById(ctx.params.id);
		ctx.status = statusHelper.setIndexStatus(ctx.body);
    	await next();
	} catch (e) {
		ctx.status = 404;
    	await next();
	}
}

/**
 * @example curl -XPOST "http://localhost:8081/goods" -d '{"name":"New record 1"}' -H 'Content-Type: application/json'
 */
async function post (ctx, next) {
	try {
		ctx.body = await goodsManager.store(ctx.request.body);
		ctx.status = statusHelper.setStoreStatus(ctx.body);
		await next();
	} catch (e) {
		ctx.status = 400;
		await next();
	}
	console.log('post_Id',ctx.body);
}

/**
 * @example curl -XDELETE "http://localhost:8081/goods/41349314"
 */
async function del (ctx, next) {
	try {
		ctx.body = await goodsManager.destroy(ctx.params.id);
		ctx.status = statusHelper.setDestroyStatus(ctx.body);
		console.log(ctx.status);
		await next();
	} catch (e) {
		ctx.status = 400;
		await next();
	}
	console.log('del', ctx.body);
}

module.exports = {get, post, del};