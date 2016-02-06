'use strict'

/*
 *  To run this file, run the following command
 *  from the parent directory:
 *  
 *    > node build
 *  
 *  It will output 18 json files, 9 of institution
 *  names and 9 of library names.
 *
 *  The purpose of this javascript is to scrape the 
 *  members directory of the Association of Academic
 *  Health Science Libraries.

 *  At the time of research (February 2016) there are 162 members.
 *  The list of 162 members is broken up across 9
 *  individual pages of 20 members/page.
 *
 *  These numbers are hardcoded into the code
 *  below and might need to be adjusted accordingly
 *  for future use.
 *  
 *  Adapted from John Otander's css-properties tool,
 *  https://github.com/johnotander/css-properties
 *
 */

var fs = require('fs')
var cheerio = require('cheerio')
var got = require('got')
var eachAsync = require('each-async')
var trailingLine = require('single-trailing-newline')

var PAGE1 = 'http://www.aahsl.org/index.php?option=com_community&view=search&searchId=102171&uuId=56b4095182983&params[servId]=1041&params[option]=com_community&params[view]=search&params[searchId]=102171&params[Itemid]=&limitstart=0'

var PAGE2 = 'http://www.aahsl.org/index.php?option=com_community&view=search&searchId=102171&uuId=56b4095182983&params[servId]=1041&params[option]=com_community&params[view]=search&params[searchId]=102171&params[Itemid]=&limitstart=20'

var PAGE3 = 'http://www.aahsl.org/index.php?option=com_community&view=search&searchId=102171&uuId=56b4095182983&params[servId]=1041&params[option]=com_community&params[view]=search&params[searchId]=102171&params[Itemid]=&limitstart=40'

var PAGE4 = 'http://www.aahsl.org/index.php?option=com_community&view=search&searchId=102171&uuId=56b4095182983&params[servId]=1041&params[option]=com_community&params[view]=search&params[searchId]=102171&params[Itemid]=&limitstart=60'

var PAGE5 = 'http://www.aahsl.org/index.php?option=com_community&view=search&searchId=102171&uuId=56b4095182983&params[servId]=1041&params[option]=com_community&params[view]=search&params[searchId]=102171&params[Itemid]=&limitstart=80'

var PAGE6 = 'http://www.aahsl.org/index.php?option=com_community&view=search&searchId=102171&uuId=56b4095182983&params[servId]=1041&params[option]=com_community&params[view]=search&params[searchId]=102171&params[Itemid]=&limitstart=100'

var PAGE7 = 'http://www.aahsl.org/index.php?option=com_community&view=search&searchId=102171&uuId=56b4095182983&params[servId]=1041&params[option]=com_community&params[view]=search&params[searchId]=102171&params[Itemid]=&limitstart=120'

var PAGE8 = 'http://www.aahsl.org/index.php?option=com_community&view=search&searchId=102171&uuId=56b4095182983&params[servId]=1041&params[option]=com_community&params[view]=search&params[searchId]=102171&params[Itemid]=&limitstart=140'

var PAGE9 = 'http://www.aahsl.org/index.php?option=com_community&view=search&searchId=102171&uuId=56b4095182983&params[servId]=1041&params[option]=com_community&params[view]=search&params[searchId]=102171&params[Itemid]=&limitstart=160'


function page1Insts (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE1
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var instNames = $('div.mini-profile').find('div.searchTemplateRow12')
    var instLen = instNames.length
    var instNameItems = instNames.toArray()

    eachAsync(instNameItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('AAHSL.Page1.Insts.json', trailingLine(JSON.stringify(props)))
    })

  })
}

function page1Libs (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE1
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var libNames = $('div.mini-profile').find('div.searchTemplateRow11')
    var libLen = libNames.length
    var libNameItems = libNames.toArray()

    eachAsync(libNameItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('AAHSL.Page1.Libs.json', trailingLine(JSON.stringify(props)))
    })

  })
}

function page2Insts (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE2
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var instNames = $('div.mini-profile').find('div.searchTemplateRow12')
    var instLen = instNames.length
    var instNameItems = instNames.toArray()

    eachAsync(instNameItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('AAHSL.Page2.Insts.json', trailingLine(JSON.stringify(props)))
    })

  })
}

function page2Libs (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE2
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var libNames = $('div.mini-profile').find('div.searchTemplateRow11')
    var libLen = libNames.length
    var libNameItems = libNames.toArray()

    eachAsync(libNameItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('AAHSL.Page2.Libs.json', trailingLine(JSON.stringify(props)))
    })

  })
}

