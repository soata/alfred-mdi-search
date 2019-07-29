#!/usr/bin/env node
const cp = require('child_process');

function initNpm() {
  const code = cp.spawnSync('npm', ['i'], {
    encoding: 'utf8'
  }).stdout;
  console.log(code);
}

initNpm();

