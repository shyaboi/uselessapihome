FROM node:12-alpine
FROM nginx:latest
WORKDIR /usr/src/app
COPY . .
RUN npm install --production
CMD ["npm run start"]
EXPOSE 3000