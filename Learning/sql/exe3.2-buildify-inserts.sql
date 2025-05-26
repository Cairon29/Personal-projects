
INSERT INTO roles (rol) VALUES ('usuario'), ('moderador'), ('administrador');

INSERT INTO estados (estado) VALUES ('Pendiente de pago'), ('Pendiente de envio'), ('Procesado'), ('Enviado'), ('Entregado'), ('Cancelado');

INSERT INTO usuarios (nombre, apellido, email, direccion, telefono, password, id_rol) 
VALUES 
    ('Jose David', 'Junco Navarro', 'josewjjunco@gmail.com', 'Carrera 18# 4A-46', '3160429080', '123456789', 3),
    ('Camila Andrea', 'Olaya Guevara', 'camilaolayaguevara@gmail.com', 'Cra. 86f #49a Sur-1 a 49a Sur-55', '3177744368', '123456789', 3),
    ('Dayana Andrea', 'Zuñiga Tumba', 'andreazutum@gmail.com', 'Cl. 52F Sur #24-20', '3202562695', '123456789', 3),
    ('Jeison Alejandro', 'Gutierrez Barajas', 'jeisonalejandrogutierrezbaraja@gmail.com', 'Calle 18 # 4-46', '3219026083', '123456789', 3),
    ('John Doe', 'Doe', 'johndoe@gmail', 'Calle 1 # 1-1', '3000000000', '123456789', 1),
    ('Jane Doe', 'Doe Second', 'janedoe@gmail', 'Calle 2 # 2-2', '3000000001', '123456789', 2);

INSERT INTO categorias (nombre) 
VALUES 
    ('procesadores'),
    ('memorias ram'),
    ('tarjetas graficas'),
    ('chasises'),
    ('refrigeraciones'),
    ('fuente de poder'),
    ('placas base');

INSERT INTO marcas (nombre) 
VALUES
    ('Intel'),
    ('AMD'),
    ('Corsair'),
    ('Kingston'),
    ('G.Skill'),
    ('Crucial'),
    ('Nvidia'),
    ('ASUS'),
    ('MSI'),
    ('Gigabyte'),
    ('Zotac'),
    ('EVGA'),
    ('NZXT'),
    ('Cooler Master'),
    ('Thermaltake'),
    ('Lian Li'),
    ('Noctua'),
    ('be quiet!'),
    ('Arctic'),
    ('DeepCool'),
    ('Seasonic'),
    ('ASRock');

START TRANSACTION;

-- ========================
-- 1) Procesadores (5)
-- ========================
-- 1.1 Intel Core i5-12600K
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'Intel Core i5-12600K',
  289.99, 50,
  (SELECT id_categoria FROM categorias WHERE nombre = 'procesadores'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'Intel'),
  'i5-12600K.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_procesadores
  (id_producto, reloj_base_ghz, reloj_boost_ghz, num_nucleos, num_hilos, tdp_w, socket, litografia_nm, cache_l2_mb, cache_l3_mb, gpu_integrado)
VALUES
  (@pid, 3.7, 4.9, 10, 16, 125, 'LGA1700', 10, 9.5, 20, 'Intel UHD 770');

-- 1.2 Intel Core i7-12700K
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'Intel Core i7-12700K',
  409.99, 30,
  (SELECT id_categoria FROM categorias WHERE nombre = 'procesadores'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'Intel'),
  'i7-12700K.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_procesadores
VALUES
  (@pid, 3.6, 5.0, 12, 20, 125, 'LGA1700', 10, 25, 'Intel UHD 770');

-- 1.3 AMD Ryzen 5 5600X
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'AMD Ryzen 5 5600X',
  199.99, 60,
  (SELECT id_categoria FROM categorias WHERE nombre = 'procesadores'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'AMD'),
  'ryzen5-5600x.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_procesadores
VALUES
  (@pid, 3.7, 4.6, 6, 12, 65, 'AM4', 7, 32, 'No');

-- 1.4 AMD Ryzen 7 5800X
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'AMD Ryzen 7 5800X',
  329.99, 40,
  (SELECT id_categoria FROM categorias WHERE nombre = 'procesadores'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'AMD'),
  'ryzen7-5800x.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_procesadores
VALUES
  (@pid, 3.8, 4.7, 8, 16, 105, 'AM4', 4, 32, 'No');

