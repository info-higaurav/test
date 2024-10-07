FROM node:20.12.0-alpine3.19 AS builder
WORKDIR /app
COPY package*.json .
COPY tsconfig.json .
COPY src ./src

RUN npm install
RUN npm run build


FROM node:20.12.0-alpine3.19 
WORKDIR /server
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json .
RUN npm install --only=production

CMD [ "node","dist/src/index.js" ]

