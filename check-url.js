const https = require('https');
https.get('https://maps.app.goo.gl/1mDtzgUFx5WT2NDX7?g_st=ic', (res) => {
    console.log(res.headers.location);
});
