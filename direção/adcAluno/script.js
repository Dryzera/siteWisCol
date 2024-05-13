function adicionarUsuario() {
    var id = document.getElementById('id').value;
    var senha = document.getElementById('senha').value;

    // Verifica se o ID já existe
    if (localStorage.getItem(id) !== null) {
      alert('ID já existe! Por favor, escolha outro.');
      return;
    }

    // Armazena o ID e a senha no localStorage
    localStorage.setItem(id, senha);

    alert('Usuário adicionado com sucesso!');
    // Limpa os campos do formulário após a adição
    document.getElementById('formUsuario').reset();
  }