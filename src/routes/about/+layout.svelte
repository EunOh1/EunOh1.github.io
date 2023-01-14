<script>
</script>
<!-- Header -->
<div class="selector">
    <h2><a href="/about/en">EN</a>/<a href="/about/ko">KO</a></h2>
</div>
<slot></slot>
<style>
  .selector {
    padding: 4vh 4vh;
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
</style>