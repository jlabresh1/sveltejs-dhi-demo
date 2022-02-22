<script>
  import Button from "./lib/Button.svelte";
  import { themeStore } from "./stores/themeStore.js";
  themeStore.useLocalStorage();

  $: theme = $themeStore === "dark" ? "light" : "dark";

  function toggleTheme() {
    $themeStore === "dark" ? ($themeStore = "light") : ($themeStore = "dark");
  }
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>


<main class:dark-mode={$themeStore === 'dark'}>
  <header>

    <Button on:click={toggleTheme}>{theme} theme</Button>
    
  </header>

  <section>

    <h1>SveltJS {$themeStore}</h1>

    



  </section>
</main>


<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  h1 {
    width: 100%;
  }

  main {
    background-color: #fefefe;
    color: #1d3040;
    transition: all 0.3s;
    height: 100vh;
    width: 100%;
    padding: 2rem;
    text-align: center;
  }

  main.dark-mode {
    background-color: #1d3040;
    color: #fefefe;
  }
</style>
