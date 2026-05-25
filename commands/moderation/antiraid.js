const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('antiraid')
    .setDescription('Configure anti-raid protection')
    .addBooleanOption(option =>
      option.setName('enabled')
        .setDescription('Enable or disable anti-raid')
        .setRequired(true)
    )
    .addIntegerOption(option =>
      option.setName('threshold')
        .setDescription('Number of members to join before triggering anti-raid')
        .setRequired(false)
        .setMinValue(1)
        .setMaxValue(50)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction) {
    const enabled = interaction.options.getBoolean('enabled');
    const threshold = interaction.options.getInteger('threshold') || 5;

    const embed = new EmbedBuilder()
      .setColor(enabled ? '#00FF00' : '#FF0000')
      .setTitle('🛡️ Anti-Raid Settings')
      .addFields(
        { name: 'Status', value: enabled ? '✅ Enabled' : '❌ Disabled', inline: true },
        { name: 'Threshold', value: `${threshold} members`, inline: true }
      );

    await interaction.reply({ embeds: [embed] });
  },
};
