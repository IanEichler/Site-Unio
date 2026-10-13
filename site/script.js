'use strict';

// Content lives here so project details and destinations can be updated together.
const projects = {
  supreme: {
    name: 'Suprême Villas & Gardens', type: 'CONDOMÍNIO RESIDENCIAL · RONDONÓPOLIS',
    image: 'assets/hero.webp', alt: 'Perspectiva ilustrativa de um ambiente do Suprême Villas & Gardens',
    description: 'Um condomínio que aproxima conforto, natureza e possibilidades de lazer. Um lugar para dar mais espaço aos seus dias, em Rondonópolis.',
    features: ['Lago ornamental e espaços de convivência', 'Piscinas e áreas de lazer para a família', 'Diferentes opções de planta'],
    source: 'https://unio-ci.com/new-page-2'
  },
  essence: {
    name: 'Essence Business & Living', type: 'BUSINESS & LIVING · RONDONÓPOLIS',
    image: 'assets/essence.webp', alt: 'Torre Essence Business & Living em Rondonópolis',
    description: 'Uma nova perspectiva para viver, trabalhar e se conectar à cidade. O Essence reúne uma proposta contemporânea de arquitetura e novas possibilidades para Rondonópolis.',
    features: ['Conceito Business & Living', 'Arquitetura contemporânea', 'Um novo marco na paisagem de Rondonópolis'],
    source: 'https://unio-ci.com/compre'
  },
  jacarandas: {
    name: 'Vale dos Jacarandás', type: 'CONDOMÍNIO HORIZONTAL · RONDONÓPOLIS',
    image: 'assets/jacarandas.webp', alt: 'Entrada do Vale dos Jacarandás',
    description: 'A tranquilidade de um condomínio horizontal com espaços para aproveitar o tempo em família. Casas e áreas de lazer pensadas para uma vida com mais conforto.',
    features: ['Condomínio com 36 casas', 'Piscinas, playground e salão de festas', 'Academia e campo de futebol'],
    source: 'https://unio-ci.com/compre'
  }
};

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const setMenu = open => {
  navigation.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
};
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
document.addEventListener('click', event => { if (!event.target.closest('.header')) setMenu(false); });
const desktop = window.matchMedia('(min-width: 801px)');
desktop.addEventListener('change', () => setMenu(false));

const dialog = document.querySelector('#project-dialog');
let activeProject;
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    if (!project) return;
    activeProject = project;
    document.querySelector('#dialog-title').textContent = project.name;
    document.querySelector('#dialog-type').textContent = project.type;
    document.querySelector('#dialog-description').textContent = project.description;
    const image = document.querySelector('#dialog-image');
    image.src = project.image;
    image.alt = project.alt;
    document.querySelector('#dialog-features').replaceChildren(...project.features.map(feature => {
      const item = document.createElement('li');
      item.textContent = feature;
      return item;
    }));
    document.querySelector('#dialog-source').href = project.source;
    dialog.showModal();
    document.body.classList.add('dialog-open');
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
document.querySelector('#dialog-contact').addEventListener('click', () => {
  document.querySelector('#interest').value = activeProject.name;
  dialog.close();
});

document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = `Interesse em ${data.get('interest')} — Contato pelo site UNIO`;
  const body = `Olá, equipe Unio!\n\nMeu nome é ${String(data.get('name')).trim()}.\nTenho interesse em: ${data.get('interest')}.\n\n${String(data.get('message')).trim()}\n\nMeu e-mail para retorno: ${data.get('email')}\n\nObrigado(a)!`;
  window.location.href = `mailto:geral@unio-ci.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#form-status').textContent = 'Mensagem preparada. Revise e envie no seu aplicativo de e-mail. Se ele não abrir, use o endereço geral@unio-ci.com.';
});

document.querySelector('#year').textContent = String(new Date().getFullYear());
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  document.body.classList.add('js-ready');
}
