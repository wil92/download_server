![build](https://github.com/wil92/download_server/actions/workflows/node.js.yml/badge.svg?branch=master)
![guille twitter](https://img.shields.io/twitter/url?label=ggjnez92&logo=twitter&url=https%3A%2F%2Ftwitter.com%2Fggjnez92)

# Simple Download Server

## Description

Minimalistic server for sharing files from a specific directory.

**Demo:**

![](https://github.com/wil92/download_server/blob/master/extra/download-presentation.GIF?raw=true)

**Why should I use this application?**

- After compiled the total size of the script is only **0.59MB**
- TypeScript is used to develop the application (Object-Oriented)
- The setup with docker is already done (half of the work is done for deployment)
- Change/Modify styles is as simple as modifying the views

## Using docker

```shell
docker run -d -p 3000:3000 -v ./resources:/resources ggjnez92/simple-download-server:latest
```

## Use with docker-compose

**docker-compose.yml**

```yaml
version: "3.3"

services:
  server:
    image: ggjnez92/simple-download-server:latest
    restart: always
    volumes:
      - ./resources:/resources
    ports:
      - "3000:3000"
    environment:
      - D_USERNAME=admin
      - D_PASSWORD=admin
```

## Parameters

| Parameter       | Description                           | Default |
|-----------------|---------------------------------------|---------|
| D_USERNAME      | Username for the basic authentication | ''      |
| D_PASSWORD      | Password for the basic authentication | ''      |
| D_ALLOW_REMOVE  | Allow remove files                    | false   |

> Note: Empty values for `D_USERNAME` and `D_PASSWORD` will disable the basic authentication.
