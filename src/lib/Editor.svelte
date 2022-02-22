<script>
import {afterUpdate} from 'svelte'
  let html;
  let js;
  let scriptTag;

  
  const executeJs = () => {
    if (scriptTag) document.head.removeChild(scriptTag)
    scriptTag = document.createElement("script");
    scriptTag.innerHTML = js;
    document.querySelector("head").appendChild(scriptTag);
  }
</script>



<div class="container">
  <div class="editors">
    <div contenteditable bind:textContent={html} class="editor html" />
    <style contenteditable class="editor css"></style>
    <div contenteditable bind:textContent={js} class="editor js" />
    <button class="button" on:click={executeJs}>RunJS</button>
  </div>
  <div class="results">
    {@html html}
  </div>
</div>



<style>
  [contenteditable] {
    white-space: pre;
    padding: 10px;
  }
  .container {
    min-height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .editors {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 100%;
    position: relative;
  }
  .results {
    flex: 1;
    border: 1px solid #dfeda2;
    background: #f8f8f8;
    padding: 1rem;
  }
  .editor {
    font-family: monospace;
    flex: 1;
    border: 1px solid #ddd;
    padding: 2rem;
  }

  .button {
    position: absolute;
    bottom: 0; right: 0;
  }

    style {
    display: block;
  }

</style>
