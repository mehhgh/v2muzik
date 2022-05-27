module.exports = {
name:"sil",
code:`
\`$message\` Kadar Mesaj Sildim!
$deletecommand
$deleteIn[5s]
$clear[$message[1]]
$suppressErrors[Hata !]
$onlyIf[$hasPerms[$authorID;managemessages]!=false;Üzgünüm Bu Komut İçin \`\`Mesajları Yönet\`\` Yetkin Bulunmalıdır]
$onlyIf[$message!=;Mesaj Miktarı Girermisin !]
$onlyIf[$isNumber[$message[1]]!=false;Girdiğin Miktar Rakam Değil !]
$onlyIf[$message[1]>0;Girdiğin Rakam 1'in Altında Olamaz !]
$onlyIf[$message[1]<101;Girdiğin Rakam 100'ün Üstünde Olamaz !]  

`

}