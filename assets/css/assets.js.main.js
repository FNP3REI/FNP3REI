// Marca o link ativo na navbar com base no arquivo atual
(function setActiveNav(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll('nav a[data-page]').forEach(a => {
    if (a.getAttribute('data-page') === path) a.classList.add('active');
  });
})();

// (Opcional) Exibe ano atual no footer
(function setYear(){
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
})();