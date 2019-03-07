/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('userInfo', {
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'uid'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tel1: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    tel2: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    tel3: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    company: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    birthday: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'userInfo'
  })
}
