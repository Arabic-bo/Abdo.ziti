let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('تم حظرك من استعمال البوت يا عزيزي لانك تخالف سياسة استعماله ♥ يمكنك معرفة سياسة استخدام البوت لدى صاحبه امين \ninstagram.com/amin1_tech1igsh=YzljYTk1ODg3Zg==‎‏ 😄!')
    // } else m.reply('Ada nomor host disini...')
}
handler.help = ['ban,حظر']
handler.tags = ['owner']
handler.command = /^ban,حظر$/i

handler.owner = true

export default handler
