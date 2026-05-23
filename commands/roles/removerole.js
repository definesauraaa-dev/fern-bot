const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('removerole')
    .setDescription('Remove a role from a member')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('The user to remove the role from')
        .setRequired(true)
    )
    .addRoleOption(option =>
      option.setName('role')
        .setDescription('The role to remove')
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),

  async execute(interaction) {
    const user = interaction.options.getUser('user');
    const role = interaction.options.getRole('role');
    const member = await interaction.guild.members.fetch(user.id).catch(() => null);

    if (!member) {
      return interaction.reply({ content: '❌ User not found!', ephemeral: true });
    }

    if (!member.roles.cache.has(role.id)) {
      return interaction.reply({ content: '❌ User does not have this role!', ephemeral: true });
    }

    try {
      await member.roles.remove(role);
      await interaction.reply({
        content: `✅ Removed **${role.name}** from **${user.tag}**!`,
        ephemeral: false,
      });
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: '❌ Failed to remove role!', ephemeral: true });
    }
  },
};
