FROM node:20

# Define diretório de trabalho
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do código
COPY . .

# Expõe porta do Vite
EXPOSE 5173

# Roda servidor de desenvolvimento
CMD ["npm", "run", "dev", "--", "--host=0.0.0.0"]
