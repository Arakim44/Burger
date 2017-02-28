
CREATE DATABASE burgers_db
USE burgers_db

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers
(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(225) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  Date TIMESTAMP,
  PRIMARY KEY(id)
);
