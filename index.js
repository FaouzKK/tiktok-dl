const { tiktokdl } = require('./lib/tiktok-dl');

(async () => {
    const tiktok = await tiktokdl('https://www.tiktok.com/@.tobi.uchiha_/video/7317012349897002245?is_from_webapp=1&sender_device=pc&web_id=7408654694422414854');
    console.log(tiktok);
})();