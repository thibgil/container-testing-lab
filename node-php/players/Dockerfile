FROM node

WORKDIR /app

EXPOSE 80

RUN npm install -g nodemon

COPY package.json package.json

RUN npm install

RUN mv /app/node_modules /node_modules

COPY ./app/server.js ./server.js

CMD ["node", "server.js"]