
DROP TABLE IF EXISTS contracts;
DROP TABLE IF EXISTS tokens;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS roles;

CREATE TABLE roles (
   id SERIAL PRIMARY KEY,
   name VARCHAR(120)
);

/** 
  * user table
  * role: 1 administrator, 2 famer
  */
CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   rut VARCHAR(12) UNIQUE NOT NULL,
   password VARCHAR (300) NOT NULL,
   name VARCHAR (120),
   last_name VARCHAR(120),
   email VARCHAR (355) UNIQUE NOT NULL,
   role_id INTEGER REFERENCES roles
);

CREATE TABLE tokens (
   id SERIAL PRIMARY KEY,
   token VARCHAR(300) UNIQUE,
   user_id INTEGER REFERENCES users,
   created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE contracts (
   id SERIAL PRIMARY KEY,
   address VARCHAR (255),
   seed VARCHAR (255),
   planting_date date,
   floor_power SMALLINT DEFAULT 0,
   user_id INTEGER REFERENCES users,
   farmer_id INTEGER REFERENCES users,
   status VARCHAR (1) DEFAULT 'N',
   observation VARCHAR (255),
   created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

/**
  * data user 
  */
INSERT INTO roles(name) values('adminsitradtor'), ('agricultor');

/**
  * data user 
  */
INSERT INTO users(rut, password, name, last_name, email, role_id) values
('123456789', '$2b$10$48Fk2qgPBG8El9VnwUkJSewpR2aIpgGENIAVrvd9cPxTvn0dEzjkC','admin', 'admin', 'admin@admin.com', 1),
('111222356', '$2b$10$48Fk2qgPBG8El9VnwUkJSewpR2aIpgGENIAVrvd9cPxTvn0dEzjkC','Maria', 'Adan', 'maria@gmail.com', 2),
('723456789', '$2b$10$48Fk2qgPBG8El9VnwUkJSewpR2aIpgGENIAVrvd9cPxTvn0dEzjkC','Angelica', 'Rodriguez', 'angelica@gmail.com', 2),
('323456789', '$2b$10$48Fk2qgPBG8El9VnwUkJSewpR2aIpgGENIAVrvd9cPxTvn0dEzjkC','Ricardo', 'Peralta', 'ricardo@gmail.com', 2),
('423456789', '$2b$10$48Fk2qgPBG8El9VnwUkJSewpR2aIpgGENIAVrvd9cPxTvn0dEzjkC','Juan', 'Ortiz', 'juan@gmail.com', 2);