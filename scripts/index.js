const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", () => 
{
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
  if (!maiorIdade)
  {
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
});
