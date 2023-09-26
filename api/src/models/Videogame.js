const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey : true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //fecha de lanzamiento
    released: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    rating: {
      
      type: DataTypes.FLOAT,
    },
    img: {
      type: DataTypes.STRING,  
      allowNull: true,    
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
      
  },{
    timestamps: false
  });
};

