document.querySelectorAll('.image').forEach(image => {
    image.addEventListener('click', function() {
        // Якщо картинка вже активна, зменшуємо її
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            const infoId = this.getAttribute('data-info');
            const info = document.getElementById(infoId);
            info.classList.remove('active');
        } else {
            // Знімаємо класи "active" з усіх картинок і текстів
            document.querySelectorAll('.image').forEach(img => img.classList.remove('active'));
            document.querySelectorAll('.info-text').forEach(info => info.classList.remove('active'));

            // Знаходимо відповідний елемент з текстом
            const infoId = this.getAttribute('data-info');
            const info = document.getElementById(infoId);

            // Додаємо клас тільки до вибраної картинки і відповідного тексту
            this.classList.add('active');
            info.classList.add('active');
        }
    });
});
