var letterToNumber = {
  a: 31,
  b: 42,
  c: 53,
  d: 64,
  e: 75,
  f: 86,
  g: 97,
  h: 18,
  i: 29,
  j: 32,
  k: 43,
  l: 54,
  m: 65,
  n: 76,
  o: 87,
  p: 98,
  q: 19,
  r: 21,
  s: 33,
  t: 55,
  u: 66,
  v: 77,
  w: 88,
  x: 99,
  y: 11,
  z: 17,
};

// funkce pro vygenerování kódu:
function generateCode(firstName, lastName, birthDay) {
  var code = '';

  // převedení písmen na čísla podle mapovací tabulky:
  var fullName = firstName.toLowerCase() + lastName.toLowerCase();
  for (var i = 0; i < fullName.length; i++) {
    var letter = fullName[i];
    if (letterToNumber[letter]) {
      code += letterToNumber[letter];
    } else {
      // pokud písmeno není v mapovací tabulce, použijeme 00:
      code += '00';
    }
  }

  // odstranění pomlček z data narození:
  var birthDayWithoutDashes = birthDay.replace(/-/g, '');

  // přidání data narození na konec vygenerovaného kódu:
  code += birthDayWithoutDashes;

  return code;
}

// funkce pro použití a zobrazení číselného kódu vygenerovaného z hodnot zadaných do formuláře:
function generateAndDisplayCode() {
  var firstName = document.getElementById('jmeno').value;
  var lastName = document.getElementById('prijmeni').value;
  var birthDay = document.getElementById('datum_narozeni').value;

  // ověření, že jsou vyplněna všechna pole formuláře:
  if (firstName === '' || lastName === '' || birthDay === '') {
    alert('Vyplňte, prosím, všechna pole formuláře.');
    return; // ukončení funkce, pokud nejsou všechna pole vyplněná
  }

  // // ověření, zda je rok narození platný (má právě 4 číslice):
  // if (birthYear.length !== 4 || isNaN(parseInt(birthYear))) {
  //   alert('Zadejte, prosím, platný rok narození.');
  //   return; // ukončení funkce, pokud rok narození není platný
  // }

  var code = generateCode(firstName, lastName, birthDay);

  // vyčištění hodnot v políčkách formuláře po vygenerování ID:
  document.getElementById('jmeno').value = '';
  document.getElementById('prijmeni').value = '';
  document.getElementById('datum_narozeni').value = '';

  var kodContainer = document.getElementById('kod-container');
  kodContainer.innerHTML = `<p>ID pro <strong>${firstName} ${lastName}</strong> je:</p> <p class="code"> ${code}</p>`;
}

// funkce pro odstranění diakritiky ze zadaného textu:
function removeAccents(input) {
  input.value = input.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
