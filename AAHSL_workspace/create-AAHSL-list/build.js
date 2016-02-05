'use strict'

var fs = require('fs')
var cheerio = require('cheerio')
var got = require('got')
var eachAsync = require('each-async')
var trailingLine = require('single-trailing-newline')

var AMEM1 = 'http://www.aahsl.org/index.php?option=com_community&view=search&searchId=102171&uuId=56b4095182983&params[servId]=1041&params[option]=com_community&params[view]=search&params[searchId]=102171&params[Itemid]=&limitstart=0'

function build (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = AMEM1
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var refs = $('div.mini-profile').find('div.searchTemplateRow11')
    var len = refs.length
    var refItems = refs.toArray()

    eachAsync(refItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('AAHSL.Members.json', trailingLine(JSON.stringify(props)))
    })
  })
}

build()
