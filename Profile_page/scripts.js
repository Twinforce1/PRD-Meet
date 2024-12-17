function saveProfile() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const bio = document.getElementById('bio').value;

    alert(`Профиль сохранен:\nИмя: ${name}\nВозраст: ${age}\nО себе: ${bio}`);
}

function subscribe() {
    alert("Подписка оформлена! Теперь у вас есть доступ ко всем функциям.");
}