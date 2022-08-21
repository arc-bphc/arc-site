FROM node:alpine

WORKDIR /usr/src/app/

COPY ./ ./

RUN npm install

EXPOSE 3000:3000

CMD ["yarn", "dev"]