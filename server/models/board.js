module.exports = function(sequelize, Datatypes) {
  var Board = sequelize.define('Board', {
    title: {
      type: Datatypes.STRING,
      allowNull: false 
    },
    deleted: {
      type: Datatypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    defaultScope: {
      where: {
        deleted: false
      }
    },
    classMethods: {
      associate: function(models) {
        Board.belongsTo(models.User, { foreignKey: 'parent_id' });
      }
    }
  });
  
  return Board;
}