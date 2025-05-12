# 🧩 Design System – Biblioteca de Componentes React

## 📌 Sobre o Projeto

Este projeto é um **Design System** baseado em **React**, criado para promover consistência visual e produtividade no desenvolvimento de interfaces. Ele utiliza:

- **TypeScript** para garantir tipagem estática;
- **Tailwind CSS** para estilos utilitários;
- **Storybook** para documentação e visualização interativa dos componentes;
- **shadcn/ui** como base para componentes acessíveis e modernos.

A biblioteca oferece **componentes reutilizáveis, acessíveis e personalizáveis**, prontos para serem integrados a qualquer projeto frontend.

---

## 🚀 Instalação

Siga os passos abaixo para instalar e rodar o projeto localmente:

```bash
# Clone o repositório
git clone https://github.com/RodrigoBLima/design-system

# Acesse o diretório do projeto
cd design-system

# Instale as dependências
npm install
```

---

## 📦 Como Usar os Componentes via NPM

Realizar integração

---

## 📚 Visualizando Componentes com Storybook

O **Storybook** permite que você desenvolva, documente e teste os componentes de forma isolada.

### ▶️ Para iniciar o Storybook localmente:

```bash
npm run storybook
```

A aplicação será aberta em seu navegador, geralmente no endereço: `http://localhost:6006`.

Lá você poderá explorar os componentes, suas variações e estados, facilitando o desenvolvimento e testes.

---

## ✍️ Como Adicionar Novos Componentes

Para adicionar novos componentes ao design system, siga os passos abaixo:

1. **Crie o componente:**

Utilize o utilitário do **shadcn/ui** para gerar a estrutura base do componente:

```bash
npx shadcn@latest add accordion
```

> 📌 Consulte a [documentação oficial do shadcn/ui](https://ui.shadcn.com/docs/components) para ver a lista completa de componentes disponíveis.

2. **Estilize e ajuste conforme o design do projeto:**

Edite o componente gerado na pasta:

```
src/components/<nome-do-componente>/index.tsx
```

3. **Crie a história do componente para o Storybook:**

Adicione o arquivo:

```
src/components/<nome-do-componente>/<nome-do-componente>.stories.tsx
```

Inclua variações e exemplos de uso do componente para facilitar testes e documentação.

4. **Visualize no Storybook:**

Execute o Storybook localmente e verifique se o componente foi adicionado corretamente.

5. **Versione suas alterações:**

```bash
git add .
git commit -m "feat: adiciona componente <nome-do-componente>"
git push origin main
```

> 💡 Se tiver dúvidas sobre como escrever uma história, consulte a [documentação oficial do Storybook](https://storybook.js.org/docs/react/writing-stories/introduction).
