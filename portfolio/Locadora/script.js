function validationForm() {
  let validationCod = document.forms["register"]["cod"].value;
  let validationTitle = document.forms["register"]["title"].value;
  let validationActor = document.forms["register"]["actor"].value;
  let validationNote = document.forms["register"]["note"].value;
  let validationDirector = document.forms["register"]["director"].value;
  let validationDate = document.forms["register"]["date"].value;
  let validationRadio = document.forms["register"]["radio"].value;

  if (validationCod == "") {
    alert("O Código deve ser preenchido");
    return false;
  }
  if (validationTitle == "") {
    alert("O titulo deve ser preenchido");
    return false;
  }
  if (validationActor == "") {
    alert("O nome do ator deve ser preenchido");
    return false;
  }
  if (validationNote == "") {
    alert("A nota deve ser preenchida");
    return false;
  }
  if (validationDirector == "") {
    alert("O Nome do diretor deve ser preenchido");
    return false;
  }
  if (validationDate == "") {
    alert("A data deve ser preenchida");
    return false;
  }
  if (validationRadio == "") {
    alert("o Gênero deve ser preenchido");
    return false;
  }
  alert("A validação ocorreu de forma correta");
}

function insert() {
  let cod = document.forms["register"]["cod"].value;
  let title = document.forms["register"]["title"].value;
  let actor = document.forms["register"]["actor"].value;
  let note = document.forms["register"]["note"].value;
  let director = document.forms["register"]["director"].value;
  let date = document.forms["register"]["date"].value;
  let radio = document.forms["register"]["radio"].value;

  let insert = window.document.getElementById("insertRow");

  insert.innerHTML = ` 
  <th scope="row">${cod}</th>
  <td>${title}</td>
  <td>${actor}</td>
  <td>${note}</td>
  <td>${director}</td>
  <td>${date}</td>
  <td>${radio}</td>
  `;
}
