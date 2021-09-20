const { shuffle } = require('underscore');
const _ = require('underscore');

// 5 - this will return a random number no bigger than `max`, as a string
// we will also doing our query parameter validation here
const getRandomJokeJSON = (max = 1) => {
  // Grab from this list
  const jokes = [
    [
      'What do you call a very small valentine?',
      'A valen-tiny!!!',
    ],
    [
      'What did the dog say when he rubbed his tail on the sandpaper?',
      'Ruff, Ruff!!!',
    ],
    [
      "Why don't sharks like to eat clowns?",
      'Because they taste funny!!!',
    ],
    [
      'What did the boy cat say to the girl cat?',
      "You're Purr-fect!!!",
    ],
    [
      "What is a frog's favorite outdoor sport?",
      'Fly Fishing!!!',
    ],
    [
      'I hate jokes about German sausages.',
      'Theyre the wurst...',
    ],
    [
      'Did you hear about the cheese factory that exploded in France?',
      'There was nothing left but de Brie...',
    ],
    [
      'Our wedding was so beautiful ',
      'Even the cake was in tiers...',
    ],
    [
      'Is this pool safe for diving?',
      'It deep ends...',
    ],
    [
      'Dad, can you put my shoes on?',
      'I dont think theyll fit me...',
    ],
    [
      'Can February March?',
      'No, but April May!!!',
    ],
    [
      'What lies at the bottom of the ocean and twitches?',
      'A nervous wreck...',
    ],
    [
      'Im reading a book on the history of glue.',
      'I just cant seem to put it down...',
    ],
    [
      'Dad, can you put the cat out?',
      'I didnt know it was on fire...',
    ],
    [
      'What did the ocean say to the sailboat?',
      'Nothing, it just waved...',
    ],
    [
      'What do you get when you cross a snowman with a vampire?',
      'Frostbite!!!',
    ],
  ];

  // The max amount of jokes in the list
  const jokesMax = jokes.length;

  let max2 = Number(max); // cast `max` to a Number
  max2 = !max2 ? 1 : max2;
  max2 = max2 > jokesMax ? jokesMax : max2;
  max2 = max2 < 1 ? 1 : max2; // if `max` is less than 1 default it to 1

  const randomJokes = [];
  const shuffledJokes = _.shuffle(jokes);
  console.log(shuffledJokes);

  for (let i = 0; i < max2; i++) {
    // Pick a random joke
    // const number = Math.floor(Math.random() * jokesMax);

    // Set the values equal to the joke at said number
    const q = shuffledJokes[i][0];
    const a = shuffledJokes[i][1];

    // Setting up the JSON format...
    const randomJoke = {
      q,
      a,
    };

    randomJokes.push({ q: randomJoke.q, a: randomJoke.a });
  }

  // send back the JSON to the request
  return JSON.stringify(randomJokes);
};

const getRandomJokeResponse = (request, response, params) => {
  response.writeHead(200, {
    'Content-Type': 'application/json',
  }); // send response headers
  response.write(getRandomJokeJSON(params.limit)); // send content
  response.end(); // close connection
};

module.exports = {
  getRandomJokeResponse,
};
