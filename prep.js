#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const rootDir = './node_modules/@mdi/svg/svg';
const output = './png/';
const conv = require('svg2img');

if (!fs.existsSync('png')) fs.mkdirSync('png')

fs.readdirSync(rootDir)
  .forEach(filename => {
    const dir = [rootDir,filename].join(path.sep)
    conv(dir, { width: 128, height:128}, function (error, buffer) {
      fs.writeFileSync(output+filename+'.png', buffer);
      })
  })
