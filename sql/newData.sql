-- Rellenando la tabla collections
INSERT INTO collections(id, collectionName) VALUES (DEFAULT, 'Modern');
INSERT INTO collections(id, collectionName) VALUES (DEFAULT, 'Classic');
INSERT INTO collections(id, collectionName) VALUES (DEFAULT, 'Colorful');
INSERT INTO collections(id, collectionName) VALUES (DEFAULT, 'blackAndWhite');

-- Rellenando la tabla sections
INSERT INTO sections(id, sectionName) VALUES (DEFAULT, 'Smartphones');
INSERT INTO sections(id, sectionName) VALUES (DEFAULT, 'Tablets');
INSERT INTO sections(id, sectionName) VALUES (DEFAULT, 'Laptops');
INSERT INTO sections(id, sectionName) VALUES (DEFAULT, 'Gaming');
INSERT INTO sections(id, sectionName) VALUES (DEFAULT, 'Redes');
INSERT INTO sections(id, sectionName) VALUES (DEFAULT, 'Accesorios');

-- Rellenando la tabla brands
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Apple');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Logitech');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Beats');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Sony');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'TP-Link');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Samsung');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'EA Sports');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Dell');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Tenda');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Walden');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'PcCom');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Realme');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Xiaomi');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'OnePlus');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Lenovo');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Huawei');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Acer');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Razer');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'HP');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Warner Bros');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Imsomniac');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Activision');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Nintendo');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Linksys');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Asus');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Corsair');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Philips');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Marshall');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Anker');
INSERT INTO brands(id, brandName) VALUES (DEFAULT, 'Otro');

