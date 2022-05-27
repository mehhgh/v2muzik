const hera = require("aoi.js");

const bot = new hera.Bot({
  token: process.env["token"], //Tokeni .env kısmındaki token kısmına yazın
  prefix: "$getServerVar[prefix]", //Variables de olan prefixi değiştirin bunu ellemeyin
  mobile: false,
  fetchInvites: true,
});
bot.onLeave();
bot.onJoined();
bot.onMessage();
bot.loadCommands("./komutlar/");

bot.status({
  text: "z!yardım",
  type: "PLAYING",
  status: "online",
  time: 13,
});

bot.status({
  text: "zeonTR Bot 7/24 Aktif",
  type: "PLAYING",
  status: "online",
  time: 13,
});

bot.status({
  text: "Ben $serverCount- | sunucuda bulunuyorm | $allMembersCount Kişiye Hizmet Veriyorum",
  type: "PLAYING",
  time: 13,
});

bot.command({
  name: "ping",
  code: `işte pingim $pingms

`,
});







bot.command({
  name: "oynat",
  aliases: ["play"],
  channel:"$channelID",
  code: `$suppressErrors[Şarkı çalmazken kullanamazsın]
$author[Müzik çalınmaya başlandı;$authorAvatar]
$thumbnail[$userAvatar[939219101203693598]]
$description[Aranan kelime \`$message\`
Bulunan Şarkı : $get[şarkı]
Şarkı uzunluğu : $replaceText[$replaceText[$songInfo[duration];Seconds;Saniye;-1];Second;Saniye;-1]
Çalan kişi : $userTag[$authorID]]
$color[RANDOM]
$setServerVar[şarkı;$authorID]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$let[şarkı;$playSong[$message;7m;yes;yes;:x: \`$message\` 
$argsCheck[>1;Lütfen bir şarkı adı gir]

$image[https://media.discordapp.net/attachments/942567888185852025/944934769874063400/standard_7.gif]



`,

});
  
  
  
bot.command({
  name: "devam",
  aliases: ["resume"],
  code: `
şarkı devam ediyor
$resumeSong
$onlyIf[$voiceID[$clientID]!=;Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[Şarkı çalmazken kullanamazsın]

`,
});

bot.command({
  name: "durdur",
  aliases: ["stop", "pause"],
  code: `
şarkı durduruldu
$pauseSong
$onlyIf[$voiceID[$clientID]!=;Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[Şarkı çalmazken kullanamazsın]

`,
});

bot.command({
  name: "sıralama",
  aliases: ["queue"],
  code: `$author[Sıradaki Şarkılar]
$description[
$queue[1;10;{number} - {title}]]
$color[303136]
$onlyIf[$voiceID[$clientID]!=;Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$onlyIf[$queue[1;10;{number} - {title}]!=;Sırada bir şarkı bulunmuyor]
$suppressErrors[Şarkı çalmazken kullanamazsın]`,
});

bot.command({
  name: "tekrarla",
  aliases: ["loop"],
  code: `
$let[geç;$skipSong]
$let[şarkı;$playSong[$songInfo[title];...;yes;yes;:x: \`$songInfo[title]\` adında bir müzik bulamadım.]]
$onlyIf[$voiceID[$clientID]!=;Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[Şarkı çalmazken kullanamazsın]

`,
});

bot.command({
  name: "geç",
  aliases: ["skip"],
  code: `
Şarkı geçildi
$let[geç;$skipSong]
$onlyIf[$voiceID[$clientID]!=;Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[Şarkı çalmazken kullanamazsın]

`,
});

bot.command({
  name: "ses",
  aliases: ["sound"],
  code: `
ses ayarlandı
$volume[$message]
$onlyIf[$voiceID[$clientID]!=;Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[Şarkı çalmazken kullanamazsın]
$onlyIf[$message<=100;Maximum 100 olarak ayarlanabilir]
$onlyIf[$isNumber[$message]!=false;Bir sayı girmelisin]
$argsCheck[1;Lütfen bir ses seviyesi gir]

`,
});

bot.command({
  name: "dc",
  aliases: ["leave"],
  code: `
$djsEval[message.member.voice.channel.leave();]
$onlyIf[$voiceID[$clientID]!=;Zaten bir ses kanalında değilim]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
Ses kanalından çıktım

`,
});

bot.musicStartCommand({
  channel: "$channelID",
  code: ``,
});

bot.musicEndCommand({
  channel: "$channelID",
  code: ``,
});

bot.readyCommand({
  channel: "914794304923385897",
  code: `
$author[Yeniden Aktifim;$userAvatar[$clientID]]
$description[
🟢 Tekrardan Aktifim:
🖥 Sunucu Sayım: \`$serverCount\`
✨ Kullanıcı Sayım: \`$allMembersCount\`
🌲 Komut Sayım: \`$commandsCount\`
🏛 Değişken Sayım: \`$variablesCount\` 
👑 Geliştircim: \`$userTag[$botOwnerID]\`
♾ Pingim: \`$ping.ms/$botPing.ms\`]
$footer[Atarina Bot ;$userAvatar[$clientID]]
$thumbnail[$userAvatar[$clientID]]
$color[00F93B]

`,
});

bot.variables({
  prefix: "m!", //İstediğiniz prefixi ! yerine yazın
  saas: "kapalı",
  şarkı: "şarkı",
  hex: "hex",
  
 });
