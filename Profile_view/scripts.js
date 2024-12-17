const profiles = [
    { name: "Анна", age: 25, photo: "https://via.placeholder.com/400x300" },
    { name: "Иван", age: 30, photo: "https://via.placeholder.com/400x300/ff7f7f" },
    { name: "Мария", age: 27, photo: "https://via.placeholder.com/400x300/87CEEB" }
];

let currentIndex = 0;

// DOM элементы
const profilePhoto = document.querySelector('.profile-photo');
const profileName = document.querySelector('.profile-name');
const profileAge = document.querySelector('.profile-age');
const likeBtn = document.getElementById('like-btn');
const dislikeBtn = document.getElementById('dislike-btn');

// Обновление профиля
function renderProfile(index) {
    if (index < profiles.length) {
        profilePhoto.src = profiles[index].photo;
        profileName.textContent = profiles[index].name;
        profileAge.textContent = `${profiles[index].age} лет`;
    } else {
        alert('Анкеты закончились!');
        likeBtn.disabled = true;
        dislikeBtn.disabled = true;
    }
}

// Обработка нажатий
function handleAction(action) {
    console.log(`Действие: ${action}`);
    currentIndex++;
    renderProfile(currentIndex);
}

// Добавление слушателей событий
likeBtn.addEventListener('click', () => handleAction('like'));
dislikeBtn.addEventListener('click', () => handleAction('dislike'));

// Инициализация первого профиля
renderProfile(currentIndex);
