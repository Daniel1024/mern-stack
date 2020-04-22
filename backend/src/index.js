require('dotenv').config();
const app = require('./app');
require('./database');

async function main() {
    const port = app.get('port');
    await app.listen(port);
    console.log(`Server on port ${port}`)
}

main();
