# O que é GraphQL

- Graphql foi um projeto criado no facebook. O QL significa query language, Graph significa grafos.

- Serve para escrita e leitura, para comunicação de front e back. Ele é agnóstico a linguagens, frameworks e banco de dados. É uma forma de comunicação entre front e back.

- O GraphQL é fortemente tipado, e tem intelisense embutido.

- gera uma documentação automática de toda a API.

- No GraphQL temos 2 conceitos querys e mutations:

* querys: buscar dados no back-end.
* mutations: criar, modificar e deletar dados.

- Também existe o subscription que é uma query que fica sendo executada toda hora.

# Quais problemas GraphQL resolve? / Vantagens

- resolve o problema de overfetching.
- resolve o problema de underfetching.
- em arquitetura REST convencional o back-end define os dados que serão tragos, mas quando se utiliza o GraphQL o front-end define os dados que serão tragos.

# Quais são as dificuldades do GraphQL? / Desvantagens

- Costume de usar REST
- Trabalhar com cache, por exemplo, se um end-point retorna no header o campo cache-control, isso já será feito automaticamente. Geralmente com GraphQL, teremos uma rota única que definirá o acesso inteiro a aplicação.
- Lidar com erros no GraphQL, pois no GraphQL todos os retornos são 200.

# Existem duas estratégias para criar o back-end

- Schema first e code first

* Code first: A gente escreve o código e ele é responsável por gerar os schemas do GraphQL.
* Schema first: A gente escreve o schema primeiro e depois a gente escreve o código.

* O Schema é responsável por conter as instruções com as rotas disponíveis no sistema e os tipos de dados que temos na aplicação.
---

- é uma linguagem de consulta de APIs.

- ele é baseado na estrutura de dados de grafos.

- (Isso é over-fetching e under-fetching) em APIs tradicionais quando precisamos pegar um dado específico e ao acionarmos o end-point ele retorna sempre um conjunto de dados, pode ser que venha muito mais informações do que é necessário, resultando no over-fetching. Também pode ocorrer o under-fetching, que é a falta de dados no end-point. O GraphQL tem como objetivo resolver esses problemas.
