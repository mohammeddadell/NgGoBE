import { Router } from 'express'
import DemandItemController from './DemandItemController'
<<<<<<< Updated upstream
import DonationItemController from './DonationItemController'
=======
import UserController from './UserController'
>>>>>>> Stashed changes

const router = new Router()

DemandItemController(router)
<<<<<<< Updated upstream
DonationItemController(router)
=======
UserController(router)
>>>>>>> Stashed changes

router.get('/hello', (req, res) => {
  res.send('hello')
})

/**
 * @apiDefine master Master access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine admin Admin access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine user User access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine listParams
 * @apiParam {String} [q] Query to search.
 * @apiParam {Number{1..30}} [page=1] Page number.
 * @apiParam {Number{1..100}} [limit=30] Amount of returned items.
 * @apiParam {String[]} [sort=-createdAt] Order of returned items.
 * @apiParam {String[]} [fields] Fields to be returned.
 */

export default router
