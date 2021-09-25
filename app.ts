import dotenv from 'dotenv'
import Server from './models/server'

dotenv.config()

export const nombre = 'Jose'

const server = new Server()

server.listen()