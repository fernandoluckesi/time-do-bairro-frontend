# Time do Bairro — Landing page

Landing page do app Time do Bairro, feita em React + TypeScript + styled-components (Vite).
O layout segue a referência [Food Delivery App Landing Page](https://dribbble.com/shots/27617719-Food-Delivery-App-Landing-Page),
com textos e imagens adaptados para o produto.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Estrutura

- `src/components/sections/` — uma seção por arquivo (Navbar, Hero, Partners, About, HowItWorks, WhyUs, Testimonials, DownloadCta, Footer)
- `src/components/phone/` — moldura de celular e telas **mockadas** do app, desenhadas em código (não são telas reais)
- `src/components/ui/` — botões, container, logo, tipografia e ícones de redes sociais
- `src/styles/` — tema (cores, raios, breakpoints) e estilos globais
- `src/data/images.ts` — fotos provisórias do Unsplash (licença livre), servidas pelo CDN deles

## Placeholders a substituir antes de publicar

- Fotos de `src/data/images.ts`
- Telas de celular (`src/components/phone/screens.tsx`) pelos prints reais do app
- Depoimentos, números (10k+, 25k, 98%) e "logos" de parceiros, todos fictícios
- Links de download, redes sociais e contato no rodapé
# time-do-bairro-web
