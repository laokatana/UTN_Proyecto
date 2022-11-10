
create database registro_equipo;


use registro_equipo;


create  table equipo (
idEquipo int unsigned auto_increment primary key,
nombre_de_equipo varchar(50),
ciudad varchar(50), 
estadio varchar(50),
fecha_de_creacion date

);


select * from equipo;

