interface CuentaBancaria {
    titular: string;
    saldo: number;
    retirar: (arg: number) => void;
    consignar: (arg: number) => void; 
}

type CuentaBancariaType = {
    titular: string
}