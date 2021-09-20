import { Router, Request, Response } from 'express';
import MainController = require('../controllers/main.controller');
class MainRouter{
    router: Router;
    config: any;
    dirPath: any;
    Controller:MainController;
    constructor(tokens,config,dirPath,MacList){
        this.config=config
        this.dirPath=dirPath
        this.router=Router();
        this.Controller=new MainController(tokens,config,dirPath,MacList);
        this.initRoutes();
    }
    private initRoutes(){
        const C:MainController=this.Controller
        const router:Router=this.router
        router.get('/getUpdate/:authToken/:mac/:version', (req, res) => {
            let {authToken}=req.params
            let {mac}=req.params
            let {version}=req.params
            if(C.auth(authToken,mac)){
                let fw=this.config.firmware.FirmwareVersionList.find( firmware => firmware.name === version);
                res.status(200).sendFile(this.dirPath+fw.Path)
            }else{
                res.sendStatus(this.config.error.UnableToGetFirmware)
            }
        });
        
        router.get('/getVersion/:authToken/:mac', (req: Request, res:Response) => {
            let {authToken}=req.params
            let {mac}=req.params
            if(C.auth(authToken,mac)){
                res.json({
                    latestFirmwareVersion:this.config.firmware.firmwareVersion
                })
            }else{
                res.sendStatus(this.config.error.UnableToGetVersion)
            }
        });
        
        router.get('/getToken/:mac', (req: Request, res: Response) => {
            let {mac}=req.params
            let tk=C.getToken(mac)
            if(tk!=false){
                res.json({
                        sessionToken:tk.authToken
                })
            }else{
                res.sendStatus(this.config.error.UnableToGetToken)
            }
        });       
    }
    getRouter(){
        return this.router
    }
}
export= MainRouter;