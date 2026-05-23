const mongoose = require('mongoose');

const guildSchema = new mongoose.Schema({
  guildId: { type: String, required: true, unique: true },
  prefix: { type: String, default: '!' },
  welcomeChannel: { type: String },
  welcomeMessage: { type: String, default: 'Welcome {user}!' },
  goodbyeChannel: { type: String },
  goodbyeMessage: { type: String, default: '{user} has left the server.' },
  antiRaidEnabled: { type: Boolean, default: true },
  antiRaidThreshold: { type: Number, default: 5 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Guild', guildSchema);
