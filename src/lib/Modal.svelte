<script>
	import { createEventDispatcher } from 'svelte';
	export let showModal = false;
	
	const dispatch = createEventDispatcher();
</script>

{#if showModal}
<div class="backdrop" on:click={() => dispatch('cancel')} />  
<div class="modal">
	<header>
		<slot name="header"></slot>
	</header>
	<slot></slot>

  <footer>
    <button on:click={() => dispatch('close')}>Close</button>
  </footer>
</div>
{/if}





<style>
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: rgba(0,0,0,.75);
		z-index: 10;
	}
	
	.modal {
		padding: 1rem;
		position: fixed;
		top: 10vh;
		left: 10%;
		width: 80%;
		min-height: 50vh;
		background: white;
		border-radius: 5px;
		z-index: 100;
		box-shadow: 0 2px 8px rgba(0,0,0,.26);
		overflow: scroll;
	}
	
	header {
		border-bottom: 1px solid #ddd;
	}
</style>

