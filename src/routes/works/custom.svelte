<script>
    import { onMount } from 'svelte';
    import { tick } from 'svelte';
    let innerH;
    onMount(async () =>{
        let header = document.querySelector('.top-menu');
        let footer = document.querySelector('footer');
        let tabMenu = document.querySelector('.ul-tab-menu');
        
        innerH = 500;
        await tick();
            innerH = window.innerHeight - header.clientHeight - footer.clientHeight - tabMenu.clientHeight;

        window.addEventListener('resize', async ()=>{
            await tick();
            innerH = window.innerHeight - header.clientHeight - footer.clientHeight - tabMenu.clientHeight;
        })
    });

</script>
<slot name="custom">
    <div class="works_def" style="height:{innerH}px">
        <h3>년도를 선택하세요 {':)'}</h3>
    </div>
    <style>
        .works_def{
            /* margin: 30vh 5vw 30vh 5vw; */
            width: 100vw;
            /* height: calc(100vh - 250px); */
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            transition: all 0.5s linear;
        }
    </style>
</slot>