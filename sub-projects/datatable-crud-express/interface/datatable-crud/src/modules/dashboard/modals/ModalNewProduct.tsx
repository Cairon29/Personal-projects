import Modal from 'react-modal';
import type { NewProductType } from '../../../types/products';
import { GenericInput } from '../../../components/GenericInput';

Modal.setAppElement('#root');

type Props = {
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
    handleSaveNew: () => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formData: NewProductType
};

import React from 'react'

export const ModalNewProduct = ({ 
    isModalOpen, 
    setIsModalOpen, 
    handleSaveNew, 
    handleInputChange, 
    formData 
}: Props) => {
    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            contentLabel="Nuevo Producto"
            className="modal"
            overlayClassName="modal-overlay"        
        >
            <div className="modal-content">
                <h2>Crear Producto</h2>
                
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSaveNew();
                }}>
                    <GenericInput 
                        label="Nombre"
                        type="text"
                        name="nombre"
                        value={formData.nombre || ''}
                        onChange={handleInputChange}
                        required={true}
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
                        label="Cantidad:"
                        name="cantidad"
                        value={formData.cantidad || 0}
                        onChange={handleInputChange}
                        type="number"
                        min="0"
                        required
                    />
                    <GenericInput 
                        label="Precio"
                        type="number"
                        name="precio"
                        value={formData.precio ?? ''}
                        onChange={handleInputChange}
                        required={true}
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
            </div>
        </Modal>
    )
}
