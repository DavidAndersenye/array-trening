let tall = [34, 53, 2, -3, 34, 26, -26, 85, 3, 4, 98, 2, -12];

function finnSummen() {
  resetResult();
  let sum = 0;
  for (let i = 0; i < tall.length; i++) {
    sum += tall[i];
  }
  document.getElementById('result').innerHTML = 'Summen av tallene er: ' + sum;
}

function finnAntallNegative() {
  resetResult();
  let antallNegative = 0;
  for (let i = 0; i < tall.length; i++) {
    if (tall[i] < 0) {
      antallNegative++;
    }
  }
  document.getElementById('result').innerHTML = 'Antall negative tall er: ' + antallNegative;
}

function finnGjennomsnitt() {
  resetResult();
  let sum = 0;
  for (let i = 0; i < tall.length; i++) {
    sum += tall[i];
  }
  const gjennomsnitt = sum / tall.length;
  document.getElementById('result').innerHTML = 'Gjennomsnittet av tallene er: ' + gjennomsnitt.toFixed(2);
}

function finnMinsteTall() {
  resetResult();
  let minsteTall = tall[0];
  for (let i = 1; i < tall.length; i++) {
    if (tall[i] < minsteTall) {
      minsteTall = tall[i];
    }
  }
  document.getElementById('result').innerHTML = 'Det minste tallet er: ' + minsteTall;
}

function finnSummenAvPartall() {
  resetResult();
  let sumPartall = 0;
  for (let i = 0; i < tall.length; i++) {
    if (tall[i] % 2 === 0) {
      sumPartall += tall[i];
    }
  }
  document.getElementById('result').innerHTML = 'Summen av partallene er: ' + sumPartall;
}

function resetResult() {
  document.getElementById('result').innerHTML = '';
}
