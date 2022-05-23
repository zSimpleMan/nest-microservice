// eslint-disable-next-line @typescript-eslint/no-var-requires
const io = require('socket.io-client')

const socket = io.connect('http://localhost:3060')

socket.on('home', msg => {
  console.log(msg)
})
