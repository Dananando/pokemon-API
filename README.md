> Hey! Wait! Don't go out! It's unsafe! Wild Pokémon live in tall grass! You need your own Pokémon for your protection
> - Gandhi, adocate for pokemon-human peaceful relations


# Pokemon API

Little project that compiles infos on the Pokemons from the first generation (151 pokemons in total).
At first I wanted to use [GraphQL](https://graphql.org/code/), but eventually a classic REST architecture will be used.

## Sources

- The Pokemon database (initially written in SQL) was provided by my school [O'Clock](https://oclock.io/)


## Stack used

### Server-side

#### Node.js / Express and their friends

The frameworks [__Node.js__](https://nodejs.org/en/download) (v12 or above) and [__Express__](https://www.npmjs.com/package/express) will be used in order to set up the server of the API.

[__Dotenv__](https://www.npmjs.com/package/dotenv) will be needed in order to have environment variables interact with the application.

[__Sqitch__](https://sqitch.org/) is used for database versioning. 

### Client-side

#### Vanilla JS or Vue.js or some exotic JS framework? Use of a CSS framework (Bulma, Tailwind)?

To be determined. Let's make the API work first. We'll make it pretty afterwards.