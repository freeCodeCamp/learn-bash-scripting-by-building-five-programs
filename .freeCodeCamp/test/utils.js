const fs = require('fs');
const util = require('util');
const path = require('path');
const parseCommand = require('shell-quote').parse;
const execute = util.promisify(require('child_process').exec);
const { exec } = require('promisify-child-process');

const readFile = util.promisify(fs.readFile);
const readdir = util.promisify(fs.readdir);

const getLastCommand = async (howManyBack = 0, parse = true, dir = process.cwd()) => {
  const pathToBashLogs = path.join(dir, '../../', '.bash_history');
  const bashLogs = await readFile(pathToBashLogs, 'utf8');

  if (!bashLogs) {
    throw new Error(`Could not find ${pathToBashLogs}`);
  }

  const logs = bashLogs.split('\n');
  const lastLog = logs[logs.length - howManyBack - 2];

  if(parse) {
    return parseCommand(lastLog);
  } else {
    return lastLog;
  }
};

const getNextCommand = async (howManyBack = 2, dir = process.cwd()) => {
  const pathToNextCommandLogs = path.join(dir, './test', '.next_command');
  const nextCommandLogs = await readFile(pathToNextCommandLogs, 'utf8');

  if (!nextCommandLogs) {
    throw new Error(`Could not find ${pathToNextCommandLogs}`);
  }

  const logs = nextCommandLogs.split('\n');
  const nextCommand = logs[logs.length - howManyBack];
  const parsedCommand = parseCommand(nextCommand);

  return parsedCommand;
};

const getCwd = async (dir = process.cwd()) => {
  const pathToCwdLogs = path.join(dir, './test', '.cwd');
  const cwdLogs = await readFile(pathToCwdLogs, 'utf8');

  if (!cwdLogs) {
    throw new Error(`Could not find ${pathToCwdLogs}`);
  }

  const logs = cwdLogs.split('\n');
  const lastLog = logs[logs.length - 2];

  return lastLog;
};

const getPreviousCwd = async (dir = process.cwd()) => {
  const pathToCwdLogs = path.join(dir, './test', '.cwd');
  const cwdLogs = await readFile(pathToCwdLogs, 'utf8');

  if (!cwdLogs) {
    throw new Error(`Could not find ${pathToCwdLogs}`);
  }

  const logs = cwdLogs.split('\n');
  const previousLog = logs[logs.length - 3];

  return previousLog;
};

const getDirectoryContents = async (dir = process.cwd()) => {
  const directoryContents = await readdir(dir);

  if (!directoryContents) {
    throw new Error(`Could not find folder ${dir}`);
  }

  return directoryContents;
};

const getFileContents = async (file = process.cwd()) => {
  const fileContents = await readFile(file);

  if (!fileContents) {
    throw new Error(`Could not read file ${file}`);
  }

  return fileContents.toString();
};

const getCommandOutput = async function(command) {
  const { stdout } = await execute(command, { cwd: '..', shell: '/bin/bash' });
  return stdout;
}

const canExecute = async function(file) {
  try {
    fs.accessSync(file, fs.constants.X_OK);
    return true;
  } catch (err) {
    return false;
  }
}

const removeWhitespace = async function(string) {
  return string.replace(/\s/g, '');
}

const getScriptOutput = async function(command, input = []) {
  let nextInput = 0;

  const child = exec(command, {cwd: '..'});
  child.stdout.on('data', () => {
    if(nextInput < input.length) {
      child.stdin.write(`${input[nextInput++] || ''}\n`);
    }
  });

  child.stderr.on('data', err => {
    console.log(`An error occurred running ${command}`);
    console.log(err);
  });

  setTimeout(() => {
    child.kill();
  }, 1000);

  const { stdout } = await child;
  return stdout;
};

const appendAndRun = async function(file, string, options = { input: [], args: [] }) {
  const { input = [], args = []} = options;
  const fileContents = await getFileContents(file);
  const appended = `${fileContents}\n${string}`;

  fs.writeFileSync('test.sh', appended);
  fs.chmodSync('test.sh', '755');

  const commandOutput = await getScriptOutput(`./.freeCodeCamp/test.sh ${args.join(' ')}`, input);

  return commandOutput;
}

const replaceAndRun = async function(file, oldString, newString, options = { input: [], args: [] }) {
  const { input = [], args = []} = options;
  const fileContents = await getFileContents(file);
  const replaced = fileContents.replace(oldString, newString);

  fs.writeFileSync('test.sh', replaced);
  fs.chmodSync('test.sh', '755');

  const commandOutput = await getScriptOutput(`./.freeCodeCamp/test.sh ${args.join(' ')}`, input);

  return commandOutput;
}

exports.getLastCommand = getLastCommand;
exports.getNextCommand = getNextCommand;
exports.getCwd = getCwd;
exports.getPreviousCwd = getPreviousCwd;
exports.getDirectoryContents = getDirectoryContents;
exports.getFileContents = getFileContents;
exports.getCommandOutput = getCommandOutput;
exports.canExecute = canExecute;
exports.removeWhitespace = removeWhitespace;
exports.getScriptOutput = getScriptOutput;
exports.appendAndRun = appendAndRun;
exports.replaceAndRun = replaceAndRun;
