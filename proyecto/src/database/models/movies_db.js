module.exports = (sequelize, dataTypes) => {
    const alias = 'Peliculas';
    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          title: {
            type: dataTypes.STRING(60),
            allowNull: false
          },
          genre: {
            type: dataTypes.STRING(100).UNSIGNED,
            foreignKey: true,
            allowNull: false
          },
          rating: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            foreignKey: true,
            allowNull: false
          },
          awards: {
            type: dataTypes.INTEGER(3).UNSIGNED,
            allowNull: false
          },
         
        };
        let config = {
          tableName: 'products',
          timestamps: true,
          createdAt: 'created_at',
          updatedAt: 'updated_at',
          underscored: false
        };
    const Peliculas = sequelize.define(alias, cols, config);  
    
    return Peliculas;
  }