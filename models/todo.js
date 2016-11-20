module.exports = function (sequelize, DataTypes) {

 return	sequelize.define('todo', {
			description: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
							len: [1, 250] // Only valid if 1 - 250 characters
					}
			},
			completed: {
					type: DataTypes.BOOLEAN,
					allowNull: false,
					defaultValue: false
			}
	});


}
