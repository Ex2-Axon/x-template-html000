async function loadComponents() {
  const elements = document.querySelectorAll('[data-include]');
  const promises = Array.from(elements).map(async element => {
    const src = element.getAttribute('data-include');
    if (!src) return;

    try {
      const response = await fetch(src);
      if (!response.ok) throw new Error(`Unable to load component: ${src}`);
      element.innerHTML = await response.text();
    } catch (error) {
      console.error(error);
      element.innerHTML = `<div class="component-error">ไม่สามารถโหลดส่วนประกอบ <strong>${src}</strong> ได้</div>`;
    }
  });

  await Promise.all(promises);
  // Trigger custom event after all components are loaded
  window.dispatchEvent(new Event('componentsLoaded'));
}

window.addEventListener('DOMContentLoaded', loadComponents);
