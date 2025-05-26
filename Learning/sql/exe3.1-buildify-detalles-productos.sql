/*  INSERT COMMANDS */


CREATE TABLE detalles_procesadores (
  id_producto       INT           PRIMARY KEY,
  reloj_base_ghz    DECIMAL(4,2)  NOT NULL,
  reloj_boost_ghz   DECIMAL(4,2),
  num_nucleos       INT           NOT NULL,
  num_hilos         INT           NOT NULL,
  tdp_w             INT,
  socket            VARCHAR(20),
  litografia_nm     INT,
  cache_l2_mb       DECIMAL(5,2),
  cache_l3_mb       DECIMAL(6,2),
  gpu_integrado     VARCHAR(100),
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

-- 2. Detalles de Memorias RAM
CREATE TABLE detalles_memorias_ram (
  id_producto       INT           PRIMARY KEY,
  capacidad_gb      INT           NOT NULL,
  tipo_ram          ENUM('DDR3','DDR4','DDR5') NOT NULL,
  velocidad_mhz     INT           NOT NULL,
  num_modulos       INT           NOT NULL,
  voltaje_v         DECIMAL(3,2),
  cl_latencia       VARCHAR(10),
  ecc               BOOLEAN       DEFAULT FALSE,
  perfil_xmp        BOOLEAN       DEFAULT FALSE,
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

-- 3. Detalles de Tarjetas Gráficas
CREATE TABLE detalles_tarjetas_graficas (
  id_producto         INT             PRIMARY KEY,
  chipset             VARCHAR(50)     NOT NULL,
  memoria_gb          INT             NOT NULL,
  tipo_memoria        VARCHAR(20),
  bus_memoria_bits    INT,
  reloj_base_ghz      DECIMAL(5,2),
  reloj_boost_ghz     DECIMAL(5,2),
  tdp_w               INT,
  pcie_version        VARCHAR(10),
  cuda_cores          INT,
  long_mm             INT,
  altura_mm           INT,
  espesor_slots       DECIMAL(3,1),
  conector_6pin       INT DEFAULT 0,
  conector_8pin       INT DEFAULT 0,
  sli_xfire_soporte   BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

-- 4. Detalles de Chasises
CREATE TABLE detalles_chasises (
  id_producto           INT           PRIMARY KEY,
  formato_soportado     VARCHAR(50),       -- ej. ATX, Micro-ATX, Mini-ITX
  material              VARCHAR(50),
  alto_mm               INT,
  ancho_mm              INT,
  profundidad_mm        INT,
  peso_kg               DECIMAL(5,2),
  bahias_5_25           INT DEFAULT 0,
  bahias_3_5            INT DEFAULT 0,
  slots_expansion       INT DEFAULT 0,
  puertos_usb2          INT DEFAULT 0,
  puertos_usb3          INT DEFAULT 0,
  puerto_usb_c         INT DEFAULT 0,
  ventana_lateral       BOOLEAN DEFAULT FALSE,
  refrigeracion_incluye VARCHAR(100),      -- e.g. "2x120mm fans"
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

-- 5. Detalles de Refrigeraciones (CPU/GPU)
CREATE TABLE detalles_refrigeraciones (
  id_producto           INT             PRIMARY KEY,
  tipo_refrigeracion    ENUM('Aire','Líquida') NOT NULL,
  altura_mm             INT,                      -- para air coolers
  ventilador_mm         INT,                      -- diámetro del fan
  flujo_aire_cfm        DECIMAL(6,2),
  nivel_ruido_db        DECIMAL(5,2),
  socket_compatibles    VARCHAR(100),             -- lista separada por comas
  radiador_mm           VARCHAR(20),              -- e.g. "240x120", para líquidas
  bombas_rpm            INT,                      -- para líquidas
  conductos_material    VARCHAR(50),
  peso_kg               DECIMAL(5,2),
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

-- 6. Detalles de Fuente de Poder
CREATE TABLE detalles_fuentes_poder (
  id_producto           INT           PRIMARY KEY,
  potencia_w            INT           NOT NULL,
  certificacion_80plus  ENUM('Bronze','Silver','Gold','Platinum','Titanium'),
  modularidad           ENUM('No modular','Semi-modular','Full modular'),
  tipo_formato          VARCHAR(20),       -- ATX, SFX, etc.
  voltaje_12v_a         DECIMAL(6,2),
  num_conectores_24pin  INT DEFAULT 1,
  num_conectores_8pin   INT DEFAULT 0,
  num_sata              INT DEFAULT 0,
  num_molex             INT DEFAULT 0,
  protecciones_ip       VARCHAR(100),      -- ej. OVP, UVP, SCP, etc.
  ventilador_mm         INT,
  ruido_max_db          DECIMAL(5,2),
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

-- 7. Detalles de Placas Base
CREATE TABLE detalles_placas_base (
  id_producto           INT           PRIMARY KEY,
  socket                VARCHAR(20)   NOT NULL,
  chipset               VARCHAR(50)   NOT NULL,
  formato               ENUM('ATX','Micro-ATX','Mini-ITX','E-ATX'),
  num_slots_ram         INT           NOT NULL,
  max_ram_gb            INT           NOT NULL,
  pcie_x16_slots        INT           DEFAULT 0,
  pcie_x8_slots         INT           DEFAULT 0,
  pcie_x4_slots         INT           DEFAULT 0,
  num_m2_slots          INT           DEFAULT 0,
  num_sata_ports        INT           DEFAULT 0,
  usb2_0_traseros       INT           DEFAULT 0,
  usb3_0_traseros       INT           DEFAULT 0,
  usb3_1_typeC_traseros INT           DEFAULT 0,
  lan_gbps              DECIMAL(3,1),
  wifi_integrado        BOOLEAN       DEFAULT FALSE,
  bluetooth_integrado   BOOLEAN       DEFAULT FALSE,
  fases_vrm             INT,
  audio_chipset         VARCHAR(50),
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);
