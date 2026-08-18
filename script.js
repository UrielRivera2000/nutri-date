const primaryBtn = document.querySelector('.btn.primary');
const secondaryBtn = document.querySelector('.btn.secondary');

if (primaryBtn) {
  primaryBtn.addEventListener('click', () => {
    const title = document.querySelector('.decision-title');
    if (title) {
      title.textContent = 'Perfecto. La receta ya está en camino.';
      title.style.color = '#9c5638';
    }
  });
}

if (secondaryBtn) {
  secondaryBtn.addEventListener('click', () => {
    const title = document.querySelector('.decision-title');
    if (title) {
      title.textContent = 'También vale otra opinión: la receta sigue recomendada.';
      title.style.color = '#35563d';
    }
  });
}
