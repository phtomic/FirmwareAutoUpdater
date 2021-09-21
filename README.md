# FirmwareAutoUpdaterApi

> Esta Api funciona como um mediador de atualizações automáticas de Firmwares de roteadores. Um roteador com sistema linux capaz de fazer download de arquivos e armazenar conteúdo temporário em memória pode ser utilizado.

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:
- [X] Autenticação com JWT 

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Você instalou a versão mais recente de `node js`

## 🚀 Instalando <FirmwareAutoUpdaterApi>

Para instalar o <FirmwareAutoUpdaterApi>, siga estas etapas:

```
npm init -y
tsc
```

## ☕ Usando <FirmwareAutoUpdaterApi>

Para usar <FirmwareAutoUpdaterApi>, siga estas etapas:
Configure os arquivos
```
src\macList.ts
src\firmwareList.ts
```
No seguinte formato para cada nova entrada:
```
src\macList.ts

...
{     Mac    :    <mac-ou-serial>    },
...


```
```
src\firmwareList.ts

...
{Path:<Nome do arquivo>,name:<Nome_de_exibição>}
...

```
O diretório onde ficam localizados os arquivos do firmwareList.ts, pode ser editado no arquivo de configuração 'src/config.ts'
```
let config={
    firmware:{
            firmwareVersion:"{FIRMWARE NAME}",
            uploadPath:"/firmwares/",     <----------------- Pode ser alterado aqui
            FirmwareVersionList:fwLST
    },
```
Após a configuração é so rodar
```
node dist/index.js
```

## Acessos
  
  GET 1-{domain:port}/getToken/<mac><br>
  Retorna JSON no formato: 
```
 {   sessionToken   :   <authToken>    }
  ```
  
  GET 2-{domain:port}/getVersion/<token>/<mac><br>
  Retorna JSON no formato: 
```
  {   latestFirmwareVersion   :   <Firmware_name>   }
  ```
  GET 3-{domain:port}/getUpdate/<token/<mac>/<firmwareVersion><br>
  ```
 Retorna arquivo para download
  ```
  
  
[⬆ Voltar ao topo](#FirmwareAutoUpdaterApi)<br>
