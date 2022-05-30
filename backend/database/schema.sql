-- create database aoca;
use aoca;
-- create table userTable(
-- id INT AUTO_INCREMENT NOT NULL,
-- FirstName VARchar(50),
-- LastName VARchar(50),
-- Email VARchar(255) ,
-- role_id VARchar(50) default " ",
-- Password VARchar(255),
-- primary key (id)
-- );

-- create table booksTable(
--     id INT AUTO_INCREMENT NOT NULL,
--     bookName VARchar(255),
--     AuthorName VARchar(255),
--     Price INT ,
--     category VARchar(50),
--     image_ VARchar(255),
--     primary key (id)
-- )




-- reading list is for the fans
create table readingList (
    id  INT AUTO_INCREMENT NOT NULL,
    book VARchar(255),
    image_ VARchar(255),
    primary key (id)
)