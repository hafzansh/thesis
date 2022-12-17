FROM node:19

WORKDIR /node

COPY package.json .

RUN npm install

COPY . .

CMD ["npm","run","dev"]