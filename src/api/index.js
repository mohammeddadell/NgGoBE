import { Router } from 'express'
import DemandItemController from './DemandItemController'
import DonationItemController from './DonationItemController'
import UserController from './UserController'
import GiveawayController from './GiveawayController'

const router = new Router()

DemandItemController(router)
DonationItemController(router)
UserController(router)
GiveawayController(router)

export default router
