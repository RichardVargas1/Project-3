const args = ["start"];
const opts = { studio: "inherit", cwd: "client", shell: true };
require("child_process").spawn("npm", args, opts);