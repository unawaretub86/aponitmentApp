-- create tables
CREATE TABLE public.person (
	id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
	name varchar NOT NULL,
	surname varchar NOT NULL,
	document integer NOT NULL,
	age smallint NOT NULL,
	phone integer NOT NULL
);

CREATE TABLE public.doctor (
	id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
	name varchar NOT NULL,
	surname varchar NOT NULL,
	office varchar NOT NULL,
	email varchar NOT NULL,
	specialty varchar NOT NULL
);

CREATE TABLE public.appointments (
	person_id integer NOT NULL,
	doctor_id integer NOT NULL,
	created_at timestamptz NULL,
	updated_at timestamptz NULL
);

-- alter 
ALTER TABLE public.person ALTER COLUMN "document" TYPE bigint USING "document"::bigint;
ALTER TABLE public.person ALTER COLUMN phone TYPE bigint USING phone::bigint;

ALTER TABLE public.doctor ADD "document" bigint NOT NULL;
ALTER TABLE public.doctor ADD age bigint NOT NULL;
ALTER TABLE public.doctor ADD phone bigint NOT NULL;



