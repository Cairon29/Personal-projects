import Modal from 'react-modal';
import type { ProductType } from '../../../types/products';
import { GenericInput } from '../../../components/GenericInput';

Modal.setAppElement('#root');


type Props = {
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
    selectedProduct: ProductType | null;
    handleSaveEdit: () => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formData: Partial<ProductType>;
}

export const ModalComponent = ({ 
        isModalOpen, 
        setIsModalOpen, 
        selectedProduct, 
        handleSaveEdit, 
        handleInputChange, 
        formData 
    }: Props) => {
    return (
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
                        handleSaveEdit();
                    }}>
                        <GenericInput
                            label="Nombre:"
                            name="nombre"
                            value={formData.nombre || ''}
                            onChange={handleInputChange}
                            type="text"
                            required
                        />
                        <GenericInput
                            label="Descripción:"
                            name="descripcion"
                            value={formData.descripcion || ''}
                            onChange={handleInputChange}
                            type="text"
                            required
                        />
                        <GenericInput
                            label="Precio:"
                            name="precio"
                            value={formData.precio || 0}
                            onChange={handleInputChange}
                            type="number"
                            min="0"
                            step="0.01"
                            required
                        />
                        <GenericInput
                            label="Cantidad:"
                            name="cantidad"
                            value={formData.cantidad || 0}
                            onChange={handleInputChange}
                            type="number"
                            min="0"
                            required
                        />
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
    )
}
