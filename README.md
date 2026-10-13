# UNIO — Espaços para viver histórias

Landing page em português para a UNIO Construtora e Incorporadora. A direção visual adapta a referência Aroeira Arquitetura: fundo escuro, fotografia em destaque, tipografia com contraste entre sans-serif e serifada em itálico, linhas discretas e composição editorial.

## Executar

Requer Node.js 18 ou superior. Não há dependências para instalar.

```bash
npm run dev
```

Acesse `http://127.0.0.1:4173`. Para verificar a sintaxe do JavaScript: `npm run check`.

## Estrutura

```text
site/
  index.html       # Conteúdo e estrutura da página
  styles.css       # Design e adaptação para celular
  script.js        # Menu, detalhes dos projetos e preparação do e-mail
  assets/          # Fotografias e fontes locais
scripts/
  serve.mjs        # Servidor de desenvolvimento sem dependências
```

Publique o conteúdo da pasta `site/` em qualquer hospedagem estática. Não requer processo de build. Os caminhos relativos também permitem hospedagem em uma subpasta.

## Conteúdo e contato

- Telefone e endereço de Rondonópolis: perfil público [@unio_ci](https://www.instagram.com/unio_ci/), consultado em 13/10/2026.
- E-mail, descrição institucional e empreendimentos: [site oficial da Unio](https://unio-ci.com/).
- O formulário prepara um e-mail para `geral@unio-ci.com` usando `mailto:`. O visitante revisa e envia no próprio aplicativo de e-mail. Não há backend, armazenamento de dados ou confirmação fictícia de envio.
- Os detalhes dos empreendimentos estão no objeto `projects`, em `site/script.js`.
- Valores, disponibilidade de unidades e condições comerciais não são publicados; devem ser confirmados com a empresa.
- O telefone/endereço do Instagram diferem dos dados no site antigo. Esta versão prioriza os contatos do perfil indicado no pedido.

## Referências e ativos

Referência visual: [Aroeira Arquitetura — Site | Landing Page](https://www.behance.net/gallery/234053373/Aroeira-Arquitetura-Site-Landing-Page). A referência orienta a composição; o código foi criado para este projeto.

Fotografias e perspectivas foram obtidas dos canais públicos da UNIO e são listadas em [ASSETS.md](ASSETS.md). As perspectivas artísticas são indicadas como ilustrativas. O uso definitivo dos materiais deve seguir os direitos da empresa e dos respectivos autores.

Fontes locais: Manrope e Cormorant Garamond, distribuídas sob a SIL Open Font License; licenças em `site/assets/`.

## Recursos

Página responsiva, navegação por âncoras, menu móvel, modais com foco gerenciado pelo elemento nativo `dialog`, perguntas frequentes com `details`, links de telefone e e-mail, suporte a movimento reduzido e imagens WebP locais.
