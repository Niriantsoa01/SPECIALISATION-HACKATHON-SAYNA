// Sélectionner les éléments de contenu
const programmationContent = document.getElementById('programmation-content');
const designContent = document.getElementById('design-content');
const bureautiqueContent = document.getElementById('bureautique-content');

// Sélectionner les éléments de liste
const programmationList = document.getElementById('defaultOpen');
const designList = document.querySelector('#design-list');
const bureautiqueList = document.querySelector('li:nth-child(3)');

// Ajouter une classe pour cacher les éléments de contenu
designContent.classList.add('hidden');
bureautiqueContent.classList.add('hidden');

// Ajouter un événement click sur les éléments de liste
programmationList.addEventListener('click', () => {
  programmationContent.classList.remove('hidden');
  designContent.classList.add('hidden');
  bureautiqueContent.classList.add('hidden');
  programmationList.classList.add('ligne');
  designList.classList.remove('ligne');
  bureautiqueList.classList.remove('ligne');
});

designList.addEventListener('click', () => {
  designContent.classList.remove('hidden');
  programmationContent.classList.add('hidden');
  bureautiqueContent.classList.add('hidden');
  designList.classList.add('ligne');
  programmationList.classList.remove('ligne');
  bureautiqueList.classList.remove('ligne');
});

bureautiqueList.addEventListener('click', () => {
  bureautiqueContent.classList.remove('hidden');
  programmationContent.classList.add('hidden');
  designContent.classList.add('hidden');
  bureautiqueList.classList.add('ligne');
  programmationList.classList.remove('ligne');
  designList.classList.remove('ligne');
});