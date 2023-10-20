FROM node:18-alpine as build
WORKDIR /app

COPY package-lock.json package*.json ./
RUN npm install --force

COPY . .

ENV APP_ENV=prod

# RUN npm run build
RUN npm install

# RUN yarn cache clean
# EXPOSE 8001

CMD [ "npm", "start" ]
