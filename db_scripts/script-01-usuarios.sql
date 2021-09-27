

DROP TABLE IF EXISTS Usuarios;

CREATE TABLE IF NOT EXISTS Usuarios(
	id int not null auto_increment,
    nombre varchar(100) NOT NULL,
    email varchar(100) not null,
    estado tinyint default 1,
    updatedAt timestamp,
    createdAt timestamp,
    primary key(id),
    CONSTRAINT UC_USERS_NODE UNIQUE(email)
);

-- la tabla Usuarios esta con mayuscula para poder lograr compatibilidad entre localhost/windos y clever-cloud/linux 
