<script lang="ts">
	import {base} from "$app/paths";
</script>

<header>
    <div class="head1">
        <h2 class="ab" id="headfirst">My portfolio</h2> 
        <div class="src">
        <a href="{base}/" class="ab" id="head">About me</a>
        <a href="{base}/contact" class="ab" id="head">Contacts</a>
        <a href="{base}/comic" class="ab" id="head">Comic</a>
        </div>
    </div>
</header>

<style>
    .ab{
        font-family: "Cooper Black";
        color: black;
    }
    header{
        background-color: #030f2e;
        height: 150px;
    }
    #head{
        color: white;
        font-size: 20px;
    }
    #headfirst{
        color: white;
        font-size: 30px;
        text-align: center;
    }
    .head1{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .src{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
</style>