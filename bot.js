const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`speacial bot`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.login(process.env.BOT_TOKEN);
```
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-admin") {
         if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply(`
         
         **لست من المشرفين لن يتم ارسال الرسالة إليك**
         
         
         `);
         message.channel.send('**لقد تم ارسال رسالة المساعدة في الرسائل الخاصة**');
            
    
         


 message.author.sendMessage(`
 **

╔[❖══════════════════════❖]╗
       اوامر المشرفين
╚[❖══════════════════════❖]╝

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ $kick <mention > ➾ لطرد الأعضاء
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ $clear ➾ لمسح الشات
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
 ❖ $mute < mention > ➾ لإعطاء ميوت للإعضاء
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ $unmute <mention> ➾ لفك الميوت عن الأعضاء
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
 ❖ $bc <message> ➾ لإرسال رسالة جماعية
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ $closeroms <message> ➾ لإغلاق الشات
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
 ❖ $openroms <message> ➾ لفتح الشات
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ $server <message> ➾ لمعرفة نبذه عن السيرفر
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ $warn <message> ➾ لإعطاء انذار لأحد الأعضاء
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ $clear <message> ➾ لمسح الشات
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

By abokhalil
`);

    }
});