function page3Insts (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE3
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var instNames = $('div.mini-profile').find('div.searchTemplateRow12')
    var instLen = instNames.length
    var instNameItems = instNames.toArray()

    eachAsync(instNameItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('AAHSL.Page3.Insts.json', trailingLine(JSON.stringify(props)))
    })

  })
}

function page3Libs (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE3
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var libNames = $('div.mini-profile').find('div.searchTemplateRow11')
    var libLen = libNames.length
    var libNameItems = libNames.toArray()

    eachAsync(libNameItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('AAHSL.Page3.Libs.json', trailingLine(JSON.stringify(props)))
    })

  })
}

function page4Insts (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE4
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var instNames = $('div.mini-profile').find('div.searchTemplateRow12')
    var instLen = instNames.length
    var instNameItems = instNames.toArray()

    eachAsync(instNameItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('AAHSL.Page4.Insts.json', trailingLine(JSON.stringify(props)))
    })

  })
}

function page4Libs (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE4
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var libNames = $('div.mini-profile').find('div.searchTemplateRow11')
    var libLen = libNames.length
    var libNameItems = libNames.toArray()

    eachAsync(libNameItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('AAHSL.Page4.Libs.json', trailingLine(JSON.stringify(props)))
    })

  })
}

function page5Insts (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE5
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var instNames = $('div.mini-profile').find('div.searchTemplateRow12')
    var instLen = instNames.length
    var instNameItems = instNames.toArray()

    eachAsync(instNameItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('AAHSL.Page5.Insts.json', trailingLine(JSON.stringify(props)))
    })

  })
}

function page5Libs (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE5
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var libNames = $('div.mini-profile').find('div.searchTemplateRow11')
    var libLen = libNames.length
    var libNameItems = libNames.toArray()

    eachAsync(libNameItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('AAHSL.Page5.Libs.json', trailingLine(JSON.stringify(props)))
    })

  })
}

function page6Insts (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE6
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var instNames = $('div.mini-profile').find('div.searchTemplateRow12')
    var instLen = instNames.length
    var instNameItems = instNames.toArray()

    eachAsync(instNameItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('AAHSL.Page6.Insts.json', trailingLine(JSON.stringify(props)))
    })

  })
}

function page6Libs (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE6
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var libNames = $('div.mini-profile').find('div.searchTemplateRow11')
    var libLen = libNames.length
    var libNameItems = libNames.toArray()

    eachAsync(libNameItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('AAHSL.Page6.Libs.json', trailingLine(JSON.stringify(props)))
    })

  })
}

function page7Insts (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE7
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var instNames = $('div.mini-profile').find('div.searchTemplateRow12')
    var instLen = instNames.length
    var instNameItems = instNames.toArray()

    eachAsync(instNameItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('AAHSL.Page7.Insts.json', trailingLine(JSON.stringify(props)))
    })

  })
}

function page7Libs (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE7
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var libNames = $('div.mini-profile').find('div.searchTemplateRow11')
    var libLen = libNames.length
    var libNameItems = libNames.toArray()

    eachAsync(libNameItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('AAHSL.Page7.Libs.json', trailingLine(JSON.stringify(props)))
    })

  })
}

function page8Insts (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE8
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var instNames = $('div.mini-profile').find('div.searchTemplateRow12')
    var instLen = instNames.length
    var instNameItems = instNames.toArray()

    eachAsync(instNameItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('AAHSL.Page8.Insts.json', trailingLine(JSON.stringify(props)))
    })

  })
}

function page8Libs (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE8
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var libNames = $('div.mini-profile').find('div.searchTemplateRow11')
    var libLen = libNames.length
    var libNameItems = libNames.toArray()

    eachAsync(libNameItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('AAHSL.Page8.Libs.json', trailingLine(JSON.stringify(props)))
    })

  })
}

function page9Insts (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE9
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var instNames = $('div.mini-profile').find('div.searchTemplateRow12')
    var instLen = instNames.length
    var instNameItems = instNames.toArray()

    eachAsync(instNameItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('AAHSL.Page9.Insts.json', trailingLine(JSON.stringify(props)))
    })

  })
}

function page9Libs (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = PAGE9
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var libNames = $('div.mini-profile').find('div.searchTemplateRow11')
    var libLen = libNames.length
    var libNameItems = libNames.toArray()

    eachAsync(libNameItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('AAHSL.Page9.Libs.json', trailingLine(JSON.stringify(props)))
    })

  })
}


page1Insts()
page1Libs()
page2Insts()
page2Libs()
page3Insts()
page3Libs()
page4Insts()
page4Libs()
page5Insts()
page5Libs()
page6Insts()
page6Libs()
page7Insts()
page7Libs()
page8Insts()
page8Libs()
page9Insts()
page9Libs()
