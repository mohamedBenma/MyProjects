import http from 'http';
import { Server as ServerIO} from 'socket.io';
import RequestController from './controllers/requestController.js';
import IOController from './controllers/ioController.js';
//coté client
const server = http.createServer(
    (request, response) => new RequestController(request, response).handleRequest()
);
const io = new ServerIO(server);
const ioController=new IOController(io);
/**io.on('connection',(socket)=>{
    ioController.registerSocket(socket);
} );
io.on('w',socket=>{
    socket.emit('hola');
})**/
io.on('connection',(socket)=>{
    ioController.registerSocket(socket);
} );
server.listen(8080);
