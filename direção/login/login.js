function verificarLogin() {
  var id = document.getElementById('id').value;
  var senha = document.getElementById('senha').value;

  // Verifica se o ID existe no localStorage
  if (localStorage.getItem(id) === null) {
    alert('ID não encontrado!');
    return;
  }

  // Verifica se a senha corresponde ao ID
  if (localStorage.getItem(id) !== senha) {
    alert('Senha incorreta!');
    return;
  }

  alert('Login bem-sucedido!');
  // Redireciona para outra página após o login
  window.location.href = '../index.html';
}