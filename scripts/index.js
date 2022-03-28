const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", () => {
  // CAPTURA DE DADDOS
  let email =  document.getElementById('email-input').value;
  let senha = document.getElementById('password-input').value;
  let idadeRadio = document.getElementsByName('legalAge')
  let maiorIdade = false;
  idadeRadio.forEach((elemento) => 
  {
      if(elemento.value === 'true' && elemento.checked)
      {
        maiorIdade = true;  
      }
  });

  let termoAceito = document.getElementById('tyc-input').checked;
  //let termoAceito = termos.checked;

  // VALIDAÇÃO DE DADOS
  if (!maiorIdade) {
    alert('É necessário ser maior de idade para se registrar no site.')
  }
  else if (!termoAceito)
  {
    alert('Deve aceitar os termos e condições para se registar no site');
  }
  else
  {
    let pessoa = 
    {
      nome: email,
      senha: senha,
      legalAge: maiorIdade,
      tycAccepted: termoAceito
    }
    console.log(pessoa);
  }
  
  


  let resumo = `email: ${email}
  senha: ${senha}
  Maior de idade? ${maiorIdade}
  Termos aceitos? ${termoAceito}`

  /// Escreva aqui o seu código, seguindo estas orientações passo a passo:

  // 1. Obter o valor introduzido no input do e-mail. X

  // 2. Obter o valor introduzido no input de senha. X

  // 3. Obter o valor do input de rádio. X

  // 4. Obter o valor do input com o checkbox. X

  // 5. Validar se o utilizador for maior de idade. Caso contrário, mostramos
  // uma mensagem de erro: "Tem de ser maior de idade para se registar no site". X

  // 6. Validamos se o utilizador aceitou os termos e condições. Caso contrário, exibimos
  // uma mensagem de erro: "Deve aceitar os termos e condições para se registar no site". X

  // 7. Por fim, se tudo estiver correto, exibimos um objeto no console com as informações definidas pelo utilizador. 
});
