const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('addrole')
    .setDescription('Add a role to a member')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('The user to add the role to')
        .setRequired(true)
    )
    .addRoleOption(option =>
      option.setName('role')
        .setDescription('The role to add')
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

    if (member.roles.cache.has(role.id)) {
      return interaction.reply({ content: '❌ User already has this role!', ephemeral: true });
    }

    try {
      await member.roles.add(role);
      await interaction.reply({
        content: `✅ Added **${role.name}** to **${user.tag}**!`,
        ephemeral: false,
      });
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: '❌ Failed to add role!', ephemeral: true });
    }
  },
};
