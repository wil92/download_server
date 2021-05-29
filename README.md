# Download server

## Description

Minimalistic server for share files from a specific directory.

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
