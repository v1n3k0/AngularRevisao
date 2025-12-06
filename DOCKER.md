# Docker Setup para Projeto Angular

## Pré-requisitos
- Docker instalado
- Docker Compose instalado

## Como usar

### 1. Build e start dos containers
```bash
docker-compose up -d
```

### 2. Verificar logs
```bash
docker-compose logs -f angular-app
```

### 3. Acessar a aplicação
- **Desenvolvimento**: http://localhost:4200
- **Produção (via Nginx)**: http://localhost:80

### 4. Parar os containers
```bash
docker-compose down
```

### 5. Rebuild da imagem
```bash
docker-compose build --no-cache
docker-compose up -d
```

### 6. Executar comandos dentro do container
```bash
docker-compose exec angular-app npm run build
docker-compose exec angular-app ng serve
```

## Estrutura

### Dockerfile
- **Stage 1 (builder)**: Instala dependências e faz build do Angular
- **Stage 2 (runtime)**: Executa a aplicação com dependências de produção apenas

### docker-compose.yml
- **angular-app**: Serviço principal com a aplicação Angular
- **nginx**: Reverse proxy para servir a aplicação em produção
- **angular-network**: Network privada para comunicação entre serviços

### nginx.conf
- Configuração do Nginx para proxy reverso
- Cache de arquivos estáticos
- Fallback para SPA (index.html)

## Variáveis de Ambiente

No `docker-compose.yml`, você pode adicionar variáveis:

```yaml
environment:
  - NODE_ENV=production
  - API_URL=http://api.example.com
```

## Volumes

O volume `/app` mantém o código sincronizado com o host para desenvolvimento:

```yaml
volumes:
  - ./app1:/app
```

Remova essa linha em produção.

## Troubleshooting

### Porta já em uso
```bash
# Mude a porta no docker-compose.yml
ports:
  - "8080:4200"  # Host:Container
```

### Rebuild necessário
```bash
docker-compose up -d --build
```

### Limpar tudo
```bash
docker-compose down -v  # -v remove volumes também
```
