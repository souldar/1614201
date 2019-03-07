const WXBizDataCrypt = require('./WXBizDataCrypt')

const exec = require('child_process').exec
exec('head -n 80 /dev/urandom | tr -dc A-Za-z0-9 | head -c 168',
  function (err, stdout, stderr) {
    console.log(stdout)
  })

function generate3rdSession (appid, sessionKey, encryptedData, iv) {
  let openid = new WXBizDataCrypt(appid, sessionKey)
  openid = openid.decryptData(encryptedData, iv).unionId
  let session = '7dWgj4b4szfnn8of0HyrnaPKUZvWSdiaTtfGszEsNIDsEwWTxSZTyfMi0L0mJ44mIcMlzK8s2IT8RrYGvVrjDHPXoN8lBdjcHtpTU9vVuGOfwHHrIGvbh4fjnuj19XHiSmJ8hfPuh498FpgV30Mx1ER4OyKEwX7KnZyLos2q'
  exec('head -n 80 /dev/urandom | tr -dc A-Za-z0-9 | head -c 168',
    (err, stdout, stderr) => {
      session = stdout
    })
  return {
    mySession: session,
    openid: openid,
    sessionKey: sessionKey
  }
}

module.exports = generate3rdSession
