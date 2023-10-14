FROM node:18.18.1-alpine3.18
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "node", "app.js" ]
