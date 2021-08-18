const fs = require('fs-extra')
const path = require('path')

exports.Logger = class Logger {
  constructor(file, maxMemLog=5000) {
    this.file = path.join(file)
    this.maxMemLog = maxMemLog - 1
    this.allLog = []
  }

  get all() {
    return this.allLog
  }

  get _date() {
    return new Date().toISOString()
  }

  _bodyMessage(text, type='L') {
    let body = `[${this._date}][${type}]`
    let message = `${body}: ${text}`

    return message
  }

  _bodyGroup(text, type='group') {
    let message = `----- [${type}]: ${text} -----`

    return message
  }

  _writeConsole(text, type='log') {
    type ? console[type](text) : console.log(text)
  }

  async _writeFile(message){
    try {
      this._pushAllLog(message)

      const exists = await fs.pathExists(`${this.file}`)

      if(!exists) {
        await fs.outputFile(`${this.file}`, `${message}\n`)
      }else{
        await fs.appendFile(`${this.file}`, `${message}\n`)
      }
      return true
    } catch (e) {
      console.error(e)
      return false
    }
  }

  _pushAllLog(data){
    this.allLog.push(data)

    if(this.allLog.length >= this.maxMemLog){
      this.allLog.splice(0, (this.allLog.length-1) - this.maxMemLog)
    }
  }

  async group(text) { // Group Log
    let message = this._bodyGroup(text, 'group')
    this._writeConsole(message, 'group')

    await this._writeFile(message)
  }

  async groupEnd(text) { //Group End Log
    let message = this._bodyGroup(text, 'groupEnd')
    this._writeConsole(message, null)
    this._writeConsole('', 'groupEnd')

    await this._writeFile(message)
  }

  async groupend(text) { // alias groupEnd
    await this.groupEnd(text)
  }

  async line() {
    let text = '-------------------------'    // line message
    let message = this._bodyMessage(text, 'L') // formating message
    this._writeConsole(message)                // display console.log
    await this._writeFile(message)             // write file log
  }

  async delimiter() { // alias line
    await this.line()
  }

  async separator() { // alias line
    await this.line()
  }

  async empty() {
    let message = ''                          // formating message
    this._writeConsole(message)                // display console.log
    await this._writeFile(message)             // write file log
  }

  async blank() { // alias empty
    await this.empty()
  }

  async null() { // alias empty
    await this.empty()
  }

  async space() { // alias empty
    await this.empty()
  }

  async log(text) {
    let message = this._bodyMessage(text, 'L') // formating message
    this._writeConsole(message)                // display console.log
    await this._writeFile(message)             // write file log
  }

  async logging(text) { // alias log
    await this.log(text)
  }

  async text(text) { // alias log
    await this.log(text)
  }

  async l(text) { // alias log
    await this.log(text)
  }

  async info(text) {
    let message = this._bodyMessage(text, 'I') // formating message
    this._writeConsole(message)                // display console.log
    await this._writeFile(message)             // write file log
  }

  async information(text) { // alias info
    await this.info(text)
  }

  async i(text) { // alias info
    await this.info(text)
  }

  async error(text) {
    let message = this._bodyMessage(text, 'E') // formating message
    this._writeConsole(message)                // display console.log
    await this._writeFile(message)             // write file log
  }

  async err(text) { // alias error
    await this.error(text)
  }

  async e(text) { // alias error
    await this.error(text)
  }

  async dev(text, json=false) {
    text = json ? JSON.stringify(text, null, '\t') : text
    let message = this._bodyMessage(text, 'D') // formating message
    this._writeConsole(message)                // display console.log
  }

  async developer(text, json=false) { // alias dev
    await this.dev(text, json)
  }

  async d(text, json=false) { // alias dev
    await this.dev(text, json)
  }

  async json(text) {
    text = text ? JSON.stringify(text, null, '\t') : ''
    let message = this._bodyMessage(text, 'JSON') // formating message
    this._writeConsole(message)                   // display console.log
  }

  async stringify(text) { // alias json
    await this.json(text)
  }
}