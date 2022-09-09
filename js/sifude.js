
var dados = new FormData(formulario) 
 var nome = dados.get('nome');
 var email = dados.get('email');
 var motivo = dados.get('motivo');
 var turma = dados.get('turma');
 var mensagem = dados.get('mesagem');
   
emailjs.send('service_igidb3v', 'template_npdb3t2', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

    emailjs.sendForm('service_igidb3v', 'template_npdb3t2', '#myForm')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });