import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.TESTING);


import { App } from './app';

async function main() {
    const app = new App(3300);
    await app.listen();
}

main();