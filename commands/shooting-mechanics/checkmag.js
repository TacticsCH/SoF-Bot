const { RichEmbed } = require("discord.js");
const utils = require('../../utils.js')

module.exports = {
  name: "checkmag",
  aliases: ["ch"],
  category: "shooting-mechanics",
  description: "Check your mag",
  usage: "~checkmag",
  run: async (bot,message,args) => {
    d = await utils.readData()
    e = await utils.readWeap()
    var uid = "a" + message.author.id
    console.log(utils.readData())
    console.log(utils.readWeap())

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Shows info from d.Mag
    if (!args[0] && d[uid].Weapon != 0 && d[uid].ACD == false) {

        d[uid].ACD = true
        await utils.putData(d)

        const msg1 = new RichEmbed()
        .setTitle("Vous enlevez le magasin de votre arme et l'inspectez...")
        .setImage("")

        const msg = await message.channel.send(msg1)

        await sleep(3000)

        const msg2 = new RichEmbed()
        .setTitle(`Vous remettez le chargeur dans l'arme`)
        .setImage("")

        msg.edit(msg2)

        await sleep(3000)

        const msg3 = new RichEmbed()
        .setTitle(`Le chargeur est ${d[uid].MagState}`)

        d[uid].ACD = false
        await utils.putData(d)

        msg.edit(msg3)
    } else if (d[uid].Weapon == 0) {
      // Rejects if unarmed
      const msg1 = new RichEmbed()
      .setTitle("Vous n'avez pas d'arme...")
      message.channel.send(msg1)
    } else if (d[uid].ACD == true) {

    }
  }
}
