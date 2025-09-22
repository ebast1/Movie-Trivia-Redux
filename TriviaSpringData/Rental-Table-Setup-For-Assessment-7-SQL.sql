
drop table if exists Rentals;

CREATE TABLE Rentals (
	Id          serial PRIMARY KEY,
    Address     varchar(255),
	Beds        integer,
	Baths       integer,
	RentPayment double precision
);


INSERT INTO Rentals (Address, Beds, Baths, RentPayment)
VALUES ('350 Rosemary Pl.',1,1,1200),
('125 Elmer St., Apt. 7',2,1,1400),
('6728 King St.',2,2,1600),
('9000 E Park Dr.',3,2,2500);