-- Rellenando la tabla products
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (1,'iPhone 13','iPhone 13','234500',10,'iphone13.png',1,1,1,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (2,'Mouse Logitech G603','Mouse Logitech G603','6435',10,'mouse-logi.png',6,2,3,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (3,'Macbook Pro','Macbook Pro','320000',10,'macbook-pro.png',3,1,1,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (4,'Audífonos Beats Pro','Audífonos Beats Pro','48000',10,'audifonos-beats-pro.png',6,3,4,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (5,'iPad Air','iPad Air','79230',10,'ipad-air.png',2,1,1,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (6,'Playstation 5','Playstation 5','61700',10,'playstation-5.png',4,4,4,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (7,'Teclado Logitech G213','Teclado Logitech G213','5800',10,'teclado-logitech-g213.png',6,2,3,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (8,'Router TP-Link TL-MR6400','Router TP-Link TL-MR6400','8020',10,'router-tplink-mr6400.png',5,5,4,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (9,'Samsung Galaxy Watch 4','Samsung Galaxy Watch 4','40999',10,'galaxy-watch4.png',6,6,1,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (10,'FIFA 22','FIFA 22','9400',10,'fifa-22.png',4,7,3,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (11,'Samsung Galaxy S22','Samsung Galaxy S22','209999',10,'samsung-galaxy-s22.png',1,6,1,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (12,'Dell XPS 15','Dell XPS 15','420000',10,'dell-xps-15.png',3,8,1,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (13,'Samsung Galaxy Tab A8','Samsung Galaxy Tab A8','44999',10,'samsung-galaxy-tab-a8.png',2,6,1,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (14,'Router Tenda AC1200','Router Tenda AC1200','9800',10,'router-tenda-ac1200.png',5,9,4,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (15,'Funda iPhone 13 Walden','Funda iPhone 13 Walden','7890',10,'funda-iphone13-walden.png',6,10,2,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (16,'PcCom Gold','PcCom Gold','342000',10,'pcCom-gold.png',4,11,3,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (17,'Realme GT','Realme GT','115355',10,'realme-gt.png',1,12,3,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (18,'Xiaomi Poco X4 Pro','Xiaomi Poco X4 Pro','109738',10,'xiaomi-poco-x4.png',1,13,3,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (19,'Xiaomi Mi 11T','Xiaomi Mi 11T','99999',10,'xiaomi-mi-11t.png',1,13,3,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (20,'OnePlus Nord 2','OnePlus Nord 2','89800',10,'oneplus-nord2.png',1,14,2,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (21,'Xiaomi Black Shark 4','Xiaomi Black Shark 4','225000',10,'xiaomi-black-shark-4.png',1,13,4,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (22,'Lenovo Tab P11 Pro','Lenovo Tab P11 Pro','99636',10,'lenovo-tab-p11-pro.png',2,15,1,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (23,'Huawei MatePad 10','Huawei MatePad 10','42000',10,'huawei-matepad-10.png',2,16,1,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (24,'Acer Swift 3','Acer Swift 3','136000',10,'acer-swift-3.png',3,17,1,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (25,'Apple MacBook Pro 16','Apple MacBook Pro 16','270520',0,'apple-macbook-pro-16.png',3,1,1,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (26,'Razer Blade 14','Razer Blade 14','558900',0,'razer-blade-14.png',3,18,4,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (27,'HP Elite Dragonfly','HP Elite Dragonfly','594000',0,'hp-elite-dragonfly.png',3,19,3,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (28,'Spiderman: Miles Morales','Spiderman: Miles Morales','9999',0,'spiderman.png',4,21,3,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (29,'Call Of Duty: Modern Warfare','Call Of Duty: Modern Warfare','7459',0,'call-of-duty.png',4,22,2,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (30,'Nintendo Switch','Nintendo Switch','49999',0,'nintendo-switch.png',4,23,3,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (31,'Router Linksys EA8300','Router Linksys EA8300','33499',0,'router-linksys-ea8300.png',5,24,4,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (32,'Repetidor TP-Link RE550','Repetidor TP-Link RE550','18000',0,'repetidor-tplink-re550.png',5,5,4,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (33,'Mouse Asus ROG Gladius III','Mouse Asus ROG Gladius III','21270',0,'mouse-asus-rog-gladiusIII.png',6,25,3,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (34,'Mouse Razer Viper','Mouse Razer Viper','10299',0,'mouse-razer-viper.png',6,26,4,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (35,'Teclado Razer BlackWidow','Teclado Razer BlackWidow','30799',0,'teclado-razer-blackwidow.png',6,26,3,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (36,'Teclado Asus ROG Strix','Teclado Asus ROG Strix','24449',0,'teclado-asus-rog-strix.png',6,25,3,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (37,'Teclado Corsair K95','Teclado Corsair K95','33499',0,'teclado-corsair-k95.png',6,27,3,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (38,'Parlante Philips EverPlay','Parlante Philips EverPlay','8999',0,'parlante-philips-everplay.png',6,28,4,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (39,'Parlante Sony SRS-XB13','Parlante Sony SRS-XB13','8999',0,'parlante-sony-srsxb13.png',6,4,4,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (40,'Parlante Marshall Stanmore II','Parlante Marshall Stanmore II','79999',0,'parlante-marshall-stanmoreII.png',6,29,2,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (41,'Audífonos Sony WH-CH510','Audífonos Sony WH-CH510','14900',0,'audifonos-sony-whch510.png',6,4,4,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (42,'Audífonos Apple AirPods','Audífonos Apple AirPods','35200',0,'audifonos-apple-airpops.png',6,1,4,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (43,'Audífonos Anker Soundcore Q30','Audífonos Anker Soundcore Q30','16400',0,'audifonos-anker-soundcore-q30.png',6,30,4,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (44,'Funda Samsung S22 Walden','Funda Samsung S22 Walden','4860',0,'funda-s22-walden.png',6,10,2,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (45,'Funda Macbook Walden','Funda Macbook Walden','17400',0,'funda-macbook-walden.png',6,10,2,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (46,'Funda Apple Watch Walden','Funda Apple Watch Walden','5860',0,'funda-apple-watch-walden.png',6,10,2,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (47,'Funda Airpops Walden','Funda Airpops Walden','6370',0,'funda-airpops-walden.png',6,10,2,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (48,'Apple Watch','Apple Watch','76629',0,'apple-watch.png',6,1,4,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (49,'Asus Vivobook 15','Asus Vivobook 15','130000',0,'asus-vivobook-15.png',3,25,1,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (50,'Joystick Playstation 5','Joystick Playstation 5','17199',0,'joystick-ps5.png',4,4,4,0,0);

-- Rellenando la tabla rols
INSERT INTO rols(id, rolName) VALUES (DEFAULT, 'Admin');
INSERT INTO rols(id, rolName) VALUES (DEFAULT, 'Invitado');


-- Rellenando tabla users
-- Usuario: admin@techlogic.com.ar
-- Password: admin
INSERT INTO users(id,name,lastName,email,password,image,rolId) VALUES (DEFAULT,'Administrador','Techlogic.Store','admin@techlogic.com.ar','$2a$10$2IIXvPdmnQJFnFhBK2ngN.9jW6/rKLNncNqtJe710Fq8BtT7iXKYK','user-1659489294297.png',1);

