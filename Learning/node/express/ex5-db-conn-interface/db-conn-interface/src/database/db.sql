/* DB setup */

drop database if exists plushies_db;
create database plushies_db;

use plushies_db;


/* Tables structure */
create table users (
	user_id int auto_increment primary key not null,
    name varchar(100) not null,
    surname varchar(100),
    email varchar(150) not null unique,
    password varchar(100) not null
);

create table plushies (
	plush_id int auto_increment primary key not null,
    name varchar(100) not null,
	cost double not null,
    stock int not null
);

create table users_plushies (
	id int auto_increment primary key not null
);


/* Polishing tables */
ALTER TABLE users_plushies
RENAME COLUMN id to id_user_plush;

alter table users_plushies
add user_id int not null;

alter table users_plushies
add plush_id int not null;

/* Adding foreign keys */
alter table users_plushies
add CONSTRAINT fk_user_id
foreign key (user_id) references users(user_id);

alter table users_plushies
add CONSTRAINT fk_plush_id
foreign key (plush_id) references plushies(plush_id);

