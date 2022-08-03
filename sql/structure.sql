CREATE DATABASE techlogic_store;
USE techlogic_store;

CREATE TABLE `products` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `description` TEXT NOT NULL,
   `price` INT NOT NULL,
   `discount` TINYINT NOT NULL,
   `image` VARCHAR(255) NOT NULL,
   `sectionId` INT NOT NULL,
   `brandId` INT NOT NULL,
   `collectionId` INT NOT NULL,
   `inCart` TINYINT(1) NOT NULL,
   `deleted` TINYINT(1) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `lastName` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `image` VARCHAR(255) NOT NULL,
   `rolId` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `rols` (
   `id` INT AUTO_INCREMENT,
   `rolName` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `sections` (
   `id` INT AUTO_INCREMENT,
   `sectionName` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `brands` (
   `id` INT AUTO_INCREMENT,
   `brandName` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `collections` (
   `id` INT AUTO_INCREMENT,
   `collectionName` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `products` ADD CONSTRAINT `sectionId` FOREIGN KEY (`sectionId`) REFERENCES `sections`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `brandId` FOREIGN KEY (`brandId`) REFERENCES `brands`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `collectionId` FOREIGN KEY (`collectionId`) REFERENCES `collections`(`id`)  ;

ALTER TABLE `users` ADD CONSTRAINT `rolId` FOREIGN KEY (`rolId`) REFERENCES `rols`(`id`)  ;