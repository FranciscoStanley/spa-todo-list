# SPA Todo List – Roadmap de Aprendizado React

Este projeto é um Todo List em React (Vite) cujo intuito é servir como guia estruturado para quem está aprendendo. Cada tarefa representa um tópico ou prática recomendada que você deve estudar e marcar como concluído ao avançar.

## Objetivos Educacionais

A lista inicial (src/mocks/todosMock.js) funciona como um roadmap:

1. Fundamentos: JSX, props, estado, eventos.
2. Hooks principais: useState, useEffect, useRef, useMemo, useCallback.
3. Estilização: CSS puro, módulos, styled-components, Tailwind.
4. Estado global: Context API, Redux Toolkit, Zustand.
5. Performance: memoização, evitar re-render desnecessário.
6. Roteamento: rotas básicas, dinâmicas, parâmetros, query strings.
7. Network: fetch, Axios, GraphQL.
8. Testes: Jest, React Testing Library.
9. Acessibilidade e UX: aria-\*, foco, modais acessíveis.
10. Build e Deploy.

Você pode expandir este roadmap adicionando novos itens com mais granularidade.

---

## Stack Técnica

- React + Vite (desenvolvimento rápido e HMR).
- react-router-dom (navegação SPA).
- ESLint (qualidade e padrões).
- CSS organizado por responsabilidade (componentes, modais, layout).
- Portais (createPortal) para modais fora da árvore principal.

Scripts principais:

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção
npm run preview  # servir build local
```

Estrutura de execução:

- index.html: ponto de entrada.
- src/main.jsx: monta <App />.
- src/App.jsx: estado raiz (todos + tema + modais).

---

## Arquitetura de Pastas (Frontend)

src/
components/
Button/ (botões reutilizáveis)
TodoList/ (lista paginada + TodoItem avançado)
EditTodoModal/
ConfirmDeleteModal/
Header/
TodoItem/ (versão simples/legada)
pages/
AddTodo/
mocks/
todosMock.js
styles/
App.css (tema e layout global)
main.jsx
App.jsx

Fluxo:

1. App mantém estado de todos e tema.
2. Router:
   - / -> lista paginada (TodoList)
   - /add -> formulário de novo todo (AddTodo)
3. TodoItem (versão em components/TodoList) lida com editar, completar e excluir.
4. EditTodoModal e ConfirmDeleteModal usam createPortal para melhor acessibilidade/layout.

---

## Componentes e Funções (Descrição)

App (src/App.jsx):

- Estado: todos, darkMode.
- handleAddTodo(novoTodo): adiciona item com id incremental.
- toggleTheme(): alterna tema claro/escuro.
- editTodo(id, dados): atualiza campos de um todo.
- deleteTodo(id): remove item.

AddTodo (src/pages/AddTodo/AddTodo.jsx):

- Estado local dos inputs.
- handleAdd(): valida e chama onAdd, redireciona para /.

TodoList (src/components/TodoList/TodoList.jsx):

- currentPage: controla paginação.
- goTo(page): navegação segura entre páginas.
- slice lógico dos todos para exibição.

TodoItem (versão avançada em components/TodoList/TodoItem.jsx):

- toggleComplete(): alterna campo completed.
- handleDelete(): abre confirmação.
- performDelete(): remove definitivamente.
- handleSave(): aplica edição via callback recebido.
- openModal()/closeModal(): controla edição.

EditTodoModal:

- Estados locais: title, text, category.
- handleSave(): envia dados atualizados e fecha.

ConfirmDeleteModal:

- onConfirm(): confirma exclusão.
- onCancel(): aborta exclusão.

Botões (ButtonCompleted, ButtonEdit, ButtonDelete):

- Encapsulam estilo e acessibilidade (aria-label, aria-pressed).

Header:

- Exibe título e mensagem motivacional.

todosMock (src/mocks/todosMock.js):

- Array inicial de objetos: { id, title, text, category, completed }.

---

## Estilos

Principais arquivos:

- styles/App.css: variáveis de tema, layout, classes globais e dark mode.
- components/TodoList/TodoList.css: grid/lista + paginação.
- components/TodoList/TodoItem.css: badges, estados visuais.
- components/Button/Buttons.css: padrão dos botões.
- components/EditTodoModal/EditTodoModal.css e ConfirmDeleteModal/ConfirmDeleteModal.css: overlay, animação, acessibilidade.

Tema:

- Implementado via classes (ex.: .dark) e variáveis CSS para cores.

---

## Acessibilidade

- Modais com role="dialog" e aria-modal="true".
- Botões com aria-label contextual.
- Estado de conclusão usa aria-pressed em ButtonCompleted.
- Foco deve ser direcionado para o modal ao abrir (sugestão de melhoria futura).

---

## Sugestões de Evolução

- Persistência em localStorage ou IndexedDB.
- Integração com API real (REST/GraphQL).
- Testes unitários e de integração (Jest + RTL).
- Context API ou Redux para desacoplar estado do App.
- Uso de React Query/SWR para dados remotos.
- Internacionalização (i18n).
- Tema dinâmico (mais de claro/escuro).
- Modo de foco (mostrar somente tarefa corrente).
- Separar mocks de configuração (ex.: /data ou /fixtures).

---

## Guia Rápido de Estudo Usando o Projeto

1. Leia o código de App.jsx para entender a gerência de estado.
2. Explore TodoList e veja como a paginação foi feita de forma simples.
3. Compare o TodoItem legaço com o avançado para entender refatoração.
4. Estude modais (EditTodoModal e ConfirmDeleteModal) e createPortal.
5. Implemente persistência (localStorage) como exercício.
6. Escreva testes para Toggle de completed e para modais.
7. Refatore para Context API (todos + tema).
8. Introduza Suspense + Error Boundary (estudo de robustez).
9. Migre estilos para CSS Modules ou styled-components.
10. Faça deploy no Netlify ou Vercel.

Marque cada tarefa correspondente no próprio Todo List conforme aprender.

---

## FAQ Rápido

P: Posso adicionar TypeScript?
R: Sim. Converta arquivos para .tsx e configure tsconfig + eslint typescript.

P: Como adicionar nova categoria?
R: Acrescente category no novo objeto e ajuste validação/opções no AddTodo.

P: Como evitar re-renders?
R: Introduza React.memo em componentes de lista e useCallback/useMemo onde necessário.

---

Bom estudo! Marque seu progresso e evolua gradualmente pelo roadmap.
