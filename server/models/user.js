module.exports = function(sequelize, Datatypes) { 
  var User = sequelize.define('User', {
    email:  { 
      type: Datatypes.STRING
    },
    password: {
      type: Datatypes.STRING,
      allowNull: false
    },
    token: Datatypes.STRING,
    registrationId: Datatypes.STRING
  });

  return User;
}