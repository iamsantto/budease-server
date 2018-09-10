export default (sequelize, DataTypes) => {
  const Bud = sequelize.define('bud', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    budName: {
      field: 'bud_name',
      type: DataTypes.STRING
    },
    budPrice: {
      field: 'bud_price',
      type: DataTypes.INTEGER
    },
    smokedAt: {
      field: 'smoked_at',
      type: DataTypes.DATE
    }
  })

  return Bud
}
