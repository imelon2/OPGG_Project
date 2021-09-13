use opgg;

insert into champList
(champName , champId)
VALUES
("Ahri" , 1);


Select * FROM champList;

CREATE TABLE opgg.lol_board like spr1.lol_board;
insert into opgg.lol_board select * from spr1.lol_board;

drop Database spr1;