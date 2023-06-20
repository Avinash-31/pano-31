// Add the following JavaScript code
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.getElementById('close-modal');

function openModal(imageUrl) {
    modalImage.src = imageUrl;
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}
