import { useEffect, useState } from 'react';
import { Datatable } from './Datatable';
import { ModalComponent } from './ModalComponent';
import { columns } from './Columns';
import type { ProductType } from '../../types/products';
import './styles.css';

// Modal.setAppElement('#root');

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
                        precio: Number(product.precio), 
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
            [name]: value
        });
    };

    const parseFormData = (data: Partial<ProductType>): any => {
        return {
            ...data,
            precio: data.precio ? Number(data.precio) : 0,
            cantidad: data.cantidad ? Number(data.cantidad) : 0
        };
    };

    const handleSave = () => {
        if (!selectedProduct || !formData) return;

        const parsedData = parseFormData(formData);
        
        fetch(`http://localhost:5556/api/products?id=${selectedProduct.id_producto}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(parsedData)
        })
        .then(response => {
            if (!response.ok) throw new Error('Error al actualizar');
            return response.json();
        })
        .then(() => {
            const updatedData = data.map(product => 
                product.id_producto === parsedData.id_producto 
                    ? {
                        ...parsedData, 
                        precio: Number(parsedData.precio),
                        creado_en: new Date(parsedData.creado_en).toLocaleDateString()
                      } 
                    : product
            );
            
            setData(updatedData);
            setIsModalOpen(false);
        })
        .catch(error => {
            setApiError(`Error al actualizar el producto: ${error.message}`);
        });
    };

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
            
            <Datatable data={data} columns={columns}/>

            <ModalComponent
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                selectedProduct={selectedProduct}
                handleSave={handleSave}
                handleInputChange={handleInputChange}
                formData={formData}
            />
        </section>
    )
}