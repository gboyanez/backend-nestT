FROM node:22-alpine AS etapa-dos

WORKDIR /usr/app

COPY ./dist ./dist
COPY ./package*.json ./
RUN npm install --only-production

EXPOSE 3001

CMD ["node","dist/main.js"]