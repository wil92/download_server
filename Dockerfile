FROM node:20-alpine3.19

WORKDIR /app

RUN mkdir /resources
ENV RESOURCES="/resources"

COPY dist/main.js ./

CMD ["node", "/app/main.js"]
