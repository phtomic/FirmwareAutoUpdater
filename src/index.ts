import * as express from 'express';
import * as bodyParser from "body-parser";
import MainRouter = require('./routers/main.router');
import * as TokenGenerator from 'uuid-token-generator'
import * as path from 'path'
import {Config} from './config'
const dirPath = path.join(__dirname, Config.firmware.uploadPath);

const app: express.Application = express();
let tokens=[]
let {MacList}=Config.auth
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const mainRouter=new MainRouter(tokens,Config,dirPath,MacList)
app.use('/', mainRouter.getRouter());


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});