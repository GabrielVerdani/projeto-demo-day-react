const { Model, DataTypes } = require("sequelize");

class Produto extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      imagem: DataTypes.STRING,
      preco: DataTypes.DOUBLE,
      descricao: DataTypes.STRING,
      caracteristicas: DataTypes.STRING,
      vezes_visitado: DataTypes.INTEGER,
      vezes_favoritado: DataTypes.INTEGER
    }, {
      sequelize
    })
  }
  static associate(models) {
    this.belongsTo(models.Categoria, { foreignKey: "id_categoria", as: "produto" })
  }
}

module.exports = Produto