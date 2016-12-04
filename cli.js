#!/usr/bin/env node
'use strict';
const meow = require('meow');
const getStdin = require('get-stdin');
const clipboardy = require('clipboardy');

meow(`
	Example
	  $ echo 🦄 | clipboard
	  $ clipboard
	  🦄
`);

if (process.stdin.isTTY || process.env.STDIN === '0') {
	console.log(clipboardy.readSync());
} else {
	getStdin().then(stdin => {
		clipboardy.writeSync(stdin);
	});
}
