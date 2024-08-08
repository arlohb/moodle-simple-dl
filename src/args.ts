import { program } from "commander";

interface Args {
    session: string,
    url: string,
    outfile: string,
    outfolder: string,
    preview: boolean,
    previewCmd: string,
};

export const parseArgs = (): Args => program
    .name("moodle-simple-dl")
    .requiredOption("-s, --session <token>", "The moodle session token cookie")
    .requiredOption("-u, --url <url>", "The URL of the file")
    .option("-o, --outfile <path>", "The output file, default is file name in URL")
    .option("-f, --outfolder <path>", "The folder to put the file in, ignored if outfile is set")
    .option("-p, --preview", "Preview file?", false)
    .option("-pc, --preview-cmd <cmd>", "Preview command", "firefox")
    .parse()
    .opts();

