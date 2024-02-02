const { SlashCommandBuilder } = require('discord.js');
const user = require('./user');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gif')
		.setDescription('Pas de gif pour toi garçon'),
	async execute(interaction) {
		var role = interaction.member.guild.roles.cache.find(role => role.name === "Nouveau mec");
		if(!role) return;
		await interaction.member.roles.add(role).catch(console.error);
		await interaction.reply('<@&1201920635421601844>');
	},
};