-- 1.5 Intel Core i9-12900K
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'Intel Core i9-12900K',
  589.99, 25,
  (SELECT id_categoria FROM categorias WHERE nombre = 'procesadores'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'Intel'),
  'i9-12900K.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_procesadores
VALUES
  (@pid, 3.2, 5.2, 16, 24, 125, 'LGA1700', 12, 30, 'Intel UHD 770');


-- ========================
-- 2) Memorias RAM (5)
-- ========================
-- 2.1 Corsair Vengeance LPX 16GB (2x8) DDR4-3200
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'Corsair Vengeance LPX 16GB (2x8) DDR4-3200',
  79.99, 100,
  (SELECT id_categoria FROM categorias WHERE nombre = 'memorias ram'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'Corsair'),
  'vengeance-16gb-3200.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_memorias_ram
  (id_producto, capacidad_gb, tipo_ram, velocidad_mhz, num_modulos, voltaje_v, cl_latencia, ecc, perfil_xmp)
VALUES
  (@pid, 16, 'DDR4', 3200, 2, 1.35, 'CL16', FALSE, TRUE);

-- 2.2 G.Skill Trident Z RGB 16GB (2x8) DDR4-3600
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'G.Skill Trident Z RGB 16GB (2x8) DDR4-3600',
  109.99, 80,
  (SELECT id_categoria FROM categorias WHERE nombre = 'memorias ram'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'G.Skill'),
  'tridentz-16gb-3600.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_memorias_ram
VALUES
  (@pid, 16, 'DDR4', 3600, 2, 1.35, 'CL18', FALSE, TRUE);

-- 2.3 Kingston HyperX Fury 16GB (2x8) DDR4-2400
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'Kingston HyperX Fury 16GB (2x8) DDR4-2400',
  69.99, 120,
  (SELECT id_categoria FROM categorias WHERE nombre = 'memorias ram'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'Kingston'),
  'hx-fury-16gb-2400.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_memorias_ram
VALUES
  (@pid, 16, 'DDR4', 2400, 2, 1.2, 'CL15', FALSE, FALSE);

-- 2.4 Crucial Ballistix 32GB (2x16) DDR4-3200
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'Crucial Ballistix 32GB (2x16) DDR4-3200',
  159.99, 70,
  (SELECT id_categoria FROM categorias WHERE nombre = 'memorias ram'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'Crucial'),
  'ballistix-32gb-3200.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_memorias_ram
VALUES
  (@pid, 32, 'DDR4', 3200, 2, 1.35, 'CL16', FALSE, TRUE);

-- 2.5 Corsair Dominator Platinum RGB 32GB (2x16) DDR5-5200
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'Corsair Dominator Platinum RGB 32GB (2x16) DDR5-5200',
  299.99, 40,
  (SELECT id_categoria FROM categorias WHERE nombre = 'memorias ram'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'Corsair'),
  'dominator-32gb-ddr5.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_memorias_ram
VALUES
  (@pid, 32, 'DDR5', 5200, 2, 1.25, 'CL38', FALSE, TRUE);


-- ========================
-- 3) Tarjetas gráficas (5)
-- ========================
-- 3.1 Nvidia GeForce RTX 3060
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'Nvidia GeForce RTX 3060',
  329.99, 60,
  (SELECT id_categoria FROM categorias WHERE nombre = 'tarjetas graficas'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'Nvidia'),
  'rtx3060.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_tarjetas_graficas
  (id_producto, chipset, memoria_gb, tipo_memoria, bus_memoria_bits,
   reloj_base_ghz, reloj_boost_ghz, tdp_w, pcie_version, cuda_cores,
   long_mm, altura_mm, espesor_slots, conector_6pin, conector_8pin, sli_xfire_soporte)
VALUES
  (@pid, 'GA106', 12, 'GDDR6', 192, 1.32, 1.78, 170, 'PCIe 4.0', 3584, 242, 112, 2.0, 0, 1, FALSE);

-- 3.2 AMD Radeon RX 6700 XT
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'AMD Radeon RX 6700 XT',
  479.99, 45,
  (SELECT id_categoria FROM categorias WHERE nombre = 'tarjetas graficas'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'AMD'),
  'rx6700xt.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_tarjetas_graficas
