if (document.documentElement) {
  initialize();
}
else {
  window.addEventListener('DOMContentLoaded', initialize);
}

function initialize() {
  if (document.querySelector('.fxos-banner')) {
    // Already injected, abort.
    return;
  } else {
    var body = document.querySelector('body');
    var fxosBanner = document.createElement('div');
    fxosBanner.classList.add('fxos-banner');
    var bannerText = document.createElement('p');
    var closeBtn = document.createElement('button');

    fxosBanner.appendChild(bannerText);
    fxosBanner.appendChild(closeBtn);
    //body.appendChild(fxosBanner);
	body.insertBefore(fxosBanner, body.firstChild)

    closeBtn.textContent = 'X';
    bannerText.textContent = 'baaa maak. som nam naa.';

    closeBtn.onclick = function() {
      fxosBanner.parentNode.removeChild(fxosBanner);
    }
  }
}