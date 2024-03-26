drop table login;



create table login (
username varchar(200),
password varchar (200)
);
drop table contact;
create table contact(
name varchar(200),
email varchar (200)
);
select * from login ;
select * from contact ;

alter user 'root'@'localhost' identified with mysql_native_password by '1234'; 
