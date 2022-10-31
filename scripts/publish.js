const fs = require("fs");
const { exit } = require("process");
const { exec, spawn } = require("child_process");
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const root = process.cwd();

const [version] = process.argv.slice(2);

const updatePackageJsonVersion = async (path) => {
    const rawFile = await fs.promises.readFile(`${root}/${path}`);
    const packageJson = JSON.parse(rawFile);

    packageJson.version = version;

    await fs.promises.writeFile(`${root}/${path}`, JSON.stringify(packageJson, null, 2));

    return packageJson;
}

const bumpVersion = async () => {
    const packageJson = await updatePackageJsonVersion("package.json");

    const workspaces = [...packageJson.workspaces];

    while(workspaces.length) {
        let workspace = workspaces.pop();
        if (workspace.includes("/*")) {
            const [directory] = workspace.split("/*");
            const packages = await fs.promises.readdir(`${root}/${directory}`);
            for (const package of packages) {
                const stats = await fs.promises.lstat(`${root}/${directory}/${package}`);
                if(stats.isDirectory()) {
                    workspaces.push(`${directory}/${package}`);
                }
            }
        } else {
            await updatePackageJsonVersion(`${workspace}/package.json`)
        }
    }
};

const publish = async () => {
    const publishCommand = spawn("yarn", ['publish'], {stdio: 'inherit'});
    
    return new Promise((resolve, reject) => {
        publishCommand.on('exit', code => {
            if(code === 1) {
                reject();
            }
            resolve();
        })
    })
};

(async () => {
    await bumpVersion();
    await publish();
})();
