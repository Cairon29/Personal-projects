let cuentaBancaria = {
    titular: 'Juan de la cruz albaran perez manrique ordoñes Vela',
    saldo: 2000000,
    retirar: (solicitud) => {
        if (solicitud > this.saldo) {
            console.log('no es posible realizar su retiro')
        } else {
            this.saldo -= solicitud
            console.log(`Retiro exitoso! su saldo actual es de \n ${this.saldo}`)
        }      
    },
    consignar: (dinero) => {
        this.saldo += dinero;
        console.log(`Consignacion exitosa! su saldo actual es de \n ${this.saldo}`)
    }

}

cuentaBancaria.consignar(2200)
console.log(cuentaBancaria.saldo)