### camel-logger - NodeJS file logger
[![npm version](https://badge.fury.io/js/camel-logger.svg)](https://badge.fury.io/js/camel-logger)
![NPM](https://img.shields.io/npm/l/camel-logger?logo=npm)

### Install:
```bash
npm i camel-logger
```

### Just require it

```javascript
const { Logger } = require('camel-logger')
const logger = new Logger('log/log_file.txt') // Log file directory
```

### Main function
```javascript
logger.line()
// [2021-07-02T21:26:23.069Z][L]: -------------------------

logger.empty()
//

logger.log('Log .log')
// [2021-07-02T21:26:23.086Z][L]: Log .log

logger.info('Log .info')
// [2021-07-02T21:26:23.086Z][L]: Log .info

logger.error('Log .error')
// [2021-07-02T21:26:23.086Z][L]: Log .error

logger.dev('Log .dev') // Doesn't write log to file
// [2021-07-02T21:26:23.087Z][D]: Log .dev

const json = {"strict": {"column": {"age": 24,"name": "Yury", "job": "Developer"}}}// logger.dev
logger.dev(json, true)
// [2021-07-02T21:26:23.087Z][D]: {
//   "strict": {
//     "column": {
//             "age": 24,
//             "name": "Yury",
//             "job": "Developer"
//     }
// }
// }
```