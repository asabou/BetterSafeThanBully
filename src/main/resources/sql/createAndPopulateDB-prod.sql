use heroku_fadc8a45afc8c94;
-- select * from parent;
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
-- 	topic_title varchar(200) references topic(title)
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

-- select * from topic;

-- insert into topic (title, username) values
-- 	('M-a urmarit pe holurile scolii', 'alexandru.sabou'),
--     ('M-a injurat','florina.coste'),
--     ('Nimeni nu ma intelege','alexandra.iurec'),
--     ('Un coleg a fost hartuit si nu am facut nimic','raluca.moise'),
--     ('Copilul meu a fost batut', 'ale.iurec'),
--     ('Au ras de mine colegii', 'alexandru.sabou');

-- select * from topic;

-- drop table message;

-- select * from message;

-- select * from message;

-- insert into message(topic_title,content,username_receiver, username_sender) values
-- 	-- M-a rmarit pe holurile scolii
-- 	('M-a urmarit pe holurile scolii','M-a urmarit pe hol si mi-a turnat lapte in cap... am ajuns acasa murdar. Desi nu l-am bagat in seama deloc, tot se ia de mine. Ce sa fac? ','r.moise','alexandru.sabou'),
-- 	('M-a urmarit pe holurile scolii','Incearca sa soliciti ajutorul unui profesor, cu siguranta te va ajuta','alexandru.sabou','r.moise'),
-- 	-- M-a injurat
--     ('M-a injurat','Un coleg m-a injurat de fata cu restul colegilor. Nu mai vreau sa merg maine la scoala','a.iurec','florina.coste'),
--     ('M-a injurat','Ai incercat sa vorbesti cu cineva despre acest lucru? Parinitii sau profesorii stiu ce s-a intamplat in ziua respectiva?','florina.coste','a.iurec'),
--     ('M-a injurat','nu pot sa vorbesc cu parintii, vor merge la scoala si toti vor spune ca sunt un papa-lapte','a.iurec','florina.coste'),
--     -- Nimeni nu ma intelege
--     ('Nimeni nu ma intelege','Vreau sa mor, nimeni nu vrea sa fie prietenul meu, toti rad de mine','florina.coste','alexandra.iurec'),
--     ('Nimeni nu ma intelege','Vrei sa fim prieteni? Vrei sa ne jucam Asphalt 9?','alexandra.iurec','florina.coste'),
--     -- Un coleg a fost hartuit si nu am facut nimic
--     ('Un coleg a fost hartuit si nu am facut nimic','Azi am vazut 2 colegi care il bateau pe un prieten. Nu am facut nimic, mi-a fost frica.','f.coste','raluca.moise'),
--     ('Un coleg a fost hartuit si nu am facut nimic','este bine sa stai in afara conflictelor, dar nu trece cu vederea, ci anunta pe cineva','raluca.moise','f.coste'),
--     -- Copilul meu a fost batut
--     ('Copilul meu a fost batut','Azi fiul meu a venit cu ochiul umflat, nu stiu cum sa il fac sa imi spuna ce s-a intamplat. Un sfat, va rog.','flo.coste','ale.iurec'),
--     ('Copilul meu a fost batut','Asa am patit si eu. L-am lasat pana ce am reusit sa ii citesc jurnalul si am aflat ca la scoala s-a intamplat','ale.iurec','flo.coste'),
--     -- Au ras de mine colegii
--     ('Au ras de mine colegii','Au ras de mine toti colegii azi, nu mai vreau sa merg la ora de educatie fizica, eu nu stiu sa joc fotbal, vreau sa imi rup piciorul si sa termin cu fotbalul','f.coste','alexandru.sabou'),
--     ('Au ras de mine colegii','Incearca sa faci ceva care iti place, vorbeste cu parintii si spune-le ce pasiuni ai, poate esti un excelent basketbalist','alexandru.sabou','f.coste');

-- select * from message;
select * from topic;