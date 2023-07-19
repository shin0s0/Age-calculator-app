const calBtn = document.getElementById('calBtn');
const resy = document.getElementById('resY');
const resm = document.getElementById('resM');
const resd = document.getElementById('resD');

calBtn.addEventListener('click', function() {
  const bdayInput = document.getElementById('bDay');
  const bmonthInput = document.getElementById('bMonth');
  const byearInput = document.getElementById('bYear');

  const bday = parseInt(bdayInput.value, 10);
  const bmonth = parseInt(bmonthInput.value, 10) - 1;
  const byear = parseInt(byearInput.value, 10);

  const errD = document.getElementById('errDay');
  const errM = document.getElementById('errMonth');
  const errY = document.getElementById('errYear');

  const today = new Date();
  const selectedDate = new Date(byear, bmonth, bday);

  let hasError = false;

  if (!bday) {
    errD.style.color = 'hsl(0, 100%, 67%)';
    errD.innerText = 'This field is required';
    bdayInput.style.borderColor = 'hsl(0, 100%, 67%)';
    hasError = true;
  } else if (bday <= 0 || bday > 31) {
    errD.style.color = 'hsl(0, 100%, 67%)';
    errD.innerText = 'Must be a valid day';
    bdayInput.style.borderColor = 'hsl(0, 100%, 67%)';
    hasError = true;
  } else {
    errD.innerText = '';
    bdayInput.style.borderColor = '#ccc';
  }

  if (!bmonth) {
    errM.style.color = 'hsl(0, 100%, 67%)';
    errM.innerText = 'This field is required';
    bmonthInput.style.borderColor = 'hsl(0, 100%, 67%)';
    hasError = true;
  } else if (bmonth < 0 || bmonth > 11) {
    errM.style.color = 'hsl(0, 100%, 67%)';
    errM.innerText = 'Must be a valid month';
    bmonthInput.style.borderColor = 'hsl(0, 100%, 67%)';
    hasError = true;
  } else {
    errM.innerText = '';
    bmonthInput.style.borderColor = '#ccc';
  }

  if (!byear) {
    errY.style.color = 'hsl(0, 100%, 67%)';
    errY.innerText = 'This field is required';
    byearInput.style.borderColor = 'hsl(0, 100%, 67%)';
    hasError = true;
  } else if (byear <= 0) {
    errY.style.color = 'hsl(0, 100%, 67%)';
    errY.innerText = 'Must be a valid year';
    byearInput.style.borderColor = 'hsl(0, 100%, 67%)';
    hasError = true;
  }else if (selectedDate > today) {  
    errY.style.color = 'hsl(0, 100%, 67%)';
    errY.innerText = 'Must be in the past';
    byearInput.style.borderColor = 'hsl(0, 100%, 67%)';
    hasError = true;
  } else {
    errY.innerText = '';
    byearInput.style.borderColor = '#ccc';
  }

  if (hasError) {
    return; 
  }

  
  
  
  const ageInMilsec = today - selectedDate;
  const milsecPerDay = 1000 * 60 * 60 * 24;
  const milsecPerMonth = milsecPerDay * 30.44;
  const milsecPerYear = milsecPerDay * 365.25;

  const ageInYears = Math.floor(ageInMilsec / milsecPerYear);
  const ageInMonths = Math.floor(ageInMilsec / milsecPerMonth) % 12;
  const ageInDays = Math.floor(ageInMilsec / milsecPerDay) % 30;

  resy.innerText = ageInYears;
  resm.innerText = ageInMonths;
  resd.innerText = ageInDays;
});

