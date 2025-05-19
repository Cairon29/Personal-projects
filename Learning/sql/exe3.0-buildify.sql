DROP DATABASE IF EXISTS BUILDIFY;
CREATE DATABASE BUILDIFY;
USE BUILDIFY;

CREATE TABLE productos (
    id_producto INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL.
    categoria_id INT NOT NULL,
    marca_id INT NOT NULL
);

CREATE TABLE categorias (
    id_categoria INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE marcas (
    marca_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);


-- Add a foreign key

ALTER TABLE productos
ADD CONSTRAINT fk_categoria 
FOREIGN KEY (categoria_id) REFERENCES marcas(marca_id);

ALTER TABLE productos
ADD CONSTRAINT fk_marca
FOREIGN KEY (marca_id) REFERENCES marcas(marca_id);

CREATE TABLE marcas_categorias (
    marca_categoria_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    marca_id INT NOT NULL,
    categoria_id INT NOT NULL,
    FOREIGN KEY (marca_id) REFERENCES marcas(marca_id),
    FOREIGN KEY (categoria_id) REFERENCES categorias(categoria_id)
)

CREATE TABLE usuarios (
    id_usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    telefono int(100) NOT NULL,
    password VARCHAR(100) NOT NULL
    admin BOOLEAN not NULL,
    UNIQUE(email)
);

CREATE TABLE favoritos (
    favoritos_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_usuario int NOT NULL,
    id_producto INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

CREATE TABLE pedidos (
    pedido_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    fecha_pedido DATE NOT NULL,
    fecha_entrega DATE NOT NULL,
    valor_total DECIMAL(10,2) NOT NULL,
    id_estado INT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id_usuario)
);

CREATE TABLE estados(
    estado_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- ADD constraint to pedidos

ALTER TABLE pedidos
ADD CONSTRAINT fk_estado_id
FOREIGN KEY (id_estado) REFERENCES estados(estado_id);

CREATE TABLE productos_pedidos (
    producto_pedido_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT NOT NULL,
    producto_id INT NOT NULL,
    cantidad INT NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(pedido_id),
    FOREIGN KEY (producto_id) REFERENCES productos(producto_id)
);

CREATE TABLE reviews (
    review_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    producto_id INT NOT NULL,
    usuario_id INT NOT NULL,
    estrellas INT NOT NULL,
    comentario TEXT,
    FOREIGN KEY (producto_id) REFERENCES productos(producto_id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id_usuario),
    CHECK (estrellas >= 1 AND estrellas <= 5)
);