VALUES
  (@pid, 'Navi 22', 12, 'GDDR6', 192, 2.32, 2.58, 230, 'PCIe 4.0', NULL, 267, 120, 2.5, 0, 1, FALSE);

-- 3.3 ASUS ROG Strix RTX 3080
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'ASUS ROG Strix RTX 3080',
  699.99, 30,
  (SELECT id_categoria FROM categorias WHERE nombre = 'tarjetas graficas'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'ASUS'),
  'strix-3080.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_tarjetas_graficas
VALUES
  (@pid, 'GA102', 10, 'GDDR6X', 320, 1.44, 1.71, 320, 'PCIe 4.0', 8704, 318, 137, 2.7, 0, 2, FALSE);

-- 3.4 MSI Ventus RTX 3070
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'MSI Ventus RTX 3070',
  499.99, 35,
  (SELECT id_categoria FROM categorias WHERE nombre = 'tarjetas graficas'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'MSI'),
  'ventus-3070.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_tarjetas_graficas
VALUES
  (@pid, 'GA104', 8, 'GDDR6', 256, 1.50, 1.73, 220, 'PCIe 4.0', 5888, 242, 112, 2.0, 0, 2, FALSE);

-- 3.5 Gigabyte AORUS RX 6800
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'Gigabyte AORUS RX 6800',
  579.99, 25,
  (SELECT id_categoria FROM categorias WHERE nombre = 'tarjetas graficas'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'Gigabyte'),
  'aorus-rx6800.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_tarjetas_graficas
VALUES
  (@pid, 'Navi 21', 16, 'GDDR6', 256, 1.70, 2.10, 250, 'PCIe 4.0', NULL, 300, 125, 2.8, 0, 2, FALSE);


-- ========================
-- 4) Chasises (5)
-- ========================
-- 4.1 NZXT H510
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'NZXT H510',
  69.99, 80,
  (SELECT id_categoria FROM categorias WHERE nombre = 'chasises'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'NZXT'),
  'h510.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_chasises
  (id_producto, formato_soportado, material, alto_mm, ancho_mm, profundidad_mm, peso_kg,
   bahias_5_25, bahias_3_5, slots_expansion, puertos_usb2, puertos_usb3, puerto_usb_c,
   ventana_lateral, refrigeracion_incluye)
VALUES
  (@pid, 'ATX', 'Acero/Templado', 460, 210, 428, 6.8, 2, 2, 2, 2, 1, TRUE, '2×120mm fans');

-- 4.2 Cooler Master MasterBox NR600
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'Cooler Master MasterBox NR600',
  79.99, 60,
  (SELECT id_categoria FROM categorias WHERE nombre = 'chasises'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'Cooler Master'),
  'nr600.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_chasises
VALUES
  (@pid, 'ATX/Micro-ATX', 'Acero', 478, 209, 473, 7.2, 2, 2, 7, 0, 2, 0, FALSE, '—');

-- 4.3 Thermaltake Core P3
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'Thermaltake Core P3',
  129.99, 40,
  (SELECT id_categoria FROM categorias WHERE nombre = 'chasises'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'Thermaltake'),
  'core-p3.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_chasises
VALUES
  (@pid, 'Open Frame ATX', 'Acero/Templado', 589, 343, 450, 13.3, 2, 2, 8, 0, 2, 0, TRUE, 'No fans');

-- 4.4 Corsair 4000D Airflow
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'Corsair 4000D Airflow',
  94.99, 70,
  (SELECT id_categoria FROM categorias WHERE nombre = 'chasises'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'Corsair'),
  '4000d.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_chasises
VALUES
  (@pid, 'ATX', 'Acero/Templado', 453, 230, 466, 8.6, 2, 3, 7, 0, 2, 1, TRUE, '2×120mm fans');

-- 4.5 Lian Li PC-O11 Dynamic
INSERT INTOproductos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'Lian Li PC-O11 Dynamic',
  139.99, 50,
  (SELECT id_categoria FROM categorias WHERE nombre = 'chasises'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'Lian Li'),
  'pc-o11.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_chasises
VALUES
  (@pid, 'ATX/Micro-ATX', 'Aluminio/Templado', 445, 272, 445, 9.9, 2, 3, 8, 0, 2, 1, TRUE, 'No fans');


