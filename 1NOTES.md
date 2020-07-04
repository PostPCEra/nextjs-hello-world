# Important Notes to add features to project


### 1. this MediaElement.js may lead to more problems
- it is not building . see errors below.
- if you loook at package.json of the orignal Mediaelement repo, it has lot of build steps https://github.com/mediaelement/mediaelement/blob/master/package.json
- so we may not able to fix all those ...
- so check-in into github repo at this point and visit later if required
- it we visit later, build project from it's own repo, make it work , then add 'some react parts' like  'react-table code ' etcc..

```
ReferenceError: Element is not defined
    at Object.29.2 (/home/valuec/nextjs-hello-world/node_modules/mediaelement/build/mediaelement-and-player.js:8148:5)
    at s (/home/valuec/nextjs-hello-world/node_modules/mediaelement/build/mediaelement-and-player.js:11:268)
    at e (/home/valuec/nextjs-hello-world/node_modules/mediaelement/build/mediaelement-and-player.js:11:439)
    at Object.<anonymous> (/home/valuec/nextjs-hello-world/node_modules/mediaelement/build/mediaelement-and-player.js:11:468)
    at Module._compile (internal/modules/cjs/loader.js:1118:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1138:10)
    at Module.load (internal/modules/cjs/loader.js:982:32)
    at Function.Module._load (internal/modules/cjs/loader.js:875:14)
    at Module.require (internal/modules/cjs/loader.js:1022:19)
    at require (internal/modules/cjs/helpers.js:72:18)
    at Object.<anonymous> (/home/valuec/nextjs-hello-world/node_modules/mediaelement/full.js:1:18)
```


--------------------------------------------------------------------------
### 1. we need to have next js build with  React-player
- https://github.com/PostPCEra/react-player/blob/master/package.json
- "build:demo": "cross-env NODE_ENV=production webpack --config webpack/production.babel.js",
- above is 'npm run build:demo' entry in package.json
- How do I integrate with regular next js package.json file ?
- below 2) is some reference , we may try it ?



### 2. HOw to do Custome server build
- source : https://levelup.gitconnected.com/set-up-next-js-with-a-custom-express-server-typescript-9096d819da1c
- how to build customer server; both builds of 'next' and 'express'
```
"scripts": {
    "build:server": "tsc --project tsconfig.server.json",
    "build:next": "next build",
    "build": "npm run build:next && npm run build:server",
    "start": "NODE_ENV=production node dist/index.js"
}
```
