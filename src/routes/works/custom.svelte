<script>
    import { onMount } from 'svelte';
    import { tick } from 'svelte';
    
    let innerH = 500;
    onMount(async () =>{
        let header = document.querySelector('header').getBoundingClientRect().height;
        let footer = document.querySelector('footer').getBoundingClientRect().height;
        let tabMenu = document.querySelector('.worksnav').getBoundingClientRect().height;
        
        await tick();
            innerH = window.innerHeight - header - footer - tabMenu;

        window.addEventListener('resize', async ()=>{
            await tick();
            innerH = window.innerHeight - header - footer - tabMenu ;
        })
    });

</script>
<slot name="custom">
    <div style="height:{innerH}px; display: flex; align-items: center;">
        <div class="works_def">
        <!-- <div class="works_def" style="height:100%"> -->
            <h3>년도를 선택하세요 {':)'}</h3>
        </div>
    </div>

    <style>
        .works_def{
            /* margin: 30vh 5vw 30vh 5vw; */
            width: 100%;
            /* height: 100%; */
            /* height: calc(100vh - 250px); */
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            transition: all 0.5s linear;
        }
    </style>
</slot>