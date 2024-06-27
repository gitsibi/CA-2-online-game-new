document.querySelector('.submit_button').addEventListener('click', function() {
    const name = document.querySelector('.name_box').value;
    const nickname = document.querySelector('.nickname_box').value;
    if (name === '' || nickname === '') {
        document.querySelector('.error_message').style.display = 'block';
    } else {
        document.querySelector('.error_message').style.display = 'none';
        window.location.href = 'game.html';
    }
});
