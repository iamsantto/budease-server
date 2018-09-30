import Sequelize from 'sequelize'
import config from '../../config/db-config.json'

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

const models = {
  Bud: sequelize.import('./bud'),
  Friends: sequelize.import('./friends'),
  Settings: sequelize.import('./settings'),
  User: sequelize.import('./user')
}

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models)
  }
})

models.sequelize = sequelize
models.Sequelize = Sequelize

export default models
