#!/usr/bin/env node
'use strict';
const meow = require('meow');
const getStdin = require('stdin2');
const clipboardy = require('clipboardy');

meow(`
	Example
	  $ echo 🦄 | clipboard
	  $ clipboard
	  🦄
`);

if (process.stdin.isTTY || process.env.STDIN === '0') {
	process.stdout.write(clipboardy.readSync());
} else {
	(async () => {
        try {
            const text = await getStdin({ timeout: 30 });
            clipboardy.writeSync(text.replace(/(\r\n|\n|\r)$/gm, " "));
        }
        catch (e) {
            process.stdout.write(clipboardy.readSync());
            process.exit(0);
        }
	})();
}
