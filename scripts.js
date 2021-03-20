//
//
//
//
const zeusObj = document.getElementById('zeus');
const poseidonObj = document.getElementById('poseidon');
const athenaObj = document.getElementById('athena');
const artemisObj = document.getElementById('artemis');
const hephaestusObj = document.getElementById('hephaestus');
const hermesObj = document.getElementById('hermes');
const heraObj = document.getElementById('hera');
const demeterObj = document.getElementById('demeter');
const apolloObj = document.getElementById('apollo');
const aresObj = document.getElementById('ares');
const aphroditeObj = document.getElementById('aphrodite');
const dionysusObj = document.getElementById('dionysus');

const displayObj = document.getElementById('blank');

zeusObj.addEventListener('click', function (evt) {
  console.log('zeus button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

poseidonObj.addEventListener('click', function (evt) {
  console.log('poseidon button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

athenaObj.addEventListener('click', function (evt) {
  console.log('athena button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

artemisObj.addEventListener('click', function (evt) {
  console.log('artemis button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

hephaestusObj.addEventListener('click', function (evt) {
  console.log('hephaestus button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

hermesObj.addEventListener('click', function (evt) {
  console.log('hermes button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

heraObj.addEventListener('click', function (evt) {
  console.log('hera button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

demeterObj.addEventListener('click', function (evt) {
  console.log('demeter button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

apolloObj.addEventListener('click', function (evt) {
  console.log('apollo button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

aresObj.addEventListener('click', function (evt) {
  console.log('ares button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

aphroditeObj.addEventListener('click', function (evt) {
  console.log('aphrodite button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

dionysusObj.addEventListener('click', function (evt) {
  console.log('dionysus button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

function userPicked(whichOne) {
  console.log('userPicked called: ' + whichOne);
  switch (whichOne) {
    case 'zeus':
      stopAllAudio();
      displayObj.src = './images/zeus.png';
      document.getElementById('olympianDates').innerHTML = 'Zeus: Dec. 22 - Jan. 19';
      document.getElementById('description').innerHTML = 'Zeus was the sky and thunder god in ancient Greek religion, who ruled as king of the gods of Mount Olympus.';
      sndZeusObj.src = `./sounds/sndZeus.mp3`;
      sndZeusObj.play();
      break;
    case 'poseidon':
      stopAllAudio();
      displayObj.src = './images/poseidon.png';
      document.getElementById('olympianDates').innerHTML = 'Poseidon: Nov. 22 - Dec. 21';
      document.getElementById('description').innerHTML = 'Poseidon was one of the Twelve Olympians in ancient Greek religion and myth, god of the sea, storms, earthquakes and horses.';
      sndPoseidonObj.src = `./sounds/sndPoseidon.mp3`;
      sndPoseidonObj.play();
      break;  
    case 'athena':
      stopAllAudio();
      displayObj.src = './images/athena.png';
      document.getElementById('olympianDates').innerHTML = 'Athena: Oct. 24 - Nov. 21';
      document.getElementById('description').innerHTML = 'Athena was an ancient Greek goddess associated with wisdom, handicraft, and warfare.';
      sndAthenaObj.src = `./sounds/sndAthena.mp3`;
      sndAthenaObj.play();
      break;
    case 'artemis':
      stopAllAudio();
      displayObj.src = './images/artemis.png';
      document.getElementById('olympianDates').innerHTML = 'Artemis: Sep. 23 - Oct. 23';
      document.getElementById('description').innerHTML = 'Artemis was the Greek goddess of the hunt, the wilderness, wild animals, the Moon, and chastity.';
      sndArtemisObj.src = `./sounds/sndArtemis.mp3`;
      sndArtemisObj.play();
      break;
    case 'hephaestus':
      stopAllAudio();
      displayObj.src = './images/hephaestus.png';
      document.getElementById('olympianDates').innerHTML = 'Hephaestus: Aug. 23 - Sep. 22';
      document.getElementById('description').innerHTML = 'Hephaestus was the Greek god of blacksmiths, metalworking, carpenters, craftsmen, artisans, sculptors, metallurgy, fire, and volcanoes.';
      sndHephaestusObj.src = `./sounds/sndHephaestus.mp3`;
      sndHephaestusObj.play();
      break;
    case 'hermes':
      stopAllAudio();
      displayObj.src = './images/hermes.png';
      document.getElementById('olympianDates').innerHTML = 'Hermes: Jul. 23 - Aug. 22';
      document.getElementById('description').innerHTML = 'Hermes was an Olympian deity and was considered the herald of the gods. He was also considered the protector of human heralds, travellers, thieves, merchants, and orators.';
      sndHermesObj.src = `./sounds/sndHermes.mp3`;
      sndHermesObj.play();
      break;
    case 'hera':
      stopAllAudio();
      displayObj.src = './images/hera.png';
      document.getElementById('olympianDates').innerHTML = 'Hera: Jun. 22 - Jul. 22';
      document.getElementById('description').innerHTML = 'Hera was the goddess of women, marriage, family and childbirth in ancient Greek religion and mythology, and was the sister and wife of Zeus.';
      sndHeraObj.src = `./sounds/sndHera.mp3`;
      sndHeraObj.play();
      break;
    case 'demeter':
      stopAllAudio();
      displayObj.src = './images/demeter.png';
      document.getElementById('olympianDates').innerHTML = 'Demeter: May 21 - Jun. 21';
      document.getElementById('description').innerHTML = 'Demeter was the Olympian goddess of the harvest and agriculture, presiding over grains and the fertility of the earth.';
      sndDemeterObj.src = `./sounds/sndDemeter.mp3`;
      sndDemeterObj.play();
      break;  
    case 'apollo':
      stopAllAudio();
      displayObj.src = './images/apollo.png';
      document.getElementById('olympianDates').innerHTML = 'Apollo: Apr. 20 - May 20';
      document.getElementById('description').innerHTML = 'Apollo was recognized as a ancient Greek god of archery, music and dance, truth and prophecy, healing and diseases, the Sun and light, poetry, and more.';
      sndApolloObj.src = `./sounds/sndApollo.mp3`;
      sndApolloObj.play();
      break;
    case 'ares':
      stopAllAudio();
      displayObj.src = './images/ares.png';
      document.getElementById('olympianDates').innerHTML = 'Ares: Mar. 21 - Apr. 19';
      document.getElementById('description').innerHTML = 'Ares was the Greek god of courage and war.';
      sndAresObj.src = `./sounds/sndAres.mp3`;
      sndAresObj.play();
      break;
    case 'aphrodite':
      stopAllAudio();
      displayObj.src = './images/aphrodite.png';
      document.getElementById('olympianDates').innerHTML = 'Aphrodite: Feb. 19 - Mar. 20';
      document.getElementById('description').innerHTML = 'Aphrodite was the ancient Greek goddess associated with love, beauty, pleasure, passion and procreation.';
      sndAphroditeObj.src = `./sounds/sndAphrodite.mp3`;
      sndAphroditeObj.play();
      break;
    case 'dionysus':
      stopAllAudio();
      displayObj.src = './images/dionysus.png';
      document.getElementById('olympianDates').innerHTML = 'Dionysus: Jan. 20 - Feb. 18';
      document.getElementById('description').innerHTML = 'Dionysus was the god of the grape-harvest, winemaking and wine, of fertility, orchards and fruit, vegetation, insanity, ritual madness, religious ecstasy, festivity and theatre.';
      sndDionysusObj.src = `./sounds/sndDionysus.mp3`;
      sndDionysusObj.play();
      break;
    default:
      displayObj.src = './images/olympus.png';
  }
}

const userSubmitObj = document.getElementById('submit');

userSubmitObj.addEventListener('click', function () {
  console.log('User submit button clicked.');
  const firstName = document.getElementById('name').value;
  console.log('firstName is: ' + firstName);
  const date = new Date(document.getElementById('date').value);
  console.log('date is: ' + date);
  
  let whichMonth = date.getUTCMonth();
  whichMonth++;
  console.log('whichMonth is: ' + whichMonth);

  let whichDayOfMonth = date.getUTCDate();
  console.log('whichDayOfMonth is: ' + whichDayOfMonth);

  let greekOlympian = "";

  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    greekOlympian = "zeus";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    greekOlympian = "poseidon";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    greekOlympian = "athena";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    greekOlympian = "artemis";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    greekOlympian = "hephaestus";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    greekOlympian = "hermes";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    greekOlympian = "hera";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    greekOlympian = "demeter";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    greekOlympian = "apollo";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    greekOlympian = "ares";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    greekOlympian = "aphrodite";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    greekOlympian = "dionysus";
  }

  console.log('greekOlympian is: ' + greekOlympian);

  userPicked(greekOlympian);

});

const helpModal = document.getElementById('helpModal');

const buttonHelpObj = document.getElementById('buttonHelp');
buttonHelpObj.addEventListener('click', function() {
  helpModal.hidden = !helpModal.hidden;
  console.log('Help button clicked.');
});

const closeHelpObj = document.getElementById('closeHelp');
closeHelpObj.addEventListener('click', function() {
  helpModal.hidden = !helpModal.hidden;
  console.log('Help modal closed.');
});

const sndZeusObj = document.getElementById('sndZeus');
const sndPoseidonObj = document.getElementById('sndPoseidon');
const sndAthenaObj = document.getElementById('sndAthena');
const sndArtemisObj = document.getElementById('sndArtemis');
const sndHephaestusObj = document.getElementById('sndHephaestus');
const sndHermesObj = document.getElementById('sndHermes');
const sndHeraObj = document.getElementById('sndHera');
const sndDemeterObj = document.getElementById('sndDemeter');
const sndApolloObj = document.getElementById('sndApollo');
const sndAresObj = document.getElementById('sndAres');
const sndAphroditeObj = document.getElementById('sndAphrodite');
const sndDionysusObj = document.getElementById('sndDionysus');

function stopAllAudio() {
  sndZeusObj.pause();
  sndZeusObj.currentTime = 0;

  sndPoseidonObj.pause();
  sndPoseidonObj.currentTime = 0;

  sndAthenaObj.pause();
  sndAthenaObj.currentTime = 0;

  sndArtemisObj.pause();
  sndArtemisObj.currentTime = 0;

  sndHephaestusObj.pause();
  sndHephaestusObj.currentTime = 0;

  sndHermesObj.pause();
  sndHermesObj.currentTime = 0;
  
  sndHeraObj.pause();
  sndHeraObj.currentTime = 0;

  sndDemeterObj.pause();
  sndDemeterObj.currentTime = 0;

  sndApolloObj.pause();
  sndApolloObj.currentTime = 0;

  sndAresObj.pause();
  sndAresObj.currentTime = 0;

  sndAphroditeObj.pause();
  sndAphroditeObj.currentTime = 0;

  sndDionysusObj.pause();
  sndDionysusObj.currentTime = 0;
}

const buttonMute = document.getElementById('buttonMute');
buttonMute.addEventListener('click', function() {
  stopAllAudio();
  console.log('All sounds have been stopped.');
});
