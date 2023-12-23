<script>
</script>
<div class="container_showcase">
    <iframe 
        title="srcIframe"
        id="myIframe" 
        class="showcaseTop"
        width="100%" 
        height="100%"
        allow="geolocation xr-spatial-tracking=*"
        allowFullScreen
        src="https://xr.screenxyz.net/src"
    ></iframe>
</div>
<style>
    .container_showcase {
        width: 100vw;
        height: 100vh;
        height: calc(var(--vh, 1vh) * 100);
        margin: 0;
        border: none;
        padding: 0;
        overflow: hidden;
        box-sizing: border-box;
        z-index: 1000;
    }
    .showcaseTop {
        /* height: 100vh;
        height: calc(var(--vh, 1vh) * 100); */
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        transition: all 1s;
        overflow: hidden;
        border-width: 0;
        z-index: 1001;
    }
    @media screen and (max-width:767px){
        .showcaseTop {
            position: absolute;
            height: 100vh;
            height: calc(var(--vh, 1vh) * 100);
            margin: none;
            border: 0;
            padding: 0;
            z-index: -1;
            transition: all 1s;
        }
    }
</style>