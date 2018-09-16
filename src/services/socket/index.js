export default class {
  constructor(io) {
    if (!this.io) {
      this.io = io
    }
  }

  io () {
    console.log(this.io)
    return this.io
  }
}

