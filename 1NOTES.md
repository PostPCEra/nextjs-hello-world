# Important Notes to add features to project

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
