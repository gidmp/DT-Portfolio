module.exports = function(sequelize, DataTypes) {
    const Contact = sequelize.define("Contact", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      comment: {
        type: DataTypes.STRING,
      }
    });
  
    return Contact;
  };
  