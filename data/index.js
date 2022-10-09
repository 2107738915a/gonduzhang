const Mock = require('mockjs');
const Random = Mock.Random;

let arr = Mock.mock({
  'data|1000': [{
    'id|+1': 1,
    'name': '@cname',
    'age|1-100': 1,
    'address': '@county(false)',
    'date': '@date',
    "desc": "@cparagraph(1,3)"
  }]
})

module.exports = arr