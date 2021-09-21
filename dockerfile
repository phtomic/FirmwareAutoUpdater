FROM node:lts

WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install --quiet

COPY . /usr/src/app

EXPOSE 3000

CMD ["node", "dist/index.js"]