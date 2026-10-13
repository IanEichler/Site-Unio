# UNIO — Construtora e Incorporadora

Landing page em português com a composição da referência Aroeira Arquitetura: marca centralizada no topo, abertura fotográfica, faixa compacta de informações, galeria com uma imagem em destaque, três cartões menores, blocos translúcidos, perguntas frequentes centralizadas e contato com imagem à esquerda.

Por orientação do projeto, toda a tipografia usa Manrope, sem serifa. O conteúdo se limita a títulos, subtítulos, dados dos empreendimentos e contatos. Não há formulário.

## Executar

Requer Node.js 18 ou superior, sem dependências de instalação.

```bash
npm run dev
```

Acesse http://127.0.0.1:4173. Verificação de sintaxe: npm run check.

## Estrutura

- site/index.html: títulos, subtítulos, galeria e contatos.
- site/styles.css: layout e escala tipográfica compartilhada.
- site/script.js: galeria e ano do rodapé.
- site/assets/: imagens e fontes locais.
- scripts/serve.mjs: servidor local sem dependências.

Publique a pasta site/ em uma hospedagem estática. Não há processo de build; os caminhos relativos permitem publicação em subpastas.

## Tipografia

Os tamanhos estão centralizados em variáveis CSS: título principal, títulos de seção, títulos de cartões, texto padrão e legendas. Os pontos de adaptação para celular alteram essa escala de forma conjunta. Não são usadas fontes serifadas ou itálico.

## Conteúdo e contato

- Telefone e endereço: [perfil público @unio_ci](https://www.instagram.com/unio_ci/), consultado em 13/10/2026.
- E-mail e empreendimentos: [site oficial da Unio](https://unio-ci.com/).
- As 36 casas são do Vale dos Jacarandás; as quatro opções de planta são do Suprême Villas & Gardens.
- O contato usa links diretos de telefone, e-mail e Instagram.
- Valores e disponibilidade devem ser confirmados com a empresa.
- Os contatos do Instagram foram priorizados onde diferem do site antigo.

## Referência e materiais

Referência visual: [Aroeira Arquitetura — Site | Landing Page](https://www.behance.net/gallery/234053373/Aroeira-Arquitetura-Site-Landing-Page). O layout foi refeito para acompanhar a composição da referência, com as alterações de tipografia e conteúdo solicitadas.

Origens das imagens e prompt da ambientação: [ASSETS.md](ASSETS.md). A galeria usa imagens públicas dos empreendimentos UNIO. A imagem de ambientação da abertura não representa um empreendimento específico.

Manrope é distribuída sob a SIL Open Font License, incluída em site/assets/.
