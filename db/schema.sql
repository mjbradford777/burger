create database burgers_db;

use burgers_db;

create table burgers (
    id int not null auto_increment,
    burger_name varchar(200),
    devoured boolean default FALSE,
    primary key (id)
);