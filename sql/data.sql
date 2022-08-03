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
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (DEFAULT,'iPhone 13','iPhone 13','234500',10,'iphone13.png',1,1,1,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (DEFAULT,'Mouse Logitech G603','Mouse Logitech G603','6435',10,'mouse-logi.png',6,2,3,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (DEFAULT,'Macbook Pro','Macbook Pro','320000',10,'macbook-pro.png',3,1,1,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (DEFAULT,'Audífonos Beats Pro','Audífonos Beats Pro','48000',10,'audifonos-beats-pro.png',6,3,4,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (DEFAULT,'iPad Air','iPad Air','79230',10,'ipad-air.png',2,1,1,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (DEFAULT,'Playstation 5','Playstation 5','61700',10,'playstation-5.png',4,4,4,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (DEFAULT,'Teclado Logitech G213','Teclado Logitech G213','5800',10,'teclado-logitech-g213.png',6,2,3,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (DEFAULT,'Router TP-Link TL-MR6400','Router TP-Link TL-MR6400','8020',10,'router-tplink-mr6400.png',5,5,4,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (DEFAULT,'Samsung Galaxy Watch 4','Samsung Galaxy Watch 4','40999',10,'galaxy-watch4.png',6,6,1,0,0);
INSERT INTO products(id,name,description,price,discount,image,sectionId,brandId,collectionId,inCart,deleted) VALUES (DEFAULT,'FIFA 22','FIFA 22','9400',10,'fifa-22.png',4,7,3,0,0);

-- Rellenando tabla users
-- Usuario: admin@techlogic.com.ar
-- Password: admin
INSERT INTO users(id,name,lastName,email,password,image,rolId) VALUES (DEFAULT,'Administrador','Techlogic.Store','admin@techlogic.com.ar','$2a$10$2IIXvPdmnQJFnFhBK2ngN.9jW6/rKLNncNqtJe710Fq8BtT7iXKYK','user-1659489294297.png',1);

-- Rellenando la tabla rols
INSERT INTO rols(id, rolName) VALUES (DEFAULT, 'Admin');
INSERT INTO rols(id, rolName) VALUES (DEFAULT, 'Invitado');