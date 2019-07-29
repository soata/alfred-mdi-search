#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const alfredNotifier = require('alfred-notifier');
const common = require('./common');
const alfy = common.alfy;
const rootDir = common.rootDir;
const pngTail = common.pngTail;

const data = fs
      .readdirSync(rootDir)
  .map(filename => {
        const arg = filename.replace(pngTail, '');
        const title = arg.replace(/\.svg.png/, '');

        return {
          title: title,
          icon: {
            path: [rootDir,filename].join(path.sep),
          },
          arg: arg,
        };
      });

if (alfy.alfred.version) {
  const input = alfy.input;
  const items = data
    .filter(i => i.title.includes(input) )
  alfredNotifier();
  alfy.output(items);
} else {
  console.log(data[0]);
}

