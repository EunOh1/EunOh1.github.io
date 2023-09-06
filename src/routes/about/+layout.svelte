<script>
  import { onMount } from 'svelte'; 
  import { tick } from 'svelte';
  let innerH = 500;
    onMount(async () => { 
        let header = document.querySelector('header').getBoundingClientRect().height;
        let footer = document.querySelector('footer').getBoundingClientRect().height;
        await tick();
            innerH = window.innerHeight - header - footer;

        window.addEventListener('resize', async ()=>{
            await tick();
            innerH = window.innerHeight - header - footer;
        })
    });
</script>
<div style="height: {innerH}px;">
  <div class="selector">
      <h2><a href="/about/en">EN</a>/<a href="/about/ko">KO</a></h2>
  </div>
  <slot></slot>
</div>
<style>
  .selector {
    box-sizing: border-box;
    padding: 1vh 0 0 0;
    text-align: center;
  }
  .selector a:link, .selector a:visited{
    color:black;
    text-decoration:none;
    transition: 0.5s ease-in; 
  }
  .selector a:hover, .selector a:focus{
    color:rgb(255, 100, 100);
    background-color: #fff;
  }
  @media screen and (max-width: 915px) {
    .selector{
      font-size: 2.4vh;
    }
  }

  @media screen and (max-width: 740px) {
    .selector{
      font-size: 1.6vh;
    }
  }
  @media screen and (max-width: 375px) {
    .selector{
      font-size: 1.6vh;
    }
  }
</style>