const { DataTypes } = require('sequelize');

const NoteModel = (sequelize) => sequelize.define('Note', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  heading: DataTypes.STRING,
  content: DataTypes.TEXT
});

module.exports = NoteModel;