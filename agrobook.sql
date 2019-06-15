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


/**
  * data user 
  */
INSERT INTO roles(name) values('adminsitradtor'), ('agricultor');

/**
  * data user 
  */
INSERT INTO users(rut, password, name, last_name, email, role_id) values('00.000.000.0', '$2b$10$48Fk2qgPBG8El9VnwUkJSewpR2aIpgGENIAVrvd9cPxTvn0dEzjkC','admin', 'admin', 'admin@admin.com', 1)

