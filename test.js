import test from 'ava';
import {execa} from 'execa';

test('main', async t => {
	const input = '🦄';
	await execa('./cli.js', {input});

	const {stdout} = await execa('./cli.js', {
		env: {
			STDIN: 0,
		},
	});

	t.is(stdout, input);
});