-- ========================
-- 5) Refrigeraciones (5)
-- ========================
-- 5.1 Noctua NH-D15
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'Noctua NH-D15',
  89.99, 50,
  (SELECT id_categoria FROM categorias WHERE nombre = 'refrigeraciones'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'Noctua'),
  'nh-d15.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_refrigeraciones
  (id_producto, tipo_refrigeracion, altura_mm, ventilador_mm, flujo_aire_cfm, nivel_ruido_db,
   socket_compatibles, radiador_mm, bombas_rpm, conductos_material, peso_kg)
VALUES
  (@pid, 'Aire', 165, 140, 82.5, 24.6, 'AM4,LGA1151,LGA1200', NULL, NULL, 'Cobre', 1.32);

-- 5.2 Corsair H100i RGB Platinum
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'Corsair H100i RGB Platinum',
  159.99, 40,
  (SELECT id_categoria FROM categorias WHERE nombre = 'refrigeraciones'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'Corsair'),
  'h100i.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_refrigeraciones
VALUES
  (@pid, 'Líquida', NULL, 120, 75.0, 36.0, 'AM4,LGA1200', '240x120', 3000, 'Cobre', 1.22);

-- 5.3 NZXT Kraken X63
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'NZXT Kraken X63',
  159.99, 45,
  (SELECT id_categoria FROM categorias WHERE nombre = 'refrigeraciones'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'NZXT'),
  'kraken-x63.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_refrigeraciones
VALUES
  (@pid, 'Líquida', NULL, 140, 73.11, 21.0, 'AM4,LGA1700', '280x140', 2200, 'Aluminio', 1.54);

-- 5.4 be quiet! Dark Rock Pro 4
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'be quiet! Dark Rock Pro 4',
  89.99, 35,
  (SELECT id_categoria FROM categorias WHERE nombre = 'refrigeraciones'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'be quiet!'),
  'darkrock-pro4.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_refrigeraciones
VALUES
  (@pid, 'Aire', 162.8, 120, 82.8, 24.3, 'LGA1151,LGA1200,AM4', NULL, NULL, 'Cobre', 1.1);

-- 5.5 DeepCool Gammaxx 400
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'DeepCool Gammaxx 400',
  29.99, 70,
  (SELECT id_categoria FROM categorias WHERE nombre = 'refrigeraciones'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'DeepCool'),
  'gammaxx-400.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_refrigeraciones
VALUES
  (@pid, 'Aire', 154.5, 120, 63.5, 27.8, 'LGA1151,LGA1200,AM4', NULL, NULL, 'Aluminio', 0.7);


-- ========================
-- 6) Fuente de poder (5)
-- ========================
-- 6.1 Seasonic Focus GX-650
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'Seasonic Focus GX-650',
  119.99, 60,
  (SELECT id_categoria FROM categorias WHERE nombre = 'fuente de poder'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'Seasonic'),
  'focus-gx-650.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_fuentes_poder
  (id_producto, potencia_w, certificacion_80plus, modularidad, tipo_formato,
   voltaje_12v_a, num_conectores_24pin, num_conectores_8pin, num_sata, num_molex,
   protecciones_ip, ventilador_mm, ruido_max_db)
VALUES
  (@pid, 650, 'Gold', 'Full modular', 'ATX', 54.0, 1, 2, 6, 2, 'OVP,UVP,OPP,SCP', 120, 20.0);

-- 6.2 Corsair RM750x
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'Corsair RM750x',
  129.99, 50,
  (SELECT id_categoria FROM categorias WHERE nombre = 'fuente de poder'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'Corsair'),
  'rm750x.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_fuentes_poder
VALUES
  (@pid, 750, 'Gold', 'Full modular', 'ATX', 62.0, 1, 2, 8, 2, 'OVP,UVP,OPP,SCP,OTP', 135, 18.5);

-- 6.3 EVGA 600 BR
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'EVGA 600 BR',
  59.99, 80,
  (SELECT id_categoria FROM categorias WHERE nombre = 'fuente de poder'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'EVGA'),
  '600-br.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_fuentes_poder
VALUES
  (@pid, 600, 'Bronze', 'No modular', 'ATX', 48.0, 1, 1, 4, 2, 'OVP,UVP,OPP,SCP', 120, 22.0);

