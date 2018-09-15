
export default (io) => {
  io.on('connection', (socket) => {
    console.log('SOCKET CONNECTED')
  })
  io.on('new_giveaway', (giveaway) => {
    io.emit('new_task', giveaway)
  })
  io.on('accept_task', (data) => {
    io.emit('accepted_giveaway', data)
  })
}
