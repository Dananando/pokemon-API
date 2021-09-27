-- Verify pokedex:first_import on pg

BEGIN;

SELECT * FROM "type" WHERE false;
SELECT * FROM "pokemon_type" WHERE false;
SELECT * FROM "pokemon" WHERE false;

ROLLBACK;
