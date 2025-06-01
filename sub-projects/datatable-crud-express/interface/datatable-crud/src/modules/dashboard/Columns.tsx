import type { ProductType } from "../../types/products";

export const columns = [
    { data: 'id_producto', title: 'ID' },
    { data: 'nombre', title: 'Nombre' },
    { data: 'descripcion', title: 'Descripción' },
    { data: 'precio', title: 'Precio', render: (data: number) => `$${data.toFixed(2)}` },
    { data: 'cantidad', title: 'Cantidad' },
    { data: 'creado_en', title: 'Creado En' },
    { 
        title: 'Acciones',
        data: null, 
        orderable: false,
        render: (data: any, type: any, row: ProductType) => {
            return `
                <button class="btn-edit" data-id="${row.id_producto}">✏️ Editar</button>
                <button class="btn-delete" data-id="${row.id_producto}">🗑️ Borrar</button>
            `;
        }
    }
];
