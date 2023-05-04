create database dbApiCarros;

use dbApiCarros;

create table carros(
codigo int primary key auto_increment,
modelo varchar(30),
placa varchar(7)
);

insert into carros (modelo, placa) value ('toyota corolla', '256844');
insert into carros (modelo, placa) value ('Honda Civic', '125874');

select * from carros;