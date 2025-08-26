FROM node:20

WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host=0.0.0.0"]
