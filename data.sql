-- create tables
CREATE TABLE person (
	id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
	name varchar NOT NULL,
	surname varchar NOT NULL,
	document integer NOT NULL,
	age smallint NOT NULL,
	phone integer NOT NULL
);

CREATE TABLE doctor (
	id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
	name varchar NOT NULL,
	surname varchar NOT NULL,
	office varchar NOT NULL,
	email varchar NOT NULL,
	specialty varchar NOT NULL
);

CREATE TABLE appointments (
	id integer NOT NULL GENERATED ALWAYS AS IDENTITY
	specialty varchar NOT NULL
	person_document varchar NOT NULL
);

CREATE TABLE specialty (
	id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
	specialty_name varchar NOT NULL
);


-- alter 

--person
ALTER TABLE person ALTER COLUMN "document" TYPE bigint USING "document"::bigint;
ALTER TABLE person ALTER COLUMN phone TYPE bigint USING phone::bigint;

--doctor
ALTER TABLE doctor ADD "document" bigint NOT NULL;
ALTER TABLE doctor ADD age bigint NOT NULL;
ALTER TABLE doctor ADD phone bigint NOT NULL;
ALTER TABLE doctor DROP COLUMN age;
ALTER TABLE doctor DROP COLUMN phone;
ALTER TABLE doctor DROP COLUMN "document";


--appointments
ALTER TABLE appointments ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE appointments ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP



