DROP DATABASE if exists notes;
CREATE DATABASE notes;
use notes;

CREATE TABLE users (
	user_id int not null auto_increment primary key,
    name varchar(100) not null,
    nick_name varchar(100) not null,
	email varchar(100) not null
);

CREATE TABLE notes (
	note_id int not null auto_increment primary key,
    title varchar(100) not null,
    description text not null,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fk_user_id int,
    FOREIGN KEY (fk_user_id) REFERENCES users(user_id),
    UNIQUE (note_id, fk_user_id)
);
