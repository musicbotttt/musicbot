const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `uptime`,
  description: "\`(ue)Gives you the uptime of the Bot\`",
  aliases: ["ue"],
  cooldown: 5,
  edesc: "With that you can see how long the Bot has been running nonstop",
  execute(message, args, client) {
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    //react with approve emoji
    message.react("<a:time:813403485902864435>");
    return message.channel.send(new MessageEmbed().setColor("#FC00FF")
        .setTitle(`<a:time:813403485902864435> Uptime Remix Bot\n\n\`${days}d\` \`${hours}h\` \`${minutes}m\` \`${seconds}s\n\``));

  }
}
