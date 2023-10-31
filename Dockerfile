FROM node:14.17.6
WORKDIR /app
COPY . .
RUN cd /app
RUN npm install
RUN npm install -g typescript
RUN npm install -g ts-node
RUN npm install @types/express
RUN npm install express

# RUN npm list
EXPOSE 9000
CMD pwd && ls && ts-node --esm app.ts
