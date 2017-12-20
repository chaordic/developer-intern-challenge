module.exports = function(sequelize, DataTypes) {
  var url = sequelize.define("url", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
    },
    hits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      default: 0
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    short_url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    schema:"public",
    tableName:"url"
  });

  return url;
};
//revisar tipos e allowNull