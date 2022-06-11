create table owner
(
	id SERIAL PRIMARY KEY,
	name varchar(50),
	phoneNumber char(10),
	Email varchar(50),
	Birthday Date default now(),
	avatar varchar(100),
	Sex char(6),
	password text,
	isVerified bool
);
create table store
(
	id SERIAL PRIMARY KEY,
	name varchar(50),
	logo varchar(100),
	phoneNumber char(10),
	Email varchar(50),
	ownerID int,
	addressID int
);
create table employees
(
	id SERIAL PRIMARY KEY,
	phoneNumber char(10) not null unique,
	name varchar(50),
	Email varchar(50),
	logo varchar(100),
	Sex char(6),
	password text,
	isVerified bool,
	addressID int
);
create table contract
(
	id SERIAL PRIMARY KEY,	
	storeID int,
	employeesID int,
	storeStatus bool,
	employeesStatus bool
);
create table Address
(
	id SERIAL PRIMARY KEY,
	HouseNumber char(20),
	Street varchar(50),
	Ward varchar(50),
	District varchar(50),
	City varchar(50)
);

ALTER TABLE store
ADD CONSTRAINT fk_store_owner FOREIGN KEY(ownerID) REFERENCES owner(ID),
ADD CONSTRAINT fk_store_address FOREIGN KEY(addressID) REFERENCES Address(ID);

ALTER TABLE employees
ADD CONSTRAINT fk_employ_address FOREIGN KEY(addressID) REFERENCES Address(ID);

ALTER TABLE contract
ADD CONSTRAINT fk_contract_store FOREIGN KEY(storeID) REFERENCES store(ID),
ADD CONSTRAINT fk_contract_employ FOREIGN KEY(employeesID) REFERENCES employees(ID);

insert into owner(name, email, password)
values('Hoàng Nguyễn', 'nnh@gmail.com','hoangnguyen');

insert into store(name, ownerID)
values
	('shop1',1 ),
	('shop2', 1);
insert into employees(name, phoneNumber,email, password)
values
	('TNh','0915111111', 'test@gmail.com','test'),
	('employees2','09152222222', 'test2@gmail.com','test')
	('employees3','0915333333', 'test3@gmail.com','test')
insert into Address(HouseNumber,Street,Ward,District,City)
values('2','KTX','Dong Hoa', 'Di An', 'Binh Duong')

insert into contract(storeid, employeesid, storeStatus, employeesStatus)
values
	(1,1,true,true),
	(2,1,true,false),
	(1,2,false,true),
	(2,2,false,true)


