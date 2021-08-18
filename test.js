const { Logger } = require('./Logger')
const logger = new Logger('log/log_file.txt')

const json = {"strict": {"column": {"age": 24,"name": "Yury", "job": "Developer"}}}// logger.dev

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