let handler = async (m, { conn }) => {

m.reply(`*مجموعتي على الواتساب:*\n
*https://chat.whatsapp.com/Fk1mt0Ui4AV0KEA8Dt49Xz*
*تابعني هناك♥*`)
}
handler.help = ['channel']
handler.tags = ['infobot']
handler.command = /^(channel)$/i

export default handler;
