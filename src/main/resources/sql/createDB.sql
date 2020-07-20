drop database alfa;
create database alfa;
use alfa;
create table child (
	username varchar(200) primary key
);
create table parent (
	username varchar(200) primary key
);
create table psychologist(
	username varchar(200) primary key
);
create table topic(
	title varchar(200) primary key
);
create table message(
	messageID int primary key auto_increment
);