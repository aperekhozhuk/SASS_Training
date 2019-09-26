FROM node:latest

COPY . .

RUN npm install -g yarn
RUN yarn install

CMD npm run dev

EXPOSE 8000

