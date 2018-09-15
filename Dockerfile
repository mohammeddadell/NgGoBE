FROM node:boron

WORKDIR /home/app

COPY package*.json ./

RUN npm install --quiet
RUN npm install -g nodemon

COPY . .

CMD [ "npm", "run", "dev" ]

EXPOSE 9000
