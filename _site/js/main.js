$(function() {
  const d = new Date();
  const hours = d.getHours();
  const night = hours >= 19 || hours <= 7; // between 7pm and 7am
  const body = document.querySelector('body');
  const toggle = document.getElementById('toggle');
  const input = document.getElementById('switch');
  const logo_footer = document.getElementById('logo-footer');
  const logo_404 = document.getElementById('logo-404');

  if (night === true) {
    input.checked = true;
    body.classList.add('night');
  } else {
    if (logo_footer != null) {
      logo_footer.style.filter =
        'brightness(0) saturate(100%) invert(39%) sepia(99%) saturate(1722%) hue-rotate(195deg) brightness(90%) contrast(110%)';
    }
    if (logo_404 != null) {
      logo_404.style.filter =
        'brightness(0) saturate(100%) invert(39%) sepia(99%) saturate(1722%) hue-rotate(195deg) brightness(90%) contrast(110%)';
    }
  }

  toggle.addEventListener('click', function() {
    const isChecked = input.checked;
    if (isChecked) {
      body.classList.remove('night');
      logo_footer.style.filter =
        'brightness(0) saturate(100%) invert(39%) sepia(99%) saturate(1722%) hue-rotate(195deg) brightness(90%) contrast(110%)';
      logo_404.style.filter =
        'brightness(0) saturate(100%) invert(39%) sepia(99%) saturate(1722%) hue-rotate(195deg) brightness(90%) contrast(110%)';
    } else {
      body.classList.add('night');
      logo_footer.style.filter = 'drop-shadow(0px 0px 7px)';
      logo_404.style.filter = 'drop-shadow(0px 0px 7px)';
    }
  });

  const introHeight = document.querySelector('.intro').offsetHeight;
  const topButton = document.getElementById('top-button');
  const $topButton = $('#top-button');

  window.addEventListener(
    'scroll',
    function() {
      if (window.scrollY > introHeight) {
        $topButton.fadeIn(500);
      } else {
        $topButton.fadeOut(500);
      }
    },
    false
  );

  topButton.addEventListener('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  const hand = document.querySelector('.emoji.wave-hand');

  function waveOnLoad() {
    hand.classList.add('wave');
    setTimeout(function() {
      hand.classList.remove('wave');
    }, 2000);
  }

  setTimeout(function() {
    waveOnLoad();
  }, 1000);

  hand.addEventListener('mouseover', function() {
    hand.classList.add('wave');
  });

  hand.addEventListener('mouseout', function() {
    hand.classList.remove('wave');
  });

  window.sr = ScrollReveal({
    reset: false,
    duration: 600,
    easing: 'cubic-bezier(.694,0,.335,1)',
    scale: 1,
    viewFactor: 0.3,
  });

  sr.reveal('.background');
  sr.reveal('.education');
  sr.reveal('.skills');
  sr.reveal('.experience', { viewFactor: 0.2 });
  sr.reveal('.interests', { viewFactor: 0.125 });
  sr.reveal('.featured-projects', { viewFactor: 0.1 });
  sr.reveal('.ai-projects', { viewFactor: 0.05 });
  sr.reveal('.other-projects', { viewFactor: 0.05 });
});
