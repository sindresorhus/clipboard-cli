# clipboard-cli [![Build Status](https://travis-ci.org/sindresorhus/clipboard-cli.svg?branch=master)](https://travis-ci.org/sindresorhus/clipboard-cli)

> Access the system clipboard (copy/paste) - cross-platform


## Install

```
$ npm install --global clipboard-cli
```
*Linux users will probably have to install [xsel](https://linux.die.net/man/1/xsel): `sudo apt install xsel`*

## Usage

```
$ clipboard --help

  Example
    $ echo 🦄 | clipboard
    $ clipboard
    🦄
```


## Tip

Run it with `$ cb` instead by adding `alias cb=clipboard` to your `.zshrc`/`.bashrc`.


## Related

- [clipboardy](https://github.com/sindresorhus/clipboardy) - API for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
