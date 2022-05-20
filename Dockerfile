FROM node:18
RUN mkdir /app && chown node:node /app
USER node

WORKDIR /app

EXPOSE 7005
CMD ["yarn", "dev:full"]
