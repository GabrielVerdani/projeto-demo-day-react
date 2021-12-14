const { Model, DataTypes } = require("sequelize");

class Usuario extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      genero: DataTypes.STRING,
      celular: DataTypes.INTEGER,
      cep: DataTypes.STRING,
    }, {
      sequelize
    })
  }
  static associate(models) {
    this.hasOne(models.Loja, { foreignKey: "id_dono", as: "lojas" })
  }
}

module.exports = Usuario