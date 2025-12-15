# SFX App - Website

Website institucional do serviço de transporte coletivo SFX, conectando passageiros e motoristas em rotas pré-definidas.

## 📋 Sobre o Projeto

Este é um website estático desenvolvido para apresentar o serviço SFX de transporte coletivo. O site é totalmente responsivo e otimizado para GitHub Pages.

### Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Design system com variáveis CSS
- **JavaScript (Vanilla)** - Interatividade
- **Google Fonts** - Tipografia Roboto
- **GitHub Pages** - Hospedagem

### Características

- ✅ Design moderno com tema roxo (#6708CD)
- ✅ Totalmente responsivo (mobile-first)
- ✅ Animações suaves e transições
- ✅ SEO otimizado
- ✅ Conteúdo em Português Brasileiro
- ✅ Conformidade com LGPD

## 📁 Estrutura do Projeto

```
sfx_website/
├── index.html                          # Página principal
├── terms.html                          # Termos de Uso
├── privacy.html                        # Política de Privacidade
├── css/
│   └── styles.css                      # Design system completo
├── js/
│   └── main.js                         # JavaScript para interatividade
├── logo_purple_back_white_font.png    # Logo (fundo roxo)
├── logo_white_back_purple_font.png    # Logo (fundo branco)
└── README.md                           # Este arquivo
```

## 🚀 Deploy no GitHub Pages

### Opção 1: Via Interface do GitHub

1. Faça upload de todos os arquivos para um repositório GitHub
2. Vá em **Settings** > **Pages**
3. Em **Source**, selecione a branch `main` e a pasta `/ (root)`
4. Clique em **Save**
5. Aguarde alguns minutos e acesse o site em: `https://[seu-usuario].github.io/[nome-do-repo]/`

### Opção 2: Via Git Command Line

```bash
# Inicialize o repositório (se ainda não foi feito)
git init

# Adicione todos os arquivos
git add .

# Faça o commit
git commit -m "Initial commit - SFX Website"

# Adicione o repositório remoto (substitua com sua URL)
git remote add origin https://github.com/seu-usuario/sfx-website.git

# Envie para o GitHub
git push -u origin main
```

Depois, siga os passos da Opção 1 para ativar o GitHub Pages.

## 💻 Desenvolvimento Local

Para testar o site localmente, você pode usar qualquer servidor HTTP simples:

### Usando Python

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Depois acesse: `http://localhost:8000`

### Usando Node.js (npx)

```bash
npx serve .
```

### Usando VS Code

Instale a extensão **Live Server** e clique com o botão direito em `index.html` > **Open with Live Server**

## ✏️ Personalizações

### Alterar Cores

Edite as variáveis CSS em `css/styles.css`:

```css
:root {
  --color-primary: #6708cd; /* Cor principal */
  --color-primary-dark: #4d0696; /* Cor escura */
  --color-primary-light: #8e3ff0; /* Cor clara */
}
```

### Alterar Email de Contato

Edite o atributo `href` do botão de contato em `index.html`:

```html
<a href="mailto:SEUEMAIL@dominio.com?subject=..."></a>
```

### Alterar Conteúdo

Todos os textos estão diretamente nos arquivos HTML e podem ser editados facilmente:

- `index.html` - Página principal
- `terms.html` - Termos de Uso
- `privacy.html` - Política de Privacidade

### Trocar Logos

Substitua os arquivos de imagem mantendo os mesmos nomes:

- `logo_purple_back_white_font.png`
- `logo_white_back_purple_font.png`

Ou atualize o caminho em todos os arquivos HTML:

```html
<img src="NOVO_CAMINHO_DO_LOGO.png" alt="SFX Logo" />
```

## 📱 Responsividade

O site é otimizado para:

- 📱 Mobile (< 480px)
- 📱 Tablet (481px - 768px)
- 💻 Desktop (> 768px)

## ⚖️ Conformidade Legal

- ✅ Termos de Uso completos
- ✅ Política de Privacidade em conformidade com LGPD
- ⚠️ **Importante:** Os documentos legais não são definitivos.

## 📧 Contato

Para dúvidas sobre o serviço SFX:

- **Email:** contato@sfx.app.br
