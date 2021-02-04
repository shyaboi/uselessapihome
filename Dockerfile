FROM node:12-alpine
FROM nginx:latest
WORKDIR /usr/src/app
COPY . .
RUN npm install --production
CMD ["node", "./index.js"]
EXPOSE 3000