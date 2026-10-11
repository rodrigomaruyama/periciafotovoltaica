# Perícia Fotovoltaica — website institucional

Site estático de uma página para **periciafotovoltaica.com.br**, sem dependências, frameworks, serviços pagos ou etapa de compilação. Compatível com GitHub Pages.

## Antes de publicar

1. Abra `assets/config.js` e preencha **email** e/ou **whatsapp**. Contatos não foram inventados; por padrão o botão de e-mail fica desabilitado e o botão de WhatsApp fica oculto.
2. Revise as qualificações, os serviços e as informações apresentadas. Caso queira, acrescente o número de registro CREA no texto.
3. Mantenha `CNAME` com `periciafotovoltaica.com.br`.

## Publicação

1. Crie um repositório no GitHub (por exemplo, `periciafotovoltaica`).
2. Envie o conteúdo **desta pasta**, inclusive `index.html`, `CNAME` e `.nojekyll`, à raiz da branch `main`.
3. No repositório: **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save**.
4. Em **Settings → Pages → Custom domain**, configure `periciafotovoltaica.com.br`.
5. No gerenciador DNS do domínio, crie os quatro registros A abaixo para o host `@` (confira se não há registros conflitantes):

| Tipo | Nome | Valor |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

6. Opcional e recomendado: adicione `www` como **CNAME** apontando para `SEU_USUARIO.github.io` (substitua pelo login real do GitHub, sem nome de repositório).
7. Após a validação DNS e emissão do certificado, habilite **Enforce HTTPS** em Settings → Pages.

**Atenção:** não apague ou substitua registros MX/TXT usados no serviço de e-mail do domínio. Propagação DNS pode levar até 24 h.

Documentação oficial: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Estrutura

```
index.html            — conteúdo e SEO
CNAME                 — domínio personalizado
.nojekyll             — publicação sem processamento Jekyll
assets/style.css      — layout responsivo
assets/main.js        — menu, contatos e ano
assets/config.js      — seus dados de contato
assets/favicon.svg    — ícone
assets/og-image.svg   — imagem social
```

## Observações técnicas

- Nenhum backend; contato por links `mailto:` ou WhatsApp, com configuração local.
- HTML sem bibliotecas externas, não utiliza cookies nem analytics.
- Adaptação a telas pequenas, navegação por teclado, sem carregamento de fontes externas.
- Ao adicionar fotos reais, preferir WebP/AVIF comprimidos e imagens autorizadas para divulgação.
