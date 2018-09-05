DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name  VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  stock_quantity  INT NULL,
  price DECIMAL(10,2) null,
    PRIMARY KEY (item_id)
);

## Seed Values
INSERT INTO products (product_name,department_name,stock_quantity,price)
VALUES ("Mercury","Planetary",100,40.04);

INSERT INTO products (product_name,department_name,stock_quantity,price)
VALUES ("Venus","Planetary",100,70.07);

INSERT INTO products (product_name,department_name,stock_quantity,price)
VALUES ("Earth","Planetary",100,100.1);

INSERT INTO products (product_name,department_name,stock_quantity,price)
VALUES ("Mars","Planetary",100,150.15);

INSERT INTO products (product_name,department_name,stock_quantity,price)
VALUES ("Belts","Other",100,230.33);

INSERT INTO products (product_name,department_name,stock_quantity,price)
VALUES ("Ceres","XSL",100,277.27);

INSERT INTO products (product_name,department_name,stock_quantity,price)
VALUES ("Jupitar","Planetary",100,520.52);

INSERT INTO products (product_name,department_name,stock_quantity,price)
VALUES ("Saturn","Planetary",100,950.95);

INSERT INTO products (product_name,department_name,stock_quantity,price)
VALUES ("Uranus","Planetary",100,1921.92);

INSERT INTO products (product_name,department_name,stock_quantity,price)
VALUES ("Neptune","Planetary",100,3013.01);

SELECT * FROM products;