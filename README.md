# generator-snapcraft [![NPM version][npm-image]][npm-url] 
> Yoman generator for snapcraft

## Installation

First, install [Yeoman](http://yeoman.io) and generator-snapcraft using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-snapcraft
```

Then generate your new project:

```bash
mkdir new-project && cd new-project
yo generator-snapcraft
```

## Building your project
You may need to install dependencies for snapcraft
- Snapcraft (https://snapcraft.io/)
- git (https://git-scm.com/)
- multipass (https://multipass.run/)

Now you can run the sample script to build your new snap
```bash
bash ./build_test.sh
```

## License

MIT © [Andrew Schmidt](https://github.com/andrewschmidt-a)


[npm-image]: https://badge.fury.io/js/generator-snapcraft.svg
[npm-url]: https://npmjs.org/package/generator-snapcraft
[travis-image]: https://travis-ci.com/andrewschmidt-a/generator-snapcraft-yo-node.svg?branch=master
[travis-url]: https://travis-ci.com/andrewschmidt-a/generator-snapcraft-yo-node
[daviddm-image]: https://david-dm.org/andrewschmidt-a/generator-snapcraft-yo-node.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/andrewschmidt-a/generator-snapcraft-yo-node
[coveralls-image]: https://coveralls.io/repos/andrewschmidt-a/generator-snapcraft-yo-node/badge.svg
[coveralls-url]: https://coveralls.io/r/andrewschmidt-a/generator-snapcraft-yo-node
