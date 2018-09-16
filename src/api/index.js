import { Router } from 'express'
import DemandItemController from './DemandItemController'
import DonationItemController from './DonationItemController'
import UserController from './UserController'
import GiveawayController from './GiveawayController'

export default (router, io) => {
  DemandItemController(router, io)
  DonationItemController(router, io)
  UserController(router, io)
  GiveawayController(router, io)
  return router
}
