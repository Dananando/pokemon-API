-- Verify pokedex:first_import on pg

BEGIN;

SELECT * FROM "author" WHERE false;
SELECT * FROM "serie" WHERE false;
SELECT * FROM "book" WHERE false;

ROLLBACK;
