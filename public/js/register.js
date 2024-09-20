function previewPassport() {
    const passportInput = document.getElementById('passport');
    const passportPreview = document.getElementById('passport-preview');

    const file = passportInput.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        passportPreview.src = reader.result;
        passportPreview.style.display = 'block';
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        passportPreview.src = "#";
        passportPreview.style.display = 'none';
    }
}
