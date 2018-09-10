export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    firstName: {
      field: 'first_name',
      type: DataTypes.STRING
    },
    lastName: {
      field: 'last_name',
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    mobile: {
      type: DataTypes.INTEGER,
      unique: true
    },
    profilePicture: {
      field: 'profile_picture',
      type: DataTypes.STRING
    },
    loginType: {
      field: 'login_type',
      type: DataTypes.STRING
    },
    profileStatus: {
      field: 'profile_status',
      type: DataTypes.STRING
    },
    loginKey: {
      field: 'login_key',
      type: DataTypes.STRING
    },
    budFav: {
      field: 'bud_fav',
      type: DataTypes.STRING
    },
    budPrice: {
      field: 'bud_price',
      type: DataTypes.INTEGER
    },
    lastLogin: {
      field: 'last_login',
      type: DataTypes.DATE
    }
  })

  User.associate = (models) => {
    models.User.hasMany(models.Bud, {
      as: 'buds',
      foreignKey: {
        name: 'userId',
        field: 'user_id'
      }
    })

    models.User.belongsToMany(models.User, {
      through: models.Friends,
      as: 'buddies',
      foreignKey: {
        name: 'userId',
        field: 'user_id'
      }
    })
  }

  return User
}
