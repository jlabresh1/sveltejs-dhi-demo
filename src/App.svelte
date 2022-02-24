<script>
  import Modal from "./lib/Modal.svelte";
  import Accordion from "./lib/Accordion.svelte";
  import Editor from "./lib/Editor.svelte";
  import TypeGame from "./lib/TypeGame.svelte";
  import Button from "./lib/Button.svelte";
  import { lightTheme } from "./stores/themeStore.js";
  import {faqs} from './faqs.js';

  let showModal = false;

  lightTheme.useLocalStorage();

  $: $lightTheme ? document.body.classList.remove('dark-mode'): document.body.classList.add('dark-mode');
  $: themeIcon = $lightTheme ? '🌙' : '🌞';
  const toggleTheme = () => $lightTheme = !$lightTheme;

</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<!-- 
  Prupose of Demo:
  1. Components and slots - <Button>
  2. stores
  3. dynamic values with $:
 -->


<main >
  <header>

    <Button on:click={toggleTheme}>{themeIcon} &nbsp;  Toggle theme</Button>
    <h1>SveltJS Demo</h1>
    
  </header>

  <section>


    


  <!-- <Accordion {faqs} /> -->
  <!-- <Editor /> -->
  <TypeGame />


  <Button on:click={() => showModal = true}>modal</Button>

  <Modal {showModal} on:cancel={() => showModal = false} on:close={() => showModal=false}>
    <div slot="header">Modal Header</div>

    <h3>This is a modal</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices auctor purus, et volutpat nisi interdum non. Nam efficitur lectus non euismod volutpat. Praesent in urna risus.</p>

  </Modal>

  </section>
</main>


<style>

header {
    text-align: center;
}
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

  :global(body) {
    background-color: #fefefe;
    color: #1d3040;
    transition: all 0.3s;
    min-height: 100vh;
    width: 100%;
  }

  :global(body.dark-mode) {
    background-color: #1d3040;
    color: #fefefe;
  }
</style>
