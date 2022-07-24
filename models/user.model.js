
const seq = (sequelize, Sequelize) => {
  return sequelize.define('user', {
      firstname: {
          type: Sequelize.STRING,
          allowNull: false
      },
      lastname: {
          type: Sequelize.STRING,
          allowNull: false
      },
      email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
      },
      password: {
          type: Sequelize.STRING,
          allowNull: false
      },
      birthdate: {
          type: Sequelize.DATE,
          allowNull: false
      },
      username: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
      }
  });
}

export default seq;