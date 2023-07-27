FROM node:18.16-slim AS base

# FROM --platform=amd64 node:18.16 AS base

WORKDIR /app

COPY . /app

RUN npm ci && npm run build

CMD ["npm", "run", "start"]
