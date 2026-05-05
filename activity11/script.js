function showForLoop() {
  const num = parseFloat(document.getElementById("forNum").value);
  const text = document.getElementById("forText").value;

  if (isNaN(num) || !text) {
    document.getElementById("forOutput").innerHTML = "Please enter a valid number and text.";
    return;
  }

  let output = "";
  for (let i = 1; i <= num; i++) {
    output += i + ". " + text + "<br>";
  }
  document.getElementById("forOutput").innerHTML = output;
}

function showWhileLoop() {
  const num = parseFloat(document.getElementById("whileNum").value);
  const text = document.getElementById("whileText").value;

  if (isNaN(num) || !text) {
    document.getElementById("whileOutput").innerHTML = "Please enter a valid number and text.";
    return;
  }

  let output = "";
  let i = 1;
  while (i <= num) {
    output += i + ". " + text + "<br>";
    i++;
  }
  document.getElementById("whileOutput").innerHTML = output;
}

function showDoWhileLoop() {
  const num = parseFloat(document.getElementById("doWhileNum").value);
  const text = document.getElementById("doWhileText").value;

  if (isNaN(num) || !text) {
    document.getElementById("doWhileOutput").innerHTML = "Please enter a valid number and text.";
    return;
  }

  let output = "";
  let i = 1;
  do {
    output += i + ". " + text + "<br>";
    i++;
  } while (i <= num);
  document.getElementById("doWhileOutput").innerHTML = output;
}

function clearForLoop() {
  document.getElementById("forloop").reset();
  document.getElementById("forOutput").innerHTML = "";
}

function clearWhileLoop() {
  document.getElementById("whileloop").reset();
  document.getElementById("whileOutput").innerHTML = "";
}

function clearDoWhileLoop() {
  document.getElementById("dowhileloop").reset();
  document.getElementById("doWhileOutput").innerHTML = "";
}
