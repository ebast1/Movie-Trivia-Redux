drop table if exists scores CASCADE;
drop table if exists personal_scores CASCADE;


CREATE TABLE scores (
	scores_id    serial        not null,
	name        char(64)      not null,
	score       integer       not null,
	CONSTRAINT pk_scores PRIMARY KEY (scores_id)
	)
; 
CREATE TABLE personal_scores (
	personal serial          not null,
	name     char(64)        not null,
	score    integer         not null,
	scores_id integer         not null,
	CONSTRAINT scores_id  PRIMARY KEY (personal),
	CONSTRAINT fk_scores_id FOREIGN KEY (scores_id)
			   REFERENCES scores(scores_id)
	
)
;
CREATE TABLE 
INSERT into scores (name, score) values('Cam', 8);
INSERT into scores (name, score) values('Jack', 8);


Select * from scores;

