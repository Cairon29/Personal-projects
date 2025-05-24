DROP DATABASE IF EXISTS BUILDIFY;
CREATE DATABASE BUILDIFY;
USE BUILDIFY;

CREATE TABLE productos (
    id_producto INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL,
    id_categoria INT NOT NULL,
    id_marca INT NOT NULL,
    imagen VARCHAR(100)
);

CREATE TABLE categorias (
	id_categoria INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE marcas (
    id_marca INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);


-- Add a foreign key

ALTER TABLE productos
ADD CONSTRAINT fk_categoria 
FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria);

ALTER TABLE productos
ADD CONSTRAINT fk_marca
FOREIGN KEY (id_marca) REFERENCES marcas(id_marca);

CREATE TABLE marcas_categorias (
    id_marca_categoria INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_marca INT NOT NULL,
    id_categoria INT NOT NULL,
    FOREIGN KEY (id_marca) REFERENCES marcas(id_marca),
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);

CREATE TABLE roles (
    id_rol INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    rol VARCHAR(100) NOT NULL
)

CREATE TABLE usuarios (
    id_usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    telefono INT NOT NULL,
    password VARCHAR(100) NOT NULL,
    id_rol int,

    FOREIGN KEY (id_rol) REFERENCES roles(id_rol),
 
    UNIQUE(email)
);

CREATE TABLE favoritos (
    id_favorito INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_usuario int NOT NULL,
    id_producto INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

CREATE TABLE pedidos (
    id_pedido INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    fecha_pedido DATE NOT NULL,
    fecha_entrega DATE NOT NULL,
    valor_total DECIMAL(10,2) NOT NULL,
    id_estado INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE estados(
    id_estado INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- ADD constraint to pedidos

ALTER TABLE pedidos
ADD CONSTRAINT fk_estado_id
FOREIGN KEY (id_estado) REFERENCES estados(id_estado);

CREATE TABLE productos_pedidos (
    id_producto_pedido INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

CREATE TABLE reviews (
    id_review INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_producto INT NOT NULL,
    id_usuario INT NOT NULL,
    estrellas INT NOT NULL,
    comentario TEXT,
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    CHECK (estrellas >= 1 AND estrellas <= 5)
);