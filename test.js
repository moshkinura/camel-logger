const { Logger } = require('./Logger')
const logger = new Logger('log/log_file.txt')

const json = {"strict": {"column": {"age": 24,"name": "Yury", "job": "Developer"}}}// logger.dev
logger.group("group Text")
// ----- [group]: group Text -----
logger.line()
// [2021-07-02T21:26:23.069Z][L]: -------------------------
logger.empty()
// 
logger.log('Log .log')
// [2021-07-02T21:26:23.086Z][L]: Log .log
logger.info('Log .info')
// [2021-07-02T21:26:23.086Z][I]: Log .info
logger.error('Log .error')
// [2021-07-02T21:26:23.087Z][E]: Log .error
logger.dev('Log .dev') // No record log file
// [2021-07-02T21:26:23.087Z][D]: Log .dev
logger.dev(json, true) // true - on mode JSON.STRINGIFY / No record log file
// [2021-07-02T21:26:23.087Z][D]: {
//   "strict": {
//     "column": {
//             "age": 24,
//             "name": "Yury",
//             "job": "Developer"
//     }
// }
// }
logger.groupend() // Group End