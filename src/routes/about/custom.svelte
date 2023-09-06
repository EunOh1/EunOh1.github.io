<script>
  import "./+about_style.css"
  // import { onMount } from "svelte";
  // import { tick } from 'svelte';

  // let innerH;
  // let temproral;
  //   onMount(async()=>{
  //     await tick();
  //     let top = document.querySelector('.top');
  //     let bottom = document.querySelector('.bottom');
  //     let selector = document.querySelector('.selector');
  //     let footer = document.querySelector('footer');
  //     let header = document.querySelector('header');
  //     innerH = top.offsetHeight + bottom.offsetHeight + selector.offsetHeight;
  //     temproral = top.offsetHeight + bottom.offsetHeight + selector.offsetHeight;

  //     if(window.innerWidth > window.innerHeight){
  //       await tick();
  //       if(innerH === temproral){
  //         console.log('같음')
  //       }else{
  //         innerH = top.offsetHeight + bottom.offsetHeight + selector.offsetHeight;
  //       }
  //     }else{
  //       await tick();
  //       if(window.innerHeight === innerH){
  //         innerH;
  //       }else{
  //         innerH = window.innerHeight - header.offsetHeight - selector.clientHeight - footer.clientHeight;
  //       }
  //     }

  //       window.addEventListener('resize', async ()=>{
  //           await tick();
  //           if(window.innerWidth > window.innerHeight){
  //             await tick();
  //             innerH = top.offsetHeight + bottom.offsetHeight + selector.offsetHeight;
  //           }else{
  //             await tick();
  //             innerH = window.innerHeight - header.offsetHeight - selector.clientHeight - footer.clientHeight;
  //           }
  //       })
  //   })
</script>
<slot name="ko">
<div id="about_container" style = "height: 100%;">
<div class="top">
  <p class="name"><strong>오은 吳垠</strong></p>
  <p>1989 인천 출생<br>서울 거주 및 작업<br>+82 10-6375-4876<br>bdohhhhh@gmail.com</p>
</div>
<div class="bottom">
  <p><span class ="title"><strong>Education</strong></span><br>
  2017 _ 홍익대학교 대학원 조소과 졸업<br>
  2013 _ 홍익대학교 조소과 졸업
  </p>
  <p><span class ="title"><strong>Solo Exhibitions</strong></span><br>
    2022 _ SRC _ <a href="https://gpuseoul.com/src">gpuseoul.com/src</a> _ 온라인<br>
    2020 _ 300 _ 디지털로33길 55 308호 _ 서울<br>
    2019 _ 두루마기 입은 자화상 _ studio148 _ 서울
  </p>
  <p><span class ="title"><strong>Group Exhibitions and Projects</strong></span><br>
    2022 _ 해피뉴이어, 미스터로렌스 _ GCS _ 서울<br>
    2021 _ auto _ GPU _ 서울<br>
    2021 _ INJURY TIME I _  WESS _ 서울<br>
    2021 _ INJURY TIME _ 뮤지엄헤드 _ 서울<br>
    2021 _ Against _ 김세중미술관 _ 서울<br>
    2019 _ COVER VERSION _ A-Lounge gallery _ 서울<br>
    2018 _ BOON _ 17717 _ 서울<br>
    2016 _ 서울바벨 _ 서울시립미술관 _ 서울<br>
    2015~2016 _ 정신과 시간의 방 _ 서울
  </p>
</div>
</div>
</slot>