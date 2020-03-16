const axios = require('axios');

const myArgs = process.argv.slice(2);
const botToken = myArgs[0];

console.log(`https://api.telegram.org/bot${botToken}/getUpdates`);

let offset = 0;

const fetch = async () => {
    axios.get(`https://api.telegram.org/bot${botToken}/getUpdates?timeout=3&offset=${offset}`).then(updates => {
        const tgUpdates = updates.data.result;

        tgUpdates.forEach(tgUpdate  => {
            offset = tgUpdate.update_id + 1;
            axios.post(myArgs[1], tgUpdate).catch(result => console.log(result.response.status, result.response.data));
            console.log(tgUpdate);
        });
        fetch();
    });
};
fetch();
