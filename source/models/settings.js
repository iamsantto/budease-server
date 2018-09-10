export default (sequelize, DataTypes) => {
  const Settings = sequelize.define('settings', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'INR'
    },
    notifications: DataTypes.STRING,
    timezone: DataTypes.STRING,
    language: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'EN'
    },
    visibility: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  })

  Settings.associate = (models) => {
    models.Settings.belongsTo(models.User, {
      foreignKey: {
        name: 'userId',
        field: 'user_id'
      }
    })
  }

  return Settings
}
