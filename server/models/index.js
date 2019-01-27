const Sequelize = require('sequelize')
const db = new Sequelize("postgres://localhost:5432/listo", { operatorsAliases: false })

const List = db.define('list', {
  title: { type: Sequelize.STRING, allowNull: false },
})

const Item = db.define('item', {
  text: { type: Sequelize.TEXT, allowNull: false }
})

const User = db.define('user', {
  name: { type: Sequelize.STRING, allowNull: false },
})

List.belongsTo(User, {as: 'owner', foreignKey: { allowNull: false }})
Item.belongsTo(List, {foreignKey: { allowNull: false }})

module.exports = { List, Item, User, db }