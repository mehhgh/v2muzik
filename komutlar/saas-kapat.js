module.exports = {

  name: "sa",

  code:`

$reply[$messageID;Aleyküm selam hoşgeldin,<@$authorID>;yes]

$onlyIf[$getServerVar[saas]!=kapalı;]

$onlyIf[$message==;]

`,

  nonPrefixed: true

}

