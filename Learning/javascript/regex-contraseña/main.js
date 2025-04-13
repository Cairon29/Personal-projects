let input = document.getElementById('input-password');
let icon =  document.getElementById('checked-icon');

const validatePassword = (password) => {
    const regex  = /[A-Z]/;
    return regex.test(password);
}

input.addEventListener('input', () => {
    if (validatePassword(input.value)) {
        icon.innerHTML = '✓';
        icon.classList.remove('isNotPassword')
        icon.classList.add('isPassword')
    } else {
        icon.innerHTML = '✕';
        icon.classList.remove('isPassword')
        icon.classList.add('isNotPassword')
    }
})

