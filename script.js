const primaryBtn = document.querySelector('.btn.primary');
const secondaryBtn = document.querySelector('.btn.secondary');

function capturePage() {
  const target = document.querySelector('.page-shell');
  const title = document.querySelector('.decision-title');

  if (!target || !title) return;

  const originalText = title.textContent;
  title.textContent = 'Captura lista para enviar al creador de la página.';
  title.style.color = '#9c5638';

  html2canvas(target, {
    backgroundColor: '#f6f2ee',
    scale: 2,
    useCORS: true,
    allowTaint: true
  }).then((canvas) => {
    const link = document.createElement('a');
    link.download = 'diagnostico-nutricional-yeimi.png';
    link.href = canvas.toDataURL('image/png');
    link.click();

    title.textContent = originalText;
    title.style.color = '';
  }).catch(() => {
    title.textContent = originalText;
    title.style.color = '';
  });
}

if (primaryBtn) {
  primaryBtn.addEventListener('click', () => {
    const title = document.querySelector('.decision-title');
    if (title) {
      title.textContent = 'Perfecto. La receta ya está en camino.';
      title.style.color = '#9c5638';
    }
    capturePage();
  });
}

if (secondaryBtn) {
  secondaryBtn.addEventListener('click', () => {
    const title = document.querySelector('.decision-title');
    if (title) {
      title.textContent = 'También vale una segunda opinión: la receta sigue recomendada.';
      title.style.color = '#35563d';
    }
    capturePage();
  });
}
