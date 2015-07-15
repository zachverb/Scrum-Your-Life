module.exports = function(sequelize, Datatypes) {
  var Task = sequelize.define('Task', {
    title: {
      type: Datatypes.STRING,
      allowNull: false 
    },
    estimate: Datatypes.INTEGER,
    description: {
      type: Datatypes.TEXT
    },
    state: {
      type: Datatypes.STRING,
      defaultValue: "To-Do"
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
        Task.belongsTo(models.Task, { foreignKey: 'parent_id' });
        Task.belongsTo(models.User, { foreignKey: 'owner_id' });
        Task.belongsTo(models.Board, { foreignKey: 'board_id' });
      }
    }
  });
  
  return Task;
}