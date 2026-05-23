const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('warn')
    .setDescription('Warn a member')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('The user to warn')
        .setRequired(true)
    )
    .addStringOption(option =>
      option.setName('reason')
        .setDescription('Reason for warning')
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),

  async execute(interaction) {
    const user = interaction.options.getUser('user');
    const reason = interaction.options.getString('reason');

    const embed = new EmbedBuilder()
      .setColor('#FFA500')
      .setTitle('⚠️ User Warned')
      .setDescription(`${user} has been warned!`)
      .addFields(
        { name: 'Reason', value: reason, inline: false },
        { name: 'Warned by', value: interaction.user.tag, inline: true },
        { name: 'Time', value: new Date().toLocaleString(), inline: true }
      )
      .setThumbnail(user.displayAvatarURL());

    await interaction.reply({ embeds: [embed], ephemeral: false });

    try {
      await user.send({ embeds: [embed] });
    } catch (error) {
      console.log(`Could not send DM to ${user.tag}`);
    }
  },
};
