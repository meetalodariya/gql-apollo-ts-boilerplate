FROM node:16-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .
ENV NODE_ENV=production

RUN npm run build

# to reduce the image size
RUN rm -rf ./src

CMD ["npm", "start"]
