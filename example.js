const saNumberRegex = require('./index')

console.log(saNumberRegex({exact: true}).test('0749585337'))
console.log(saNumberRegex({exact: true}).test('0833597957'))
console.log(saNumberRegex({exact: true}).test('0845017368'))
