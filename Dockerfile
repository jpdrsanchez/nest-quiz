FROM node:18

RUN apt-get update && apt-get install -y openssl

WORKDIR /usr/src/app

ENV NODE_ENV=development

COPY ["package.json", "yarn.lock*", "./"]

RUN yarn

COPY . .
 
RUN yarn prisma:generate

CMD ["sh", "-c", "yarn && npx prisma migrate reset --force && yarn start:dev"]