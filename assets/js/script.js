let mobile = 'ontouchstart' in document.documentElement;

let switchAllowed = false;

function openSocial(type) {
  let url = 'about:blank';

  switch (type) {
    case 'discord':
      url = 'https://discordapp.com/users/411436556792889356';
      break;
    case 'github':
      url = 'https://github.com/SkriptError';
      break;
    case 'twitter':
      url = 'https://twitter.com/SkriptError';
      break;
  }

  window.open(url);
}

function startIntroTyping() {
  new TypeIt('#intro-text', {
    speed: 50,
  })
    .type('welcome...', { delay: 1200 })
    .delete(null, { delay: 1000 })
    .type(`${mobile ? 'tap' : 'This is a AI desgined to greet you before going into the actual site.'} so my Name is willam. and welcome to SkriptError"s aka Daniel.S.Norstrom or Full name: Daniel Steven Norstom"s Website Please state your name before Entering:`)
    .go

  setTimeout(function () {
    switchAllowed = true;
  }, 2500);
}

function typerStartTyping(typer) {
  typer.reset();

  let text = ['Web Developer...', 'Minecraft Client Launcher Developer...', 'Soon to be Java Dev!', 'Owner | KohiHQ', 'Co-Founder | GMGLLC'];

  text.forEach(function (language, index) {
    typer.move(null);
    typer.type(language, { delay: 1000 });
    typer.pause(1000);

    typer.delete(language.length, { delay: 1000 });
  });

  typer.go();
}

function startMainTyping() {
  let typer = new TypeIt('#subtext', {
    speed: 50,
    afterComplete: async () => {
      typerStartTyping(typer);
    },
  });

  typerStartTyping(typer);
}

function switchScreen() {
  document.title = 'SkriptError | ERROR 404';

  $('.intro').fadeOut(2000, function () {
    $('.bg-image').fadeIn(2000);
    $('.main').fadeIn(2000, function () {
      startMainTyping();
    });
  });

  ['background', 'rain'].forEach(function (audioName) {
    let fullPath = `assets/audio/${audioName}.mp3`;

    let audioElement = document.createElement('audio');
    audioElement.setAttribute('src', fullPath);
    audioElement.style.display = 'none';

    audioElement.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    });

    audioElement.play();
  });
}

document.addEventListener('keydown', function (e) {
  if (switchAllowed) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('touchstart', function (e) {
  if (switchAllowed && mobile) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  startIntroTyping();
});
