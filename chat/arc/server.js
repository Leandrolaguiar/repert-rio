const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 8080 });

    

wss.on('connection', (ws) => {

    ws.send("batata")

    ws.on("message", (data) => {
        
        console.log(data.toString())
        
        wss.clients.forEach((client) => client.send(data.toString()))

    })
    console.log("conectado")

    })