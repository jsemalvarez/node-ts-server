import dotenv from 'dotenv'

if( process.env.NODE_ENV === 'production'){
    dotenv.config({ path: `${__dirname}/../.env.production`});
}else if( process.env.NODE_ENV === 'test'){
    dotenv.config({ path: `${__dirname}/../.env.test`});
}else{
    dotenv.config({ path: `${__dirname}/../.env.development`});    
}


import Server from './models/server'


const server = new Server()

server.listen()