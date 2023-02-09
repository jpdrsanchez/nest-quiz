# Nest Quiz

## Sumário
- [Requisitos](#requisitos)
- [Requisitos](#configuração)
- [Endpoints](#endpoints)
- [Tecnologias](#tecnologias)

### Requisitos
- [Docker e Docker Compose](https://www.docker.com/products/docker-desktop/)

### Configuração 
- Faça o download do docker e docker-compose e certifique-se de que os mesmos estão funcionando. O projeto está totalmente dockerizado sendo assim essas ferramentas são necessárias para o funcionamento correto da aplicação.
- Faça a clonagem do projeto para sua máquina:
```
https://github.com/jpdrsanchez/nest-quiz
cd nest-quiz
``` 
- Dentro da pasta do projeto, rode o seguinte comando para iniciar o build da nossa imagem e inicia-la:
```
docker compose up -d --build
``` 
- Para para os containers rode o comando:
```
docker compose down
``` 
- Das proximas vezes que for inicializar o container, caso a imagem já esteja salva em sua máquina, basta rodar o comando:
```
docker compose up -d
``` 
- Nosso projeto utiliza o Prisma como ORM e possuí um arquivo de seed que roda no banco de dados sempre que fazemos o build da imagem para cadastrarmos informações iniciais no banco. Caso queira mudar essas infos, basta editar o arquivo em `/prisma/seeder.ts` e depois rodar o seguinte comando:
```
docker compose exec nestjs yarn prisma:reset
``` 

### Endpoints
**GET** `api/questions/:id`
`:id`: *integer*

Exemplos:
```
http://localhost:3000/api/questions/1
http://localhost:3000/api/questions/2
http://localhost:3000/api/questions/3
```

### Tecnologias
- [Nestjs](https://nestjs.com/): Framework node.js.
- [TypeScript](https://www.typescriptlang.org/): Superset que adiciona tipagem estática ao javascript.
- [Prisma](https://www.prisma.io/): ORM node.js