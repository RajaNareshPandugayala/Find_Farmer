document.addEventListener('DOMContentLoaded', () => {

    // Step 3: JavaScript function to handle image upload and display
    const imageInput = document.getElementById("imageInput");
    const previewImage = document.getElementById("previewImage");
    const uploadButton = document.getElementById("uploadButton");

    function handleUploadButtonClick() {
        imageInput.click();
    }

    function handleFileInputChange(e) {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const newImageSrc = e.target.result;
                localStorage.setItem('newImageSrc', newImageSrc);

                previewImage.src = newImageSrc;

                const welcomePageImage = document.querySelector(".welcome_page_dp");
                if (welcomePageImage) {
                    welcomePageImage.src = newImageSrc;
                }
            };
            reader.readAsDataURL(file);
        }
    }

    // Event listeners
    uploadButton.addEventListener("click", handleUploadButtonClick);
    imageInput.addEventListener("change", handleFileInputChange);

    // Retrieve the image source from localStorage
    const newImageSrc = localStorage.getItem('newImageSrc');
    const welcomePageImage = document.querySelector(".welcome_page_dp");

    if (welcomePageImage && newImageSrc) {
        welcomePageImage.src = newImageSrc;
    }
});


function deleteImage() {
    // Remove the stored image source from localStorage
    localStorage.removeItem('newImageSrc');

    // Set the previewImage source back to the default image
    previewImage.src = "istockphoto-524582571-1024x1024.jpg"; // Set to your default image source
}
