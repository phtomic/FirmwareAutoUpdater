import * as moment from 'moment'
import * as TokenGenerator from 'uuid-token-generator';
class MainController{
    tokens: any;
    moment: any;
    tokgen2: any;
    config: any;
    dirPath: any;
    MacList: any;
    constructor(tokens,config,dirPath,MacList){
        this.tokens=tokens
        this.moment=moment
        this.tokgen2= new TokenGenerator(config.auth.tokenBitSize, TokenGenerator.BASE62);
        this.config=config
        this.dirPath=dirPath
        this.MacList=MacList
    }
    private tokenCheck(token,mac){
        let i=this.tokens.findIndex( auth => auth.authToken === token);
        if(i!=-1){
            if(this.tokens[i].mac!=mac){
                return false;
            }else{
                return this.tokens[i];
            }
        }else{
            return false;
        }
    }
    getToken(mac){
        let inx = this.tokens.findIndex( auth => auth.mac === mac);
        if(inx==-1){
            let ind=this.MacList.findIndex( auth => auth.Mac === mac);
            if(ind!=-1){
                let now=this.moment()
                now.add(this.config.auth.timeout,'seconds')
                let tok={
                    authToken:this.tokgen2.generate(),
                    mac:mac,
                    timeout:now.unix()
                }
                this.tokens.push(tok)
                return tok;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
    private checkExpired(obj){
        let mmt=this.moment().unix();
        if(obj.timeout<mmt){
            let i=this.tokens.findIndex( auth => auth.authToken === obj.authToken);
            this.tokens.splice(i,1)
            return true;
        }else{
            return false;
        }
    }
    auth(token,mac){
        let checkToken=this.tokenCheck(token,mac)
        if(checkToken!=false){
            if(!this.checkExpired(checkToken)){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
}
export = MainController