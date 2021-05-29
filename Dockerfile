FROM node:14.16-alpine3.11

WORKDIR /app

RUN mkdir /resources
ENV RESOURCES="/resources"

COPY public ./public
COPY src ./src
COPY tsconfig.json ./tsconfig.json
COPY webpack.config.js ./webpack.config.js
COPY package*.json ./

RUN npm install
RUN npm run build

RUN mv ./dist/main.js /main.js
RUN rm -rf /app/*

CMD ["node", "/main.js"]
