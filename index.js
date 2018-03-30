const pattern = '(0|27)[78]\\d{8}'

module.exports = (options = {}) => {
  return options.exact ? new RegExp(`^${pattern}$`) : new RegExp(pattern, 'g')
}
