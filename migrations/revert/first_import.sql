-- Revert pokedex:first_import from pg

BEGIN;

DROP TABLE IF EXISTS "type";
DROP TABLE IF EXISTS "pokemon_type";
DROP TABLE IF EXISTS "pokemon";

COMMIT;