export default (sequelize, DataTypes) => {
  const Friends = sequelize.define('friends', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    friendType: {
      field: 'friend_type',
      type: DataTypes.STRING
    }
  })

  return Friends
}
