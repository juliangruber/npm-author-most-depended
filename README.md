# npm-author-most-depended

Get the most depended on npm packages per author.

## Usage

List packages by an author sorted descending by direct dependent count count:

```bash
$ npx npm-author-most-depended juliangruber | head
   431 : http://npm.im/levelup
   408 : http://npm.im/level
   386 : http://npm.im/koa-static
   283 : http://npm.im/hyperquest
   276 : http://npm.im/memdown
   271 : http://npm.im/leveldown
   252 : http://npm.im/component-emitter
   246 : http://npm.im/tape-run
   195 : http://npm.im/koa-compose
   176 : http://npm.im/debounce
```

## API

```bash
$ npm install npm-author-most-depended
```

```js
const npmAuthorMostDepended = require('npm-author-most-depended')

const packages = await npmAuthorMostDepended('juliangruber')
for (const pkg of packages) {
  console.log(`${String(pkg.dependents).padStart(6)} : http://npm.im/${pkg.name}`)
}
```

## License

MIT