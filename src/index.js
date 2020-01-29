const app = require('./app');

async function main() {
    await app.listen(4000);
    console.log('Conectado na porta 4000 => OK OK OK');
}

main();