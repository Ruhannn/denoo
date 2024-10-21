// host a file
import { serveDir, serveFile } from "jsr:@std/http/file-server";
Deno.serve({ port: 5000 }, (req: Request) => {
    const pathname = new URL(req.url).pathname;

    if (pathname === "/file") {
        return serveFile(req, "./hehe.mp4"); //file path
    }

    if (pathname.startsWith("/static")) {
        return serveDir(req, {
            fsRoot: "public",
            urlRoot: "static",
        });
    }

    return new Response("404: Not Found", {
        status: 404,
    });
});