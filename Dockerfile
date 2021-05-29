FROM node:14.16-alpine3.11

WORKDIR /app

RUN mkdir /resources
ENV RESOURCES="/resources"

COPY package*.json ./
RUN npm install

COPY public ./public
COPY views ./views
COPY main.ts ./main.ts
COPY tsconfig.json ./tsconfig.json
COPY webpack.config.js ./webpack.config.js
RUN npm run build

RUN mv ./dist/main.js /main.js
RUN rm -rf /app/*

CMD ["node", "/main.js"]
