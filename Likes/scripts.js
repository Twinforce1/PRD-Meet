function unlockPhoto(photoId) {
    const photo = document.getElementById(`photo-${photoId}`);
    if (photo) {
        photo.classList.add('unblurred');
        const msg = photo.nextElementSibling.nextElementSibling;
        const btn = msg.nextElementSibling;
        msg.textContent = "Фото открыто!";
        btn.style.display = 'none';
    }
}