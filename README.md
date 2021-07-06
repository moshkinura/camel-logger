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
logger.empty()
logger.log('Log .log')
logger.info('Log .info')
logger.error('Log .error')
logger.dev('Log .dev')

const json = {"strict": {"column": {"age": 24,"name": "Yury", "job": "Developer"}}}// logger.dev
logger.dev(json, true)
```