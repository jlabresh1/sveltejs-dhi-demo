
<script>
  export let disabled = false;
</script>

<button {disabled} on:click>
	<slot />
</button>

<style>
  button {
    background-color: transparent;
    border-radius: 0.25rem;
    border: 1px solid;
    padding: 1rem 2rem;
    color: orange;
    cursor: pointer;
  }
  button[disabled] {
    opacity: .5;
    cursor: not-allowed;
  }
</style>