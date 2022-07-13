FROM node:15
WORKDIR /node_app
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["node", "app.js"]