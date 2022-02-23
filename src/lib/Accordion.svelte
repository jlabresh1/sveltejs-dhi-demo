<script>
  // props
  export let faqs = [];

  // component state
  let current;



</script>


    <section class="tab-group">
      {#each faqs as q}
        <article class="tab">
            <span class="tab-title" on:click={() => current = q.id}>{q.title}</span>
            <div class="tab-content" class:open={current === q.id}>
              {@html q.content}
            </div>
        </article>
      {/each}


        

    </section>




    <style>
    
    
.tab-group {
  max-width: 40rem;
  width: 100%;
  margin-top: 5rem;
}

.tab {
  width: 100%;
  margin-bottom: 2rem;
  box-shadow: 0 0 30px 0 rgba(0,0,0,.12);
  position: relative;
}

:global(.dark-mode .tab) {
  background-color: rgba(255,255,255,.06);
}

.tab-title {
  cursor: pointer;
  display: block;
  background: --var(--label-bg-color);
  color: var(--primary-color);
  
  font-weight: bold;
  line-height: 1.3;
  text-transform: capitalize;
  padding: 1.5rem;
  border-radius: 4px;
  letter-spacing: 1px;
}

.tab-content {
  background-color: var(--content-bg-color);
  max-height: 0;
  overflow: hidden;
  transition: all .3s ease-in-out;
}



.tab-content.open {
  max-height: 30rem;
}
:global(p) {
  padding: 1rem;
  margin: 0;
}


 
    </style>
