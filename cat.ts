import { debounce } from "jsr:@std/async/debounce";

// * cat cmd like but with argv

for (const filename of Deno.args) {
    const file = await Deno.open(filename);
    await file.readable.pipeTo(Deno.stdout.writable, { preventClose: true });
}

// * node watch but deno
let watcher = Deno.watchFs("./");
for await (const event of watcher) {
    console.log(">>>> event", event);
    watcher.close();
}
const log = debounce((event: Deno.FsEvent) => {
    console.log("[%s] %s", event.kind, event.paths[0]);
}, 200);

watcher = Deno.watchFs("./");

for await (const event of watcher) {
    log(event);
}