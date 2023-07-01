FROM --platform=amd64 node:18.16

WORKDIR /app

COPY . /app

RUN npm ci

RUN npm run build

CMD [ "npm", "run", "start" ]