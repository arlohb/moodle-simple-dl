import { $ } from "bun";
import { parseArgs } from "./args";
import { download } from "./download";

let { session, url, outfile, preview, previewCmd } = parseArgs();

outfile = outfile ?? decodeURI(url.split("/").at(-1)!);
await download(url, outfile, session);

if (preview) {
    await $`${previewCmd} "${outfile}"`;
}

