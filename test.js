const saCompanyRegistration = require('./index')

test('should be defined', () => {
  expect(saCompanyRegistration).toBeDefined()
})

test('should match SA cellphone number', () => {
  expect(saCompanyRegistration({ exact: true }).test('2001/012511/07')).toBeTruthy()
})

test('should not match invalid numbers', () => {
  expect(saCompanyRegistration({ exact: true }).test('foobarbaz')).toBeFalsy()
})
