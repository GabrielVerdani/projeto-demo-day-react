const { Model, DataTypes } = require("sequelize");

class Loja extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      imagem: DataTypes.STRING,
      cnpj: DataTypes.STRING,
      descricao: DataTypes.STRING,
      cep: DataTypes.STRING,
      contato: DataTypes.INTEGER,
      seguidores: DataTypes.INTEGER
    }, {
      sequelize
    })
  }
  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: "id_dono", as: "usuario" });
    this.hasMany(models.Produto, { foreignKey: "id_loja", as: "produtos" });
  }
}

module.exports = Loja