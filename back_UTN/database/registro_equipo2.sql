
create database registro_equipo;


use registro_equipo;


create  table equipo (
idEquipo int unsigned auto_increment primary key,
nombre varchar(50),
ciudad varchar(50), 
estadio varchar(50),
fecha date

);


select * from equipo;

insert into equipo (idEquipo, nombre_de_equipo, ciudad, estadio, fecha_de_creacion)
values (null, "monteweed", " kilometro 24 ", "san rafael", "2010-05-28"); 

update equipo set nombre_de_equipo = " San rafael " where idEquipo= 9;

delete from equipo WHERE idEquipo=10;





