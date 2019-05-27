/*
 * @Author: etongfu
 * @Email: 13583254085@163.com
 * @Version: 
 * @Date: 2019-05-24 17:46:04
 * @LastEditors: etongfu
 * @LastEditTime: 2019-05-25 15:33:06
 * @Description: 开始执行打包
 * @youWant: add you want info here
 */
'use strict'

process.env.NODE_ENV = process.env.NODE_ENV == 'beta' ? 'beta' : 'production'
const ora = require('ora')
const path = require('path')
const { sh } = require('tasksfile')
const chalk = require('chalk')

const rawArgv = process.argv.slice(2)
const args = rawArgv.join(' ')
console.log(args)

const spinner = ora(`building for ${process.env.NODE_ENV}...`)
spinner.start()

sh("vue-cli-service build --mode production", {silent: false})
spinner.succeed("打包完成")

