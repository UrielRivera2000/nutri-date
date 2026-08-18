const primaryBtn = document.querySelector('.btn.primary');
const secondaryBtn = document.querySelector('.btn.secondary');

if (primaryBtn) {
  primaryBtn.addEventListener('click', () => {
    const title = document.querySelector('.decision-title');
    if (title) {
      title.textContent = 'Perfecto. Ese detalle también merece una sonrisa.';
      title.style.color = '#9c5638';
    }
  });
}

if (secondaryBtn) {
  secondaryBtn.addEventListener('click', () => {
    const title = document.querySelector('.decision-title');
    if (title) {
      title.textContent = 'A veces la mejor opinión es la que deja una sonrisa.';
      title.style.color = '#35563d';
    }
  });
}
