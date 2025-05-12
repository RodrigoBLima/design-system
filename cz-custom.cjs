module.exports = {
  // Configuração do prompt
  prompter: async (cz, commit) => {
    const { type } = await cz.prompt([
      {
        type: "list",
        name: "type",
        message: "Selecione o tipo de alteração que você está commitando:",
        choices: [
          { name: "feat:     Um novo recurso", value: "feat" },
          { name: "fix:      Correção de um bug", value: "fix" },
          {
            name: "docs:     Alterações apenas na documentação",
            value: "docs",
          },
          {
            name: "style:    Alterações de estilo de código (ex: formatação)",
            value: "style",
          },
          {
            name: "refactor: Mudança no código que não corrige um bug nem adiciona recurso",
            value: "refactor",
          },
          { name: "perf:     Melhorias de performance", value: "perf" },
          { name: "test:     Adição ou correção de testes", value: "test" },
          {
            name: "chore:    Alterações no processo de build ou ferramentas auxiliares",
            value: "chore",
          },
          {
            name: "revert:   Reverter para um commit anterior",
            value: "revert",
          },
        ],
        validate: (input) => (input ? true : "Tipo é obrigatório!"),
      },
    ]);

    const { scope } = await cz.prompt([
      {
        type: "input",
        name: "scope",
        message:
          "Informe o escopo (ex: componente, funcionalidade, etc.) [obrigatório]",
        validate: (input) => (input ? true : "Escopo é obrigatório!"),
      },
    ]);

    const { description } = await cz.prompt([
      {
        type: "input",
        name: "description",
        message:
          'Escreva uma breve descrição das mudanças (imperativa, ex: "corrige bug") [obrigatório]',
        validate: (input) => {
          if (!input) return "Descrição é obrigatória!";
          if (input.length > 50)
            return "A descrição não pode exceder 50 caracteres!";
          if (input.charAt(0) === input.charAt(0).toUpperCase()) {
            return "A descrição não deve começar com letra maiúscula!";
          }
          if (input.charAt(input.length - 1) === ".") {
            return "A descrição não deve terminar com ponto final!";
          }
          return true;
        },
      },
    ]);

    const { body } = await cz.prompt([
      {
        type: "input",
        name: "body",
        message:
          "Insira informações adicionais para a mensagem de commit (opcional)",
      },
    ]);

    const { footer } = await cz.prompt([
      {
        type: "input",
        name: "footer",
        message: "Insira informações adicionais no rodapé (opcional)",
      },
    ]);

    const { prId } = await cz.prompt([
      {
        type: "input",
        name: "prId",
        message: "Informe o ID do PR (ex: PR-1234) para referência (opcional)",
      },
    ]);

    // Combina todas as respostas para formar a mensagem de commit
    let commitMessage = `${type}(${scope}): ${description}\n`;
    if (body) commitMessage += `\n${body}\n`;

    // Cria o rodapé com referência ao PR e tarefa do ClickUp
    let footerMessage = "";
    if (footer) footerMessage += `${footer}\n`;
    if (prId) footerMessage += `Referência #${prId}\n`;

    // Adiciona o rodapé à mensagem de commit, se houver
    if (footerMessage) commitMessage += `\n${footerMessage}`;

    // Envia a mensagem gerada para o commit
    commit(commitMessage);
  },
};
