const { Model, DataTypes } = require("sequelize");

class Categoria extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
    }, {
      sequelize,
      tableName: "categorias"
    })
  }

  static associate(models) {
    this.hasMany(models.Produto, { foreignKey: "id_categoria", as: "categoria" })
  }
}

module.exports = Categoria