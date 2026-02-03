import test from 'ava';
import {execa} from 'execa';

test.serial('main', async t => {
	const input = '🦄';
	await execa('./cli.js', {input});

	const {stdout} = await execa('./cli.js', {
		env: {
			STDIN: 0,
		},
	});

	t.is(stdout, input);
});

test.serial('large multiline input', async t => {
	const line = 'I am a pink elephant. Do not think about me';
	const lineCount = 5000;
	const input = Array.from({length: lineCount}, () => line).join('\n');

	await execa('./cli.js', {input});

	const {stdout} = await execa('./cli.js', {
		env: {
			STDIN: 0,
		},
	});

	t.is(stdout, input);
});
