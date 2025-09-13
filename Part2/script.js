
document.addEventListener('DOMContentLoaded', () => {
  const plans = Array.from(document.querySelectorAll('.plan'));
  const buttons = Array.from(document.querySelectorAll('.plan .btn'));

  buttons.forEach(btn => {
    // Eğer button type belirtilmemişse, submit olmasını engelle
    if (!btn.hasAttribute('type')) btn.setAttribute('type', 'button');

    btn.addEventListener('click', (e) => {
      e.preventDefault(); // form submit olursa sayfa yenilenmesini önler

      // Hepsinden active'ı kaldır
      plans.forEach(p => p.classList.remove('active'));

      // Tıklanan butona en yakın .plan öğesini bul
      const plan = btn.closest('.plan');
      if (!plan) {
        console.warn('Bu butonun ebeveyni .plan değil.');
        return;
      }

      // Ve bu plana active ekle
      plan.classList.add('active');

      // Opsiyonel: hangi plan seçildiğini logla (debug için)
      console.log('Seçilen plan:', (plan.querySelector('h3') || {}).textContent || 'isim yok');
    });
  });
});

