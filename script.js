
// Basic site interactions: modal, counter, scroll, year
document.getElementById('year').innerText = new Date().getFullYear();

function scrollToSection(id){ document.getElementById(id).scrollIntoView({behavior:'smooth'}); }

function openDonate(){
  const modal = document.getElementById('donateModal');
  modal.setAttribute('aria-hidden', 'false');
  // update pix key if available
  const pixKey = document.getElementById('pix-key').innerText;
  document.getElementById('modal-pix-key').innerText = pixKey;
}

function closeDonate(){
  const modal = document.getElementById('donateModal');
  modal.setAttribute('aria-hidden', 'true');
}

// Simple counter demo (static). Replace with dynamic server updates later.
let current = 0;
function updateCounter(value){
  current = value;
  document.getElementById('meta-value').innerText = 'R$ ' + current.toLocaleString('pt-BR');
}
// Demo: simulate donations arriving
setTimeout(()=>updateCounter(1250), 1200);
setTimeout(()=>updateCounter(4320), 4000);
setTimeout(()=>updateCounter(10230), 9000);
