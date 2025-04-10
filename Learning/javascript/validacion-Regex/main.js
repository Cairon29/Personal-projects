let input = document.getElementById('input-email');
let icon =  document.getElementById('checked-icon');

const validateEmail = (email) => {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(email);
}

input.addEventListener('input', () => {
    if (validateEmail(input.value)) {
        icon.innerHTML = '✓';
        icon.classList.remove('isNotEmail')
        icon.classList.add('isEmail')
    } else {
        icon.innerHTML = '✕';
        icon.classList.remove('isEmail')
        icon.classList.add('isNotEmail')
    }
})

