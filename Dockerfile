FROM node:22.8.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000