import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import DataTable from 'datatables.net-react';
import DataTablesCore from 'datatables.net-bs5';
import 'datatables.net-buttons-bs5';
import 'datatables.net-columncontrol-bs5';
import 'datatables.net-responsive-bs5';
import 'datatables.net-select-bs5';
import type { ProductType } from '../../types/products';
import './styles.css';

// Configuración básica para react-modal
Modal.setAppElement('#root');

DataTable.use(DataTablesCore);

export const Dashboard = () => {
    const [data, setData] = useState<Array<ProductType>>([]);
    const [apiError, setApiError] = useState<null | string>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
    const [formData, setFormData] = useState<Partial<ProductType>>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await fetch('http://localhost:5556/api/products');
                
                if (request.ok) {
                    const response = await request.json();
                    const processed_data = response.map((product: ProductType) => ({
                        ...product,
                        creado_en: new Date(product.creado_en).toLocaleDateString()
                    }));
                    setData(processed_data);
                } else {
                    const errorResponse = await request.json();
                    setApiError(errorResponse.message);
                }
            } catch (error) {
                setApiError('Error de conexión con el servidor');
            }
        };
        fetchData();
    }, []);

    const handleDelete = (id: number) => {
        if (confirm("¿Estás seguro de eliminar este producto?")) {
            fetch(`http://localhost:5556/api/products/${id}`, {
                method: 'DELETE',
            })
            .then((res) => res.json())
            .then(() => {
                setData(data.filter((product) => product.id_producto !== id));
            })
            .catch((err) => setApiError(`Error al eliminar: ${err}`));
        }
    };

    const handleEdit = (product: ProductType) => {
        setSelectedProduct(product);
        setFormData({
            id_producto: product.id_producto,
            nombre: product.nombre,
            descripcion: product.descripcion,
            precio: product.precio,
            cantidad: product.cantidad
        });
        setIsModalOpen(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'precio' || name === 'cantidad' ? Number(value) : value
        });
    };

    const handleSave = () => {
        if (!selectedProduct || !formData) return;

        fetch(`http://localhost:5556/api/products?id=${selectedProduct.id_producto}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) throw new Error('Error al actualizar');
            return response.json();
        })
        .then(updatedProduct => {
            // Actualizar el estado local con el producto actualizado
            setData(data.map(product => 
                product.id_producto === updatedProduct.id_producto 
                    ? {...updatedProduct, creado_en: new Date(updatedProduct.creado_en).toLocaleDateString()} 
                    : product
            ));
            setIsModalOpen(false);
        })
        .catch(error => {
            setApiError(`Error al actualizar el producto: ${error.message}`);
        });
    };

    const columns = [
        { data: 'id_producto', title: 'ID' },
        { data: 'nombre', title: 'Nombre' },
        { data: 'descripcion', title: 'Descripción' },
        { data: 'precio', title: 'Precio' },
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

    useEffect(() => {
        const table = document.querySelector('.display');
        
        const handleClick = (e: Event) => {
            const target = e.target as HTMLElement;
            
            if (target.classList.contains('btn-edit')) {
                const id = parseInt(target.getAttribute('data-id') || '0');
                const product = data.find(p => p.id_producto === id);
                if (product) handleEdit(product);
            }
            
            if (target.classList.contains('btn-delete')) {
                const id = parseInt(target.getAttribute('data-id') || '0');
                handleDelete(id);
            }
        };
        
        table?.addEventListener('click', handleClick);
        
        return () => {
            table?.removeEventListener('click', handleClick);
        };
    }, [data]);

    return (
        <section className='table-content'>
            <h1>Product's CRUD</h1>
            {apiError && <div className="alert alert-danger">{apiError}</div>}
            <br />
            
            <DataTable
                columns={columns}
                data={data}
                className="display"
                options={{
                    responsive: true,
                    select: true
                }}
            />
            
            {/* Modal de Edición */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Editar Producto"
                className="modal"
                overlayClassName="modal-overlay"
            >
                <div className="modal-content">
                    <h2>Editar Producto</h2>
                    
                    {selectedProduct && (
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleSave();
                        }}>
                            <div className="form-group">
                                <label>Nombre:</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre || ''}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label>Descripción:</label>
                                <input
                                    type="text"
                                    name="descripcion"
                                    value={formData.descripcion || ''}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label>Precio:</label>
                                <input
                                    type="number"
                                    name="precio"
                                    value={formData.precio || 0}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    min="0"
                                    step="0.01"
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label>Cantidad:</label>
                                <input
                                    type="number"
                                    name="cantidad"
                                    value={formData.cantidad || 0}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    min="0"
                                    required
                                />
                            </div>
                            
                            <div className="modal-buttons">
                                <button 
                                    type="button" 
                                    className="btn btn-secondary"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancelar
                                </button>
                                <button 
                                    type="submit" 
                                    className="btn btn-primary"
                                >
                                    Guardar Cambios
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </Modal>
        </section>
    )
}