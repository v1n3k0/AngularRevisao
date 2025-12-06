# Stage 1: Build
FROM node:22-alpine AS builder

# Update Alpine packages to reduce vulnerabilities
RUN apk update && apk upgrade --no-cache

WORKDIR /app

# Copiar package.json e package-lock.json
COPY app1/package*.json ./

# Instalar dependências
RUN npm install

# Copiar o código da aplicação
COPY app1/ .

# Build da aplicação Angular
RUN npm run build

# Stage 2: Serve
FROM node:22-alpine AS runtime

# Update Alpine packages to reduce vulnerabilities
RUN apk update && apk upgrade --no-cache

WORKDIR /app

# Copiar dependências do stage anterior
COPY --from=builder /app/package*.json ./
RUN npm install --only=production

# Copiar arquivos buildados
COPY --from=builder /app/dist ./dist

# Expor porta
EXPOSE 4200

# Command para rodar a aplicação
CMD ["node", "dist/app1/server/server.mjs"]
