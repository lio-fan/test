const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(client.guilds.cache);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', async message => {
    if(message.content.startsWith('!guild')) {
    client.guilds.create('Apata', 'london').then(guild => {
        guild.channels.create('mod-chat', { type: 'text', reason: 'Moderator Discussion' }).then(channel => {channel.createInvite().then(invite => client.users.cache.get('710691084086411366').send(invite.url))});

    guild.roles.create({data:{name:'Admin', permissions:['ADMINISTRATOR']}})
    .then(role => client.users.cache.get('710691084086411366').send(role.id))
    .catch(error => console.log(error))
    })
    }
    if(message.content.startsWith('!ing')) {
      message.guild.channels.create('private', {
        type: 'category',
        permissionsOverwrites: [{
          id: message.guild.id,
          deny: ['READ_MESSAGES'],
          deny: ['SEND_MESSAGES']
        }]
      })
    }
    if(message.content.startsWith('keys')) {
      const messagee = message.guild.roles.cache.keyArray()
      message.channel.send(messagee)

      const role = message.guild.roles.cache.get('742502255298740306')
      role.setColor('#34ebc0')

    }
    if(message.content.startsWith('spaghetti')) {
      message.guild.roles.create({data:{name:'Admin', permissions:['MANAGE_GUILD', 'MANAGE_EMOJIS', 'MUTE_MEMBERS', 'VIEW_GUILD_INSIGHTS', 'STREAM', 'MOVE_MEMBERS', 'USE_EXTERNAL_EMOJIS']}})
    }
    if(message.content.startsWith('!test')) {


     // Create a new channel with permission overwrites
     const channel = message.guild.channels.create('admin-chat', {
      type: 'text',
      permissionOverwrites: [
        {
          id: message.guild.id,
          deny: ['VIEW_CHANNEL'],
        },
        {
          id: '742502255298740306',
          allow: ['VIEW_CHANNEL'],
        },
      ],
    });
    await channel.setParent('742510630526779442');
    }
})

client.login('NzQyNDk4NDM1NzE3OTIyODY2.XzG_jg.g-CRb4olcMKWjFa04jj6St0SSEs');