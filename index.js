module.exports = process.browser ? check() : false

function check() {
  var version = typeof navigator !== 'undefined' &&
    navigator.appVersion &&
    navigator.appVersion.match(/MSIE ([\d.]+)/)

  return version ? Number(version[1]) || null : null
}
