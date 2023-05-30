<script>
  import "../+about_style.css"
  import { onMount } from "svelte";
  import { tick } from 'svelte';

  let innerH;
  let temproral;
    onMount(async()=>{
      await tick();
      innerH = 500;
      let top = document.querySelector('.top');
      let bottom = document.querySelector('.bottom');
      let selector = document.querySelector('.selector');
      let footer = document.querySelector('footer');
      let header = document.querySelector('header');
      innerH = top.offsetHeight + bottom.offsetHeight + selector.offsetHeight;
      temproral = top.offsetHeight + bottom.offsetHeight + selector.offsetHeight;

      if(window.innerWidth > window.innerHeight){
        await tick();
        if(innerH === temproral){
          console.log('같음')
        }else{
          innerH = top.offsetHeight + bottom.offsetHeight + selector.offsetHeight;
        }     
      }else{
        await tick();
        if(window.innerHeight === innerH){
          innerH;
        }else{
          innerH = window.innerHeight - header.offsetHeight - selector.clientHeight - footer.clientHeight;
        }      
      }

        window.addEventListener('resize', async ()=>{
            await tick();
            if(window.innerWidth > window.innerHeight){
              await tick();

              innerH = top.offsetHeight + bottom.offsetHeight + selector.offsetHeight;
            }else{
              await tick();

              innerH = window.innerHeight - header.offsetHeight - selector.clientHeight - footer.clientHeight;
            }
        })
    })
</script>
<!-- Header -->
<div id="about_container" style="height: {innerH}px;">
<div class="top">
  <p class="name"><strong>Eun OH</strong></p>
  <p>b.1989, Incheon, KR<br>lives and works in Seoul, KR<br>+82 10-6375-4876<br>bdohhhhh@gmail.com</p>
</div>
<div class="bottom">
  <p><span class ="title"><strong>Education</strong></span><br>
  2017 _ M.F.A Sculpture Hongik Univ. Seoul<br>
  2013 _ B.F.A Sculpture Hongik Univ. Seoul
  </p>
  <p><span class ="title"><strong>Solo Exhibitions</strong></span><br>
    2022 _ SRC _ <a href="https://gpuseoul.com/src">gpuseoul.com/src</a> _ online project<br>
    2020 _ 300 _ 308, digital-ro 33gil 55 _ Seoul<br>
    2019 _ Self Portrait in Durumagi _ studio148 _ Seoul
  </p>
  <p><span class ="title"><strong>Group Exhibitions and Projects</strong></span><br>
    2022 _ Happy New Year, Mr.Lawrence _ GCS _ Seoul<br>
    2021 _ auto _ GPU _ Seoul<br>
    2021 _ INJURY TIME I _  WESS _ Seoul<br>
    2021 _ INJURY TIME _ Museumhead _ Seoul<br>
    2021 _ Against _ Kimsechoong Museum _ Seoul<br>
    2019 _ COVER VERSION _ A-Lounge gallery _ Seoul<br>
    2018 _ BOON _ 17717 _ Seoul<br>
    2016 _ Seoul Babel _ Seoul Museum of Art _ Seoul<br>
    2015~2016 _ Hyperbolic Time Chamber _ Seoul
  </p>
</div>
</div>
