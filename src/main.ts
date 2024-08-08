import { $ } from "bun";
import { parseArgs } from "./args";
import { download } from "./download";

let { session, url, outfile, outfolder, preview, previewCmd } = parseArgs();

// Remove possible trailing slash from outfolder
if (outfolder.at(-1) === "/") {
    outfolder = outfolder.substring(0, outfolder.length - 1);
}

outfile = outfile ?? `${outfolder}/${decodeURI(url.split("/").at(-1)!)}`;
await download(url, outfile, session);

if (preview) {
    await $`${previewCmd} "${outfile}"`;
}

