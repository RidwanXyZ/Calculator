let screen = document.getElementById('screen');
let input = '';

function appendToScreen(value) {
  input += value;
  screen.innerHTML = input;
}


function deleteLastChar() {
  input = input.slice(0, -1);
  return screen.innerHTML = input;
}

function clearScreen() {
  input = '';
  return screen.innerHTML = '0';
}

function calculate() {
  try {
    let result = eval(input);

    // Batasi jumlah angka dibelakang koma menjadi maksimal 4
    result = result.toFixed(2);

    input = result.toString();
    screen.innerHTML = input;
  } catch (error) {
    screen.innerHTML = 'Error';
  }
}