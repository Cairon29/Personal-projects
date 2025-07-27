
-- SCRIPT DE CREACIÓN DE BASE DE DATOS: BUILDIFY PARA POSTGRESQL

-- Tabla: roles
DROP TABLE IF EXISTS roles CASCADE;
CREATE TABLE roles (
  id_rol SERIAL PRIMARY KEY,
  rol VARCHAR(100) NOT NULL
);

-- Tabla: estados
DROP TABLE IF EXISTS estados CASCADE;
CREATE TABLE estados (
  id_estado SERIAL PRIMARY KEY,
  estado VARCHAR(100) NOT NULL UNIQUE
);

-- Tabla: categorias
DROP TABLE IF EXISTS categorias CASCADE;
CREATE TABLE categorias (
  id_categoria SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL UNIQUE
);

-- Tabla: marcas
DROP TABLE IF EXISTS marcas CASCADE;
CREATE TABLE marcas (
  id_marca SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL UNIQUE
);

-- Tabla: usuarios
DROP TABLE IF EXISTS usuarios CASCADE;
CREATE TABLE usuarios (
  id_usuario SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  direccion VARCHAR(100) NOT NULL,
  telefono VARCHAR(15),
  password VARCHAR(256) NOT NULL,
  id_rol INTEGER REFERENCES roles(id_rol)
);

-- Tabla: productos
DROP TABLE IF EXISTS productos CASCADE;
CREATE TABLE productos (
  id_producto SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio NUMERIC(10,2) NOT NULL,
  stock INTEGER NOT NULL,
  id_categoria INTEGER NOT NULL REFERENCES categorias(id_categoria),
  id_marca INTEGER NOT NULL REFERENCES marcas(id_marca),
  descripcion TEXT
);

-- Tabla: carritos
DROP TABLE IF EXISTS carritos CASCADE;
CREATE TABLE carritos (
  id_carrito SERIAL PRIMARY KEY,
  id_usuario INTEGER UNIQUE REFERENCES usuarios(id_usuario) ON DELETE CASCADE
);

-- Tabla: items_carrito
DROP TABLE IF EXISTS items_carrito CASCADE;
CREATE TABLE items_carrito (
  id_carrito INTEGER REFERENCES carritos(id_carrito) ON DELETE CASCADE,
  id_producto INTEGER REFERENCES productos(id_producto) ON DELETE CASCADE,
  cantidad INTEGER NOT NULL,
  PRIMARY KEY (id_carrito, id_producto)
);

-- Tabla: favoritos
DROP TABLE IF EXISTS favoritos CASCADE;
CREATE TABLE favoritos (
  id_favorito SERIAL PRIMARY KEY,
  id_usuario INTEGER NOT NULL REFERENCES usuarios(id_usuario),
  id_producto INTEGER NOT NULL REFERENCES productos(id_producto) ON DELETE CASCADE
);

-- Tabla: imagenes_producto
DROP TABLE IF EXISTS imagenes_producto CASCADE;
CREATE TABLE imagenes_producto (
  id_imagen_producto SERIAL PRIMARY KEY,
  id_producto INTEGER NOT NULL REFERENCES productos(id_producto) ON DELETE CASCADE,
  nombre_archivo VARCHAR(255) NOT NULL,
  es_principal BOOLEAN NOT NULL DEFAULT FALSE
);

-- Tabla: pedidos
DROP TABLE IF EXISTS pedidos CASCADE;
CREATE TABLE pedidos (
  id_pedido SERIAL PRIMARY KEY,
  id_usuario INTEGER NOT NULL REFERENCES usuarios(id_usuario),
  fecha_pedido DATE NOT NULL,
  fecha_entrega DATE NOT NULL,
  valor_total NUMERIC(10,2) NOT NULL,
  id_estado INTEGER NOT NULL REFERENCES estados(id_estado)
);

-- Tabla: productos_pedidos
DROP TABLE IF EXISTS productos_pedidos CASCADE;
CREATE TABLE productos_pedidos (
  id_producto_pedido SERIAL PRIMARY KEY,
  id_pedido INTEGER NOT NULL REFERENCES pedidos(id_pedido),
  id_producto INTEGER NOT NULL REFERENCES productos(id_producto) ON DELETE CASCADE,
  cantidad INTEGER NOT NULL
);

-- Tabla: detalles_chasises
DROP TABLE IF EXISTS detalles_chasises CASCADE;
CREATE TABLE detalles_chasises (
  id_producto INTEGER PRIMARY KEY REFERENCES productos(id_producto) ON DELETE CASCADE,
  formato_soportado VARCHAR(50),
  material VARCHAR(50),
  alto_mm INTEGER,
  ancho_mm INTEGER,
  profundidad_mm INTEGER,
  peso_kg NUMERIC(5,2),
  bahias_5_25 INTEGER DEFAULT 0,
  bahias_3_5 INTEGER DEFAULT 0,
  slots_expansion INTEGER DEFAULT 0,
  puertos_usb2 INTEGER DEFAULT 0,
  puertos_usb3 INTEGER DEFAULT 0,
  puerto_usb_c INTEGER DEFAULT 0,
  ventana_lateral BOOLEAN DEFAULT FALSE,
  refrigeracion_incluye VARCHAR(100),
  rgb BOOLEAN DEFAULT FALSE
);

