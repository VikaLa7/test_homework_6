<!-- Comic.svelte -->
<style>
  .ab {
    font-family: "Cooper Black";
    color: black;
  }

  #sk1 {
    text-align: center;
    padding-top: 40px;
  }

  .gh {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .pic1 {
    width: 600px;
  }

  #aaaaa {
    text-align: center;
    font-size: 24px;
  }
</style>

<h1 class="ab" id="sk1">Programming Comic</h1>

<div class="gh">
  {#if img_description}
    <h4 class="ab" id="aaaaa"><b> - {img_description.name} - </b></h4>
    <img class="pic1" src={img_description.joke} alt={img_description.imgdate} hidden={img_description.isHidden} />
    <figure>
      <h5 class="ab" id="aaaaa">Date: {img_description.imgdate}</h5>
    </figure>
  {/if}
</div>

<script lang="ts">
  export let img_description: {
    name?: string;
    joke?: string;
    imgdate?: string;
    isHidden?: boolean;
  };
</script>

<footer></footer>
