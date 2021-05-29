![build](https://github.com/wil92/download_server/actions/workflows/node.js.yml/badge.svg?branch=master)

# Download server

## Description

Minimalistic server for share files from a specific directory.

Application example:
![](./extra/download-presentation.GIF)

**Why should I use this application?**

- After compiled the total size of the script is only **0.59MB**
- TypeScript is used to develop the application (Object oriented)
- The setup with docker is already done (half of the work is done for deployment)
- Change/Modify style is as simple as modify the views

## Use locally

```shell
npm install
npm start
```

## Build

```shell
npm run build

# start builder project
node ./dist/main.js
```

## Use with docker-compose

### Define environment variables

Before start docker the following env variables are needed:

- `SERVER_PORT`: basically the port from where the server will be available.
    - exam: `SERVER_PORT=7852`
- `DIRECTORY_TO_SHARE`: the complete path to the directory to be share.
    - exam: `DIRECTORY_TO_SHARE=/home/app/folder/` 

> NOTE: The easy way to setup the environment variables is to create the .env file

### start docker container
```shell
docker-compose up -d --build
```
