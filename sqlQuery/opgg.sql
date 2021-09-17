use opgg;


Select champName FROM champList
where champId in (59, 222, 75,34,25,236,115,98,53,5)
ORDER BY field(champId,59, 222, 75,34,25,236,115,98,53,5);

Select * FROM lol_board;
Select * FROM champList;

CREATE TABLE opgg.lol_board like spr1.lol_board;
insert into opgg.lol_board select * from spr1.lol_board;

