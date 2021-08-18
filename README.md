### camel-logger - NodeJS file logger
[![npm version](https://badge.fury.io/js/camel-logger.svg)](https://badge.fury.io/js/camel-logger)
![NPM](https://img.shields.io/npm/l/camel-logger?logo=npm)

### New Version 1.1.1
```javascript
logger.group('group alias')
  logger.delimiter() // alias line
  logger.separator() // alias line
  logger.blank() // alias empty
  logger.null() // alias empty
  logger.space() // alias empty
  logger.logging('log alias') // alias log
  logger.text('log alias') // alias log
  logger.l('log alias') // alias log
  logger.information('info alias') // alias info
  logger.i('info alias') // alias info
  logger.err('error alias') // alias error
  logger.e('error alias') // alias error
  logger.developer(json, true) // alias dev
  logger.stringify(json) // alias json
logger.groupEnd('group alias')
logger.groupend('group alias') //alias groupEnd
//-- logger.groupend('group alias') //alias groupEnd
// ----- [group]: group alias -----
//   [2021-08-18T17:45:10.304Z][L]: -------------------------
//   [2021-08-18T17:45:10.305Z][L]: -------------------------
//
//
//
//   [2021-08-18T17:45:10.307Z][L]: log alias
//   [2021-08-18T17:45:10.307Z][L]: log alias
//   [2021-08-18T17:45:10.308Z][L]: log alias
//   [2021-08-18T17:45:10.308Z][I]: info alias
//   [2021-08-18T17:45:10.309Z][I]: info alias
//   [2021-08-18T17:45:10.309Z][E]: error alias
//   [2021-08-18T17:45:10.309Z][E]: error alias
//   [2021-08-18T17:45:10.310Z][D]: {
//         "strict": {
//                 "column": {
//                         "age": 24,
//                         "name": "Yury",
//                         "job": "Developer"
//                 }
//         }
//   }
//   [2021-08-18T17:45:10.312Z][D]: {
//         "strict": {
//                 "column": {
//                         "age": 24,
//                         "name": "Yury",
//                         "job": "Developer"
//                 }
//         }
//   }
//   [2021-08-18T17:45:10.314Z][JSON]: {
//         "strict": {
//                 "column": {
//                         "age": 24,
//                         "name": "Yury",
//                         "job": "Developer"
//                 }
//         }
//   }
//   ----- [groupEnd]: group alias -----
```

```javascript
const json = {"strict": {"column": {"age": 24,"name": "Yury", "job": "Developer"}}}// logger.dev, logger.json
logger.json(json)
// [2021-08-18T17:24:49.219Z][JSON]: {
//   "strict": {
//           "column": {
//                   "age": 24,
//                   "name": "Yury",
//                   "job": "Developer"
//           }
//   }
// }
```

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
logger.group('Group log')
  logger.line()
  logger.log('Log .log')
  logger.text('Log .text')
  logger.delimiter()
logger.groupEnd('Group log')
// -- logger.groupend('Group log') // alias
// ----- [group]: Group log -----
//   [2021-08-18T17:36:58.858Z][L]: -------------------------
//   [2021-08-18T17:36:58.859Z][L]: Log .log
//   [2021-08-18T17:36:58.860Z][L]: Log .text
//   [2021-08-18T17:36:58.860Z][L]: -------------------------
// ----- [groupEnd]: Group log -----

logger.line()
logger.delimiter() // alias
logger.separator() // alias
// [2021-08-18T17:26:13.986Z][L]: -------------------------

logger.log('Log .log')
logger.text('Log .log') // alias
// [2021-08-18T17:26:13.986Z][L]: Log .log

logger.info('Log .info')
logger.information('Log .info') // alias
logger.i('Log .info') // alias
// [2021-08-18T17:26:13.987Z][I]: Log .info

logger.error('Log .error')
logger.err('Log .error')
logger.e('Log .error')
// [2021-08-18T17:26:13.987Z][E]: Log .error

const json = {"strict": {"column": {"age": 24,"name": "Yury", "job": "Developer"}}}// logger.dev, logger.json
logger.dev('Log .dev') // No record log file
logger.developer('Log .dev') // No record log file / alias
logger.d('Log .dev') // No record log file / alias
// [2021-08-18T17:26:13.988Z][D]: Log .dev

logger.dev(json, true) // true - on mode JSON.STRINGIFY / No record log file
logger.developer(json, true) // true - on mode JSON.STRINGIFY / No record log file / alias
logger.d(json, true) // true - on mode JSON.STRINGIFY / No record log file / alias
// [2021-08-18T17:24:49.218Z][D]: {
//   "strict": {
//           "column": {
//                   "age": 24,
//                   "name": "Yury",
//                   "job": "Developer"
//           }
//   }
// }

logger.json(json) // No record log file
logger.stringify(json) // No record log file / alias
// [2021-08-18T17:24:49.219Z][JSON]: {
//   "strict": {
//           "column": {
//                   "age": 24,
//                   "name": "Yury",
//                   "job": "Developer"
//           }
//   }
// }
```