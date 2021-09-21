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
