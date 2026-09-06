/*
 * CONFIGURAÇÃO DA LOJA
 * Altere apenas os valores abaixo para atualizar a página.
 * O WhatsApp deve conter DDI + DDD + número, sem espaços ou símbolos.
 */
const contatos = {
  nome: 'Óticas LN',
  logo: 'images/LUNAI.jpg',
  frase: 'Seu olhar merece estilo.',
  whatsapp: '5511950823379',
  instagram: 'https://www.instagram.com/oticasln_/?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==',
};

document.addEventListener('DOMContentLoaded', () => {
  const links = {
    whatsapp: `https://wa.me/${contatos.whatsapp}`,
    instagram: contatos.instagram
  };

  // Atualiza textos e dados da página a partir da configuração acima.
  document.title = `${contatos.nome} | ${contatos.frase}`;
  document.getElementById('store-logo').src = contatos.logo;
  document.getElementById('store-logo').alt = `Logo ${contatos.nome}`;
  document.getElementById('store-name').textContent = contatos.nome;
  document.getElementById('store-tagline').textContent = contatos.frase;
  document.getElementById('footer-name').textContent = contatos.nome;
  document.getElementById('footer-year').textContent = new Date().getFullYear();

  document.querySelectorAll('[data-contact]').forEach((link) => {
    link.href = links[link.dataset.contact];
  });

  if (window.lucide) window.lucide.createIcons();
});
