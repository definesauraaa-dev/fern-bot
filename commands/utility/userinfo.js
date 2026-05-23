const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription('Get information about a user')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('The user to get info about')
        .setRequired(false)
    ),

  async execute(interaction) {
    const user = interaction.options.getUser('user') || interaction.user;
    const member = await interaction.guild.members.fetch(user.id).catch(() => null);

    const embed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle(`${user.tag} User Info`)
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .addFields(
        { name: 'User ID', value: user.id, inline: true },
        { name: 'Account Created', value: user.createdAt.toDateString(), inline: true },
        { name: 'Joined Server', value: member ? member.joinedAt.toDateString() : 'N/A', inline: true },
        { name: 'Bot', value: user.bot ? 'Yes' : 'No', inline: true }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
