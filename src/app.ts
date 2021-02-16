import express, { Application } from 'express';
import morgan from 'morgan';



export class App {

    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
    }

    middlewares() {
        this.app.use(morgan('dev'));
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }
    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
}