-- Tabla: detalles_fuentes_poder
DROP TABLE IF EXISTS detalles_fuentes_poder CASCADE;
CREATE TABLE detalles_fuentes_poder (
  id_producto INTEGER PRIMARY KEY REFERENCES productos(id_producto) ON DELETE CASCADE,
  potencia_w INTEGER NOT NULL,
  certificacion_80plus VARCHAR(10) CHECK (certificacion_80plus IN ('Bronze', 'Silver', 'Gold', 'Platinum', 'Titanium')),
  modularidad VARCHAR(20) CHECK (modularidad IN ('No modular', 'Semi-modular', 'Full modular')),
  tipo_formato VARCHAR(20),
  voltaje_12v_a NUMERIC(6,2),
  num_sata INTEGER DEFAULT 0,
  protecciones_ip VARCHAR(100),
  ventilador_mm INTEGER
);

-- Tabla: detalles_memorias_ram
DROP TABLE IF EXISTS detalles_memorias_ram CASCADE;
CREATE TABLE detalles_memorias_ram (
  id_producto INTEGER PRIMARY KEY REFERENCES productos(id_producto) ON DELETE CASCADE,
  capacidad_gb INTEGER NOT NULL,
  tipo_ram VARCHAR(10) CHECK (tipo_ram IN ('DDR3', 'DDR4', 'DDR5')) NOT NULL,
  velocidad_mhz INTEGER NOT NULL,
  voltaje_v NUMERIC(3,2),
  rgb BOOLEAN DEFAULT FALSE
);

-- Tabla: detalles_placas_base
DROP TABLE IF EXISTS detalles_placas_base CASCADE;
CREATE TABLE detalles_placas_base (
  id_producto INTEGER PRIMARY KEY REFERENCES productos(id_producto) ON DELETE CASCADE,
  socket VARCHAR(20) NOT NULL,
  chipset VARCHAR(50) NOT NULL,
  formato VARCHAR(20) CHECK (formato IN ('ATX','Micro-ATX','Mini-ITX','E-ATX')),
  num_slots_ram INTEGER NOT NULL,
  max_ram_gb INTEGER NOT NULL,
  pcie_x16_slots INTEGER DEFAULT 0,
  pcie_x8_slots INTEGER DEFAULT 0,
  pcie_x4_slots INTEGER DEFAULT 0,
  num_m2_slots INTEGER DEFAULT 0,
  num_sata_ports INTEGER DEFAULT 0,
  usb2_0_traseros INTEGER DEFAULT 0,
  usb3_0_traseros INTEGER DEFAULT 0,
  usb3_1_typeC_traseros INTEGER DEFAULT 0,
  lan_gbps NUMERIC(3,1),
  wifi_integrado BOOLEAN DEFAULT FALSE,
  bluetooth_integrado BOOLEAN DEFAULT FALSE,
  fases_vrm INTEGER,
  audio_chipset VARCHAR(50),
  rgb BOOLEAN DEFAULT FALSE
);

-- Tabla: detalles_procesadores
DROP TABLE IF EXISTS detalles_procesadores CASCADE;
CREATE TABLE detalles_procesadores (
  id_producto INTEGER PRIMARY KEY REFERENCES productos(id_producto) ON DELETE CASCADE,
  reloj_base_ghz NUMERIC(4,2) NOT NULL,
  reloj_boost_ghz NUMERIC(4,2),
  num_nucleos INTEGER NOT NULL,
  num_hilos INTEGER NOT NULL,
  tdp_w INTEGER,
  cache_l2_mb NUMERIC(5,2),
  cache_l3_mb NUMERIC(6,2),
  gpu_integrado VARCHAR(100)
);

-- Tabla: detalles_refrigeraciones
DROP TABLE IF EXISTS detalles_refrigeraciones CASCADE;
CREATE TABLE detalles_refrigeraciones (
  id_producto INTEGER PRIMARY KEY REFERENCES productos(id_producto) ON DELETE CASCADE,
  tipo_refrigeracion VARCHAR(10) CHECK (tipo_refrigeracion IN ('Aire', 'Líquida')) NOT NULL,
  altura_mm INTEGER,
  flujo_aire_cfm NUMERIC(6,2),
  nivel_ruido_db NUMERIC(5,2),
  socket_compatibles VARCHAR(100),
  radiador_mm VARCHAR(20),
  bombas_rpm INTEGER,
  conductos_material VARCHAR(50),
  rgb BOOLEAN DEFAULT FALSE
);

-- Tabla: detalles_tarjetas_graficas
DROP TABLE IF EXISTS detalles_tarjetas_graficas CASCADE;
CREATE TABLE detalles_tarjetas_graficas (
  id_producto INTEGER PRIMARY KEY REFERENCES productos(id_producto) ON DELETE CASCADE,
  memoria_gb INTEGER NOT NULL,
  tipo_memoria VARCHAR(20),
  bus_memoria_bits INTEGER,
  reloj_base_ghz NUMERIC(7,2),
  reloj_boost_ghz NUMERIC(7,2),
  tdp_w INTEGER,
  cuda_cores INTEGER,
  longitud_mm INTEGER,
  rgb BOOLEAN DEFAULT FALSE
);
