const saNumberRegex = require('./index')

test('should be defined', () => {
  expect(saNumberRegex).toBeDefined()
})

test('should match SA cellphone number', () => {
  expect(saNumberRegex({ exact: true }).test('0749585337')).toBeTruthy()
  expect(saNumberRegex({ exact: true }).test('0833597957')).toBeTruthy()
  expect(saNumberRegex({ exact: true }).test('0845017368')).toBeTruthy()
})

test('should not match invalid numbers', () => {
  expect(saNumberRegex({ exact: true }).test('1234567890')).toBeFalsy()
})
