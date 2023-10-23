#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import getStdin from 'get-stdin';
import clipboardy from 'clipboardy';

meow(`
	Example
	  $ echo 🦄 | clipboard
	  $ clipboard
	  🦄
`, {
	importMeta: import.meta,
});

if (process.stdin.isTTY || process.env.STDIN === '0') {
	process.stdout.write(clipboardy.readSync());
} else {
	clipboardy.writeSync(await getStdin());
}
