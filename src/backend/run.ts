import {
  run,
} from "./app";

const PORT = (process.env['DIFFRACTWD_WEB_PORT'] || '8010' || '').trim();

run({PORT}).then(() => {
    // tslint:disable-next-line
    console.log((new Date().toLocaleString()), " diffractwd.com ", "started on port " + PORT + " ");
}).catch((err) => {
    // tslint:disable-next-line
    console.error("Error during start", err);
});
