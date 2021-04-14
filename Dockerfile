FROM node:14
WORKDIR /usr/share/app
COPY ./compare ./compare
COPY ./index.js .

CMD ["node", "index.js"]
