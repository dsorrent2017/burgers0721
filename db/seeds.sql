/*
INSERT INTO cats (name) VALUES ('Meeses');
INSERT INTO cats (name) VALUES ('Bobbi');
INSERT INTO cats (name, sleepy) VALUES ('Sylvester', true);
INSERT INTO cats (name, sleepy) VALUES ('Marilyn Manson', true);
INSERT INTO cats (name, sleepy) VALUES ('Joe Biden', true);
INSERT INTO cats (name) VALUES ('Owens');


CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
*/

INSERT INTO burgers (name) VALUES ('Just Meat');
INSERT INTO burgers (name) VALUES ('Cheese Burger');
INSERT INTO burgers (name) VALUES ('The Works');