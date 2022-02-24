<script>
  import Button from './Button.svelte';
  import Modal from './Modal.svelte';
  import { list } from '../wordList';
  const GAME_LENGTH_IN_SECONDS = 60;
  let points = 0;
  let letters = []; // array of {l: string, typed: boolean}
  let currentLetterIndex = 0;
  let letterTyped;
  let seconds = GAME_LENGTH_IN_SECONDS;
  let isDisabled = false;
  let timer = null;
  let showModal = false;

  function countdown() {
    timer = setInterval(() => {
      isDisabled = true;
      seconds--;
      if (seconds === 0) {
        showModal = true;
        seconds = GAME_LENGTH_IN_SECONDS;
        isDisabled = false;	
        clearInterval(timer);
      }
     }, 1000);
    }

    function random() {
      const random = Math.floor(Math.random() * (1943 - 0 + 1)) + 0;
      const wordArray = list[random].split("");
      letters = wordArray.map(l => ({l, typed: false}))
    }

    function handleClick(e) {
      points = 0;
      countdown();
      random();
      isDisabled = true;
    }

    function typing(e) {
      if (!isDisabled) return;
      
      letterTyped = e.key.toUpperCase();
      const letterIndex = letters.findIndex(l => l.l === letterTyped && !l.typed)

      if (letterIndex === currentLetterIndex) {
        letters = letters.map((l, i) => letterIndex === i ? ({...l, typed: true}) : l);
        currentLetterIndex++;
      }

      const wordIsComplete = letters.every(l => l.typed);
      if (wordIsComplete) {
        points++;
        random();
        currentLetterIndex = 0;
      }
    }




</script>

<svelte:body on:keydown={typing} />

<div class="wrapper">
  <p>Type as many words as you can until time runs out!</p>
  <Button disabled={isDisabled} on:click={handleClick}>Start</Button>
  <div class="outerWrap">
    <div class="scoreWrap">
      <p>Score</p>
      <span class="score">{points}</span>
    </div>
    <div class="timeWrap">
      <p>Time left</p>
      <span class="time">{seconds}</span>
    </div>
  </div>
  <div class="wordsWrap">
    <p class="words">
      {#each letters as letter, i}
        <span class={`span`} class:bg={letter.typed}>{letter.l}</span>
      {/each}
    </p>
  </div>
</div>



  <Modal {showModal} 
    on:cancel={() => showModal = false} 
    on:close={() => showModal=false}
  >
    <div slot="header">Game Over</div>

    <h3>Great work!</h3>
    <p>
      Your score is {points}
    </p>

  </Modal>

<style>
  .wrapper {
    text-align: center;
  }
  .words {
    font-size: 3rem;
		letter-spacing: .1rem;
  }
	
  .span {
    background-color: lightcyan;
  }
  .bg {
    background-color: pink;
  }
</style>
