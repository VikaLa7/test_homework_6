<!-- +page.svelte -->
<script lang="ts">
	import Comic from "../../components/Comic.svelte";
	import { page } from "$app/stores";
	import { onMount } from "svelte";
  
	let img_description: {
	  name?: string;
	  imgdate?: string;
	  joke?: string;
	  isHidden?: boolean;
	} = {};
  
	async function load() {
	  const params = new URLSearchParams({
		email: "v.patrina@innopolis.university"
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
	}
  
	onMount(async () => {
	  const { props } = await load();
  
	  img_description = props?.img_description || {};
	});
  </script>
  
  <div class="container">
	{#if img_description.name}
	  <Comic {img_description} />
	{/if}
  </div>
  