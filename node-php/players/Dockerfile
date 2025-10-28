FROM node

WORKDIR /app

EXPOSE 80

COPY package.json package.json

RUN npm install

COPY ./app/server.js ./server.js

CMD ["node", "server.js"]
