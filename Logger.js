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

  get date() {
    return new Date().toISOString()
  }

  bodyMessage(text, type='L') {
    let body = `[${this.date}][${type}]`
    let message = `${body}: ${text}`

    return message
  }

  bodyGroup(text, type='group') {
    let message = `----- [${type}]: ${text} -----`

    return message
  }

  writeConsole(text, type='log') {
    console[type](text)
  }

  async writeFile(message){
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

  async group(text) {
    let message = this.bodyGroup(text, 'group')
    this.writeConsole(message, 'group')

    await this.writeFile(message)
  }

  async groupend() {
    this.writeConsole('', 'groupEnd')
  }

  async line() {
    let text = '-------------------------'    // line message
    let message = this.bodyMessage(text, 'L') // formating message
    this.writeConsole(message)                // display console.log
    await this.writeFile(message)             // write file log
  }

  async empty() {
    let message = ''                          // formating message
    this.writeConsole(message)                // display console.log
    await this.writeFile(message)             // write file log
  }

  async log(text) {
    let message = this.bodyMessage(text, 'L') // formating message
    this.writeConsole(message)                // display console.log
    await this.writeFile(message)             // write file log
  }

  async info(text) {
    let message = this.bodyMessage(text, 'I') // formating message
    this.writeConsole(message)                // display console.log
    await this.writeFile(message)             // write file log
  }

  async error(text) {
    let message = this.bodyMessage(text, 'E') // formating message
    this.writeConsole(message)                // display console.log
    await this.writeFile(message)             // write file log
  }

  async dev(text, json=false) {
    if(json){
      text = JSON.stringify(text, null, '\t')
    }
    let message = this.bodyMessage(text, 'D') // formating message
    this.writeConsole(message)                // display console.log
  }
}