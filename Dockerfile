FROM node:alpine as prod
ENV NODE_ENV=production
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
USER node
COPY package.json ./
COPY node_modules ./node_modules
COPY server ./server
EXPOSE 4000
CMD ["node", "server/dist/server"]