-- 6.4 Thermaltake Toughpower GF1 850W
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'Thermaltake Toughpower GF1 850W',
  139.99, 40,
  (SELECT id_categoria FROM categorias WHERE nombre = 'fuente de poder'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'Thermaltake'),
  'toughpower-850w.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_fuentes_poder
VALUES
  (@pid, 850, 'Gold', 'Full modular', 'ATX', 70.0, 1, 2, 8, 2, 'OVP,UVP,OPP,SCP,OTP', 140, 19.0);

-- 6.5 Cooler Master MWE Gold 650
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'Cooler Master MWE Gold 650',
  89.99, 70,
  (SELECT id_categoria FROM categorias WHERE nombre = 'fuente de poder'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'Cooler Master'),
  'mwe-gold-650.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_fuentes_poder
VALUES
  (@pid, 650, 'Gold', 'Semi-modular', 'ATX', 54.0, 1, 1, 6, 2, 'OVP,UVP,OPP,SCP', 120, 21.0);


-- ========================
-- 7) Placas base (5)
-- ========================
-- 7.1 ASUS ROG Strix Z690-E
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'ASUS ROG Strix Z690-E',
  379.99, 30,
  (SELECT id_categoria FROM categorias WHERE nombre = 'placas base'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'ASUS'),
  'strix-z690e.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_placas_base
  (id_producto, socket, chipset, formato, num_slots_ram, max_ram_gb,
   pcie_x16_slots, pcie_x8_slots, pcie_x4_slots, num_m2_slots, num_sata_ports,
   usb2_0_traseros, usb3_0_traseros, usb3_1_typeC_traseros, lan_gbps,
   wifi_integrado, bluetooth_integrado, fases_vrm, audio_chipset)
VALUES
  (@pid, 'LGA1700', 'Z690', 'ATX', 4, 128, 2, 0, 1, 3, 6, 2, 4, 1, 2.5, TRUE, TRUE, 16, 'SupremeFX');

-- 7.2 MSI MAG B550 Tomahawk
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'MSI MAG B550 Tomahawk',
  179.99, 45,
  (SELECT id_categoria FROM categorias WHERE nombre = 'placas base'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'MSI'),
  'b550-tomahawk.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_placas_base
VALUES
  (@pid, 'AM4', 'B550', 'ATX', 4, 128, 2, 0, 1, 2, 6, 2, 2, 1, 2.5, FALSE, FALSE, 12, 'Realtek ALC892');

-- 7.3 Gigabyte X570 AORUS Elite
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'Gigabyte X570 AORUS Elite',
  199.99, 40,
  (SELECT id_categoria FROM categorias WHERE nombre = 'placas base'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'Gigabyte'),
  'x570-aorus.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_placas_base
VALUES
  (@pid, 'AM4', 'X570', 'ATX', 4, 128, 3, 0, 1, 2, 6, 2, 2, 1, 2.5, FALSE, FALSE, 14, 'Realtek ALC1220');

-- 7.4 ASRock B660M Pro RS
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'ASRock B660M Pro RS',
  129.99, 50,
  (SELECT id_categoria FROM categorias WHERE nombre = 'placas base'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'ASRock'),
  'b660m-pro.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_placas_base
VALUES
  (@pid, 'LGA1700', 'B660', 'Micro-ATX', 4, 128, 1, 0, 1, 1, 6, 2, 2, 1, 1.0, FALSE, FALSE, 10, 'Realtek ALC887');

-- 7.5 MSI MEG Z690 Unify
INSERT INTO productos (nombre, precio, stock, id_categoria, id_marca, imagen)
VALUES (
  'MSI MEG Z690 Unify',
  409.99, 20,
  (SELECT id_categoria FROM categorias WHERE nombre = 'placas base'),
  (SELECT id_marca     FROM marcas      WHERE nombre = 'MSI'),
  'meg-z690-unify.jpg'
);
SET @pid = LAST_INSERT_ID();
INSERT INTO detalles_placas_base
VALUES
  (@pid, 'LGA1700', 'Z690', 'E-ATX', 4, 128, 3, 0, 2, 4, 8, 2, 6, 2, 2.5, TRUE, TRUE, 20, 'Realtek ALC4080');

COMMIT;
