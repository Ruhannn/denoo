// * create a webSocket
Deno.serve((req) => {
    if (req.headers.get("upgrade") != "websocket") {
        return new Response(null, { status: 501 });
    }
    const { socket, response } = Deno.upgradeWebSocket(req);
    socket.addEventListener("open", () => {
        console.log("a client connected ;3");
    });
    socket.addEventListener("message", (event) => {
        if (event.data === "ping") {
            socket.send("pong");
        }
    });
    return response;
});
// * set a ping to webSocket
const socket = new WebSocket("ws://localhost:8000");
socket.addEventListener("open", () => {
    console.log(socket.readyState);
    socket.send("ping");
});
socket.addEventListener("message", (event) => {
    console.log(event.data);
});