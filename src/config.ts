const fwLST=require("./firmwareList")
const macLST=require("./macList")
let config={
    firmware:{
            firmwareVersion:"{FIRMWARE NAME}",
            uploadPath:"/firmwares/",
            FirmwareVersionList:fwLST
    },
    auth:{
        tokenBitSize:512,
        timeout:100,//Em segundos
        MacList:macLST
    },
    server:{
        port:8000
    },
    error:{
        UnableToGetVersion:418,
        UnableToGetToken:401,
        UnableToGetFirmware:412
    }
}
export const Config=config