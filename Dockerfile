FROM node:14.16-alpine3.11

WORKDIR /app

RUN mkdir /resources
ENV RESOURCES="/resources"

COPY src ./src
COPY tsconfig.json webpack.config.js package*.json ./

RUN npm install && npm run build

RUN mv ./dist/main.js /main.js
RUN rm -rf /app/*

CMD ["node", "/main.js"]
