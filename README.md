# Projeto - ReactJS Challenge
## Executando o projeto React
Para executar o projeto, siga os passos abaixo:

 - Acesse a pasta ``extended-warranty`` através do terminal
 - Execute o comando ``pnpm install`` para instalar as dependências do projeto
 - Em seguida, execute o comando ``pnpm dev`` para iniciar o servidor de desenvolvimento
 - O projeto será executado em seu navegador padrão no endereço *http://localhost:5173/*.

## Build React
Para gerar a build do projeto, siga os passos abaixo:

 - Acesse a pasta ``extended-warranty`` através do terminal
 - Execute o comando ```pnpm build```
 - Os arquivos da build serão gerados na pasta dist/ na raiz do projeto

## Server com a Integração com API Stripe
O projeto ReactJS Challenge possui integração com a API Stripe para processamento de pagamentos para teste. Para utilizar essa integração, é necessário incluir a chave secreta do Stripe em um arquivo .env.

Para isso, siga os passos abaixo:

Crie um arquivo .env na raiz do projeto na pasta `server`
Adicione as seguintes variáveis de ambiente no arquivo:
PORT: porta em que o servidor será executado (ex: 3333)
FRONT_DOMAIN: domínio do frontend da aplicação (ex: http://localhost:5173)
STRIPE_SECRET_KEY: chave secreta do Stripe para autenticação da API
bash
Copy code
### Exemplo de arquivo .env
```sh
PORT=3333
FRONT_DOMAIN=http://localhost:5173
STRIPE_SECRET_KEY=sk_test_1234567890abcdefghijklmnopqrstuvwxyz
```

Executando o projeto com integração com API Stripe
Para executar o projeto com a integração com API Stripe, siga os passos abaixo:

Certifique-se de ter configurado corretamente as variáveis de ambiente no arquivo .env
Acesse a pasta ``server`` através do terminal
Execute o comando pnpm install para instalar as dependências do projeto
Em seguida, execute o comando pnpm dev para iniciar o servidor de desenvolvimento em seguida execute o endpoint ``http://localhost:3333/migration`` para cadastrar os produtos no stripe.

Com a integração com a API Stripe configurada, o projeto será capaz de processar pagamentos por meio da plataforma de pagamentos Stripe.

