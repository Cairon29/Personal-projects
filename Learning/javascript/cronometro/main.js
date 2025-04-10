let cajaSegundos = document.getElementById('segundos');
let cajaMinutos = document.getElementById('minutos');

let iniciarBtn = document.getElementById('iniciar-btn');
let reiniciarBtn = document.getElementById('reiniciar-btn');

let isActive = false;
let intervalId = null;

let minutos = 0;
let segundos = 0;

cajaSegundos.innerHTML = segundos.toString().padStart(2, '0')
cajaMinutos.innerHTML = minutos.toString().padStart(2, '0')
iniciarBtn.innerHTML = 'Iniciar'
reiniciarBtn.disabled = true;

const iniciarCronometro = () => {
    if (isActive) {
        reiniciarBtn.disabled = false;
        iniciarBtn.innerHTML = 'Pausar';

        intervalId = setInterval(() => {
            segundos++
            cajaSegundos.innerHTML = segundos.toString().padStart(2, '0')
            
            if (segundos === 60) {
                minutos++
                segundos = 0
    
                cajaSegundos.innerHTML = segundos.toString().padStart(2, '0')
                cajaMinutos.innerHTML = minutos.toString().padStart(2, '0')
            }

        }, 1000);

    } else {
        iniciarBtn.innerHTML = 'Iniciar';
        clearInterval(intervalId)
    }
}

reiniciarBtn.addEventListener('click', () => {
    minutos = 0;
    segundos = 0;
    cajaMinutos.innerHTML = minutos.toString().padStart(2, '0');
    cajaSegundos.innerHTML = segundos.toString().padStart(2, '0');

    clearInterval(intervalId);
    isActive = false;
    iniciarBtn.innerHTML = 'Iniciar';
    reiniciarBtn.disabled = true;
})

iniciarBtn.addEventListener('click', () => {
    isActive = !isActive
    iniciarCronometro();
})