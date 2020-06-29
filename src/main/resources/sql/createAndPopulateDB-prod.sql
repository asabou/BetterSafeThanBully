use heroku_fadc8a45afc8c94;

-- create table child (
-- 	username varchar(200) primary key
-- );
-- create table parent (
-- 	username varchar(200) primary key
-- );
-- create table psychologist(
-- 	username varchar(200) primary key
-- );
-- create table conversation(
-- 	title varchar(200) primary key
-- );
-- create table message(
-- 	messageID int primary key auto_increment, 
--  conversation_title varchar(200) references conversation(title)
-- );

-- insert into child (username, birthday, first_name, last_name, origin, password) values
-- 	('alexandru.sabou', '2010-10-10','Alexandru', 'Sabou', 'RURAL','parola'),
-- 	('alexandra.iurec', '2011-09-23', 'Alexandra', 'Iurec', 'URBAN','parola'),
-- 	('florina.coste', '2009-02-13', 'Florina', 'Coste', 'RURAL','parola'),
-- 	('raluca.moise', '2008-11-11', 'Raluca', 'Moise', 'RURAL','parola');

-- select * from child;

-- insert into parent (username, first_name, last_name, password) values
-- 	('ale.sabou','Alexandru', 'Sabou', 'parola'),
--     ('ale.iurec','Alexandra','Iurec','parola'),
--     ('flo.coste','Florina', 'Coste', 'parola'),
--     ('ral.moise','Raluca','Moise','parola');

-- select * from parent;

-- insert into psychologist (username, first_name, last_name, password) values
-- 	('a.sabou','Alexandru', 'Sabou', 'parola'),
--     ('a.iurec','Alexandra','Iurec','parola'),
--     ('f.coste','Florina', 'Coste', 'parola'),
--     ('r.moise', 'Raluca','Moise', 'parola');
-- select * from psychologist;

-- insert into conversation (title, username) values
-- 	('M-a urmarit pe holurile scolii', 'alexandru.sabou'),
--     ('M-a injurat','florina.coste'),
--     ('Nimeni nu ma intelege','alexandra.iurec'),
--     ('Un coleg a fost hartuit si nu am facut nimic','raluca.moise'),
--     ('Copilul meu a fost batut', 'ale.iurec'),
--     ('Au ras de mine colegii', 'alexandru.sabou');

-- select * from conversation;

select * from message;
