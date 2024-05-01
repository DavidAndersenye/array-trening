let tall = [34, 53, 2, 3, 34, 26, 26, 85, 3, 4, 98, 2, 12];

function skrivUtArrayen() {
  resetResult();
  for (let i = 0; i < tall.length; i++) {
    document.getElementById('result').innerHTML += tall[i] + '<br>';
  }
}

function skrivUtArrayenBaklengs() {
  resetResult();
  for (let i = tall.length - 1; i >= 0; i--) {
    document.getElementById('result').innerHTML += tall[i] + '<br>';
  }
}

function skrivUtAnnethvertTall() {
  resetResult();
  for (let i = 0; i < tall.length; i += 2) {
    document.getElementById('result').innerHTML += tall[i] + '<br>';
  }
}

function skrivUtTallMindreEnnTi() {
  resetResult();
  for (let i = 0; i < tall.length; i++) {
    if (tall[i] < 10) {
      document.getElementById('result').innerHTML += tall[i] + '<br>';
    }
  }
}

function skrivUtPartall() {
  resetResult();
  for (let i = 0; i < tall.length; i++) {
    if (tall[i] % 2 === 0) {
      document.getElementById('result').innerHTML += tall[i] + '<br>';
    }
  }
}

function skrivUtSummen() {
  resetResult();
  let sum = 0;
  for (let i = 0; i < tall.length; i++) {
    sum += tall[i];
  }
  document.getElementById('result').innerHTML = 'Summen av tallene er: ' + sum;
}

function erPrimtall(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function skrivUtSummenAvPrimtall() {
  resetResult();
  let sumPrimtall = 0;
  for (let i = 0; i < tall.length; i++) {
    if (erPrimtall(tall[i])) {
      sumPrimtall += tall[i];
    }
  }
  document.getElementById('result').innerHTML = 'Summen av primtallene er: ' + sumPrimtall;
}

function resetResult() {
  document.getElementById('result').innerHTML = '';
}
