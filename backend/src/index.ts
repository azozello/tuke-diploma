import {app} from "./app";
import http from "http";
import socket from "socket.io";

export let socketIO: any;

async function main(): Promise<void> {
    const server = http.createServer(app.callback())
    // @ts-ignore
    socketIO = socket(server)

    socketIO.on('connection', function (socket) {
        console.log('a user connected')
    })

    server.listen(3001, () => {
        console.log('Started on port 3001')
    })
}

main()
  .then()
  .catch(e => {
      console.error('catch')
      process.exit(1);
  });

process.on('unhandledRejection', e => {
    console.error('unhandledRejection')
    process.exit(2);
});