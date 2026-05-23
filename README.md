# Fern Bot 🌿

A premium multipurpose Discord bot with moderation, utility, and role management features inspired by bleed.bot.

## Features

### 🛡️ Moderation
- **Ban** - Ban members with reasons
- **Kick** - Kick members from the server
- **Mute** - Timeout members for a specified duration
- **Warn** - Warn members with logging
- Anti-raid & Anti-nuke protections (coming soon)

### 👥 Role Management
- **Add Role** - Add roles to members
- **Remove Role** - Remove roles from members
- Reaction roles (coming soon)
- Auto-assign roles on join (coming soon)

### 🔧 Utility
- **Ping** - Check bot latency
- **Server Info** - Get server statistics
- **User Info** - Get user information
- Leveling system (coming soon)
- Giveaways (coming soon)

### 🎵 Coming Soon
- Last.fm integration
- Twitter feed streaming
- Reddit integration
- Music commands
- Custom welcome/goodbye messages

## Setup

### Prerequisites
- Node.js v16.9.0 or higher
- A Discord bot token
- MongoDB (optional, for advanced features)

### Installation

1. Clone the repository
```bash
git clone https://github.com/definesauraaa-dev/fern-bot.git
cd fern-bot
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file
```bash
cp .env.example .env
```

4. Add your bot token to `.env`
```
DISCORD_TOKEN=your_token_here
CLIENT_ID=your_client_id_here
```

5. Start the bot
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## Configuration

Edit `.env` file with your settings:
- `DISCORD_TOKEN` - Your Discord bot token
- `CLIENT_ID` - Your bot's client ID
- `MONGODB_URI` - MongoDB connection string (optional)
- `PREFIX` - Command prefix (optional)

## Deployment

### Hosting Options
- **Replit** - Free, easy setup
- **DigitalOcean** - Reliable, affordable VPS
- **AWS/Azure** - Enterprise solutions
- **Your own server** - Full control

## Commands

### Moderation
- `/ban @user [reason]` - Ban a member
- `/kick @user [reason]` - Kick a member
- `/mute @user <duration> [reason]` - Mute a member
- `/warn @user <reason>` - Warn a member

### Utility
- `/ping` - Check bot latency
- `/serverinfo` - Get server information
- `/userinfo [@user]` - Get user information

### Roles
- `/addrole @user @role` - Add a role to a user
- `/removerole @user @role` - Remove a role from a user

## Support

For issues or feature requests, please open an issue on GitHub.

## License

MIT License - see LICENSE file for details
