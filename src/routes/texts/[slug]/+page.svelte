<script>
    import "../+texts_style.css"
    export let data;
    // console.log(data)
</script>

<div class='txt-container'>
    <h2 class="txt-title">{data.title}</h2><br>
    <p class='sub-title'>{data.author}</p><br>
    <div class='p-container'>
        <p class="text">{@html data.txt}</p>
    </div>
</div>