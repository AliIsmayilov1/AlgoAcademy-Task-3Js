let zaman = +prompt("Vaxt daxil edin:")
let sn = zaman % 60
let dq = 0
let st = 0
let gn = 0
gn = Math.floor(zaman / 86400)

st = Math.floor((zaman - gn * 86400) / 3600)

dq = Math.floor((zaman - gn * 86400 - st * 3600) / 60)

alert(`${gn} gun,${st} saat,${dq}deqiqe,${sn}saniye`)