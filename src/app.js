import http from 'http'
import { env, mongo, port, ip, apiRoot } from './config'
import mongoose from './services/mongoose'
import express from './services/express'
import api from './api'
import SocketIO from 'socket.io'
import { Router } from 'express'

const router = new Router()
const app = express(apiRoot, router)
const server = http.createServer(app)
const io = new SocketIO(server)
api(router, io)

mongoose.connect(mongo.uri)
mongoose.Promise = Promise

setImmediate(() => {
  server.listen(port, ip, () => {
    console.log('Express server listening on http://%s:%d, in %s mode', ip, port, env)
  })
})

export default app
