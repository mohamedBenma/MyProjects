export default class IOController  {
    #io;
    #clients;
    
    constructor(io) {
        this.#io = io;
        this.#clients = new Map();
    }
    // ajout d'une socket(client)
    registerSocket(socket) {
        socket.emit('welcome');
        this.verifyPlayersNbr(socket);
        socket.on("newPosition",(paddle,paddleY,ballX,ballY)=>{
            
            this.sendNewPos(socket,paddle,paddleY,ballX,ballY);})
        socket.on("stopTheGame",()=>{
            socket.broadcast.emit("gameStopped");
        })
    }
    // atteint les notifications de l'un des clients afin d'executer la methode adequate
    setupListeners(socket) {
        socket.on('greatings', ()=>{
            this.greatings(socket);
        });
        socket.on('leave',() => this.leave(socket));
        socket.on('disconnect', () => this.leave(socket));
        
    }

    greatings(socket) {
        console.log(`${socket.id}-----> ${this.#clients.size}`);
        }
    // Quitter le serveur
    leave(socket) {
        console.log(`disconnection from ${socket.id})`);;
        const interval=this.#clients.get(socket.id);
        clearInterval(interval); 
        this.#clients.delete(socket);  
    }
    // verifie la position d'un client au sein de la liste des clients.
    verifyPlayersNbr(socket){
        let res;
        let connect=false;
        this.#clients.set(socket);
        console.log(this.#clients.size);
            if (this.#clients.size==1){
                res= "First";
                this.setupListeners(socket);
            }
            else if (this.#clients.size==2){
                res= "Second";
                this.setupListeners(socket);
                connect=true;
            }
            else{
                res= 3;
            console.log("serveur: " +socket.id + "vous n'etes pas autorisé à vous connecter!");
            console.log(`disconnection from ${socket.id})`);
            }
            socket.emit("screenPos",res);
            if (connect){
                this.#io.emit("canStartTheGame");
            }
            socket.on("player1StartedTheGame",()=>{
                this.#io.emit("twoPlayersReady");
            })
    }
    // envoi de la nouvelle position d'un des deux paddles.
    sendNewPos(socket,paddle,paddleY,ballX,ballY){
        console.log("paddleSendNewPos"+paddle);
                socket.broadcast.emit("updatePos",paddle,paddleY,ballX,ballY);

            }
}


