import { dev } from '$app/environment';
import type { Load } from '@sveltejs/kit';

export const csr = dev;
export const prerender = true;

export const load: Load = async ({ fetch }) => {
  const params = new URLSearchParams({
    email: 'v.patrina@innopolis.university'
  });

  const response = await fetch(`https://fwd.innopolis.app/api/hw2?${params.toString()}`);
  const number = await response.text();

  const jokeResponse = await fetch(`https://getxkcd.vercel.app/api/comic?num=${number}`);
  const joke_info = await jokeResponse.json();

  return {
    props: {
      img_description: {
        name: `${joke_info.title} `,
        imgdate: `${joke_info.day}.${joke_info.month}.${joke_info.year}`,
        joke: joke_info.img,
        isHidden: false
      }
    }
  };
};
