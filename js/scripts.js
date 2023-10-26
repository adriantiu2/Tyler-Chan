// JavaScript for opening and closing the modal
var modal = document.getElementById("imageModal");
var modalImage = document.getElementById("modalImage");
var closeModal = document.getElementById("closeModal");

// Function to open the modal with a clicked image
function openModal(imageSource) {
    modal.style.display = "flex"; // Changed to 'flex'
    modalImage.src = imageSource;

    // Allow clicking on the modal image to close it
    modalImage.onclick = closeModalFunction;
}

// Function to close the modal
function closeModalFunction() {
    modal.style.display = "none";
}

// Close the modal if the user clicks anywhere on the screen
window.onclick = function(event) {
    if (event.target == modal) {
        closeModalFunction();
    }
}

// Close the modal if the user clicks the close button
closeModal.onclick = closeModalFunction;
