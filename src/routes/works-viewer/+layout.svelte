<script>
</script>
<!-- Header -->
<div class="mak"></div>
<slot></slot>
<style>
    .mak{
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: calc(var(--vh, 1vh) * 100);
        z-index: 8000;
        background: rgba(255, 255, 255, 1);
    }
</style>