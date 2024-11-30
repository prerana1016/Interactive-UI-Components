// Modal Functionality
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const openModal = document.getElementById('openModal');

openModal.addEventListener('click', () => {
    modalOverlay.classList.remove('hidden');
    modalOverlay.classList.add('visible');
});

closeModal.addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
    modalOverlay.classList.remove('visible');
});

window.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.add('hidden');
        modalOverlay.classList.remove('visible');
    }
});

// Dropdown Functionality
const dropdownTrigger = document.getElementById('dropdownTrigger');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownTrigger.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
    dropdownMenu.classList.toggle('visible');
});

window.addEventListener('click', (e) => {
    if (!dropdownTrigger.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.add('hidden');
        dropdownMenu.classList.remove('visible');
    }
});
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modalOverlay.classList.add('hidden');
        modalOverlay.classList.remove('visible');
    }
});
