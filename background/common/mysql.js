const sequelize = require('../config/db')
const userInfo = sequelize.import('../schema/userInfo.js')
const user = sequelize.import('../schema/user.js')
const generate3rdSession = require('../utils/3rdSession')

async function getData () {
  const sql2 = 'SELECT * FROM userInfo'
  await sequelize.query(sql2, {type: sequelize.QueryTypes.SELECT}).
    then((res) => {
      console.log(res)
      return {
        flag: true,
        msg: '获取信息成功',
        data: res
      }
    }).catch((err) => {
      console.log(err)
      return {
        flag: false,
        msg: err
      }
    })
}

async function checkOpenId (openid) {
  console.log('openid:' + openid)
  const sql = `SELECT * from user where openid = ${openid}`
  let uid = ''
  await sequelize.query(sql, {type: sequelize.QueryTypes.SELECT}).
    then((res) => {
      console.log(res)
      if (res.length === 0) {
        return {
          flag: false,
          msg: '找不到该用户！'
        }
      } else {
        uid = data[0].uid
      }
    }).catch((err) => {
      console.log(err)
      return {
        flag: false,
        msg: err
      }
    })
  await sequelize.query(sql2, {type: sequelize.QueryTypes.SELECT}).
    then((res) => {
      console.log(res)
      return {
        flag: true,
        msg: '登陆成功！',
        data: res
      }
    }).
    catch((err) => {
      console.log(err)
      return {
        flag: false,
        msg: err
      }
    })
}

async function updateData (data) {
  console.log(data)
  await userInfo.update(data, {
    where: {
      uid: data.uid
    }
  }).then(() => {
    return {
      flag: true,
      msg: '更新成功'
    }
  }).catch(err => {
    console.log(err)
    return {
      flag: false,
      msg: err
    }
  })
}

async function insertData (data) {
  console.log(data)
  // const openid = generate3rdSession().openid
  const openid = '0000000'
  await user.create({uid: data.tel1, invite: '0000', openid: openid}).
    catch(err => {
      console.log(err)
      return {
        flag: false,
        msg: err
      }
    })
  await userInfo.create(data).then(() => {
    return {
      flag: true,
      msg: '插入成功'
    }
  }).catch(err => {
    console.log(err)
    return {
      flag: false,
      msg: err
    }
  })
}

insertData({
  uid: '15251770755',
  name: '康艺霖',
  tel1: '15251770755',
  tel2: '13609828734',
  tel3: null,
  address: '怡园22栋150102',
  company: null,
  birthday: '0901'
})

module.exports = {
  getData,
  checkOpenId,
  updateData,
  insertData
}

