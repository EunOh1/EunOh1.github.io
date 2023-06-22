<script>
  let toPost = { key: '', value: ''};
  let toGet = '';

  function getFetch(){
    if(!toGet){
      alert('please input');
      return;
    }
    
    let params = new URLSearchParams({
      key: toGet
    });

    fetch(`https://eunoh.pages.dev/artfunction?${params.toString()}`,{
      method: 'GET',
    })
      .then(response => {
        console.log(response);
        response.json();
      })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  async function postFetch(){
    if(!toPost.key || !toPost.value){
      alert('please input');
      return;
    }

    const response = await fetch('https://eunoh.pages.dev/artfunction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        key: toPost.key,
        value: toPost.value
      }),
    });
    const data = await response.text();
    console.log(data);

    toPost = { key: '', value: ''};
  }
      
</script>
<div>
  <input id="get" placeholder="toGet" on:change={(e) => {
    toGet = e.target.value;
  }}>
  <button on:click={getFetch}>get</button>
  <input id="key" placeholder="key" on:change={(e) => {
    toPost.key = e.target.value;
  }}>
  <input id="value" placeholder="value" on:change={(e) => {
    toPost.value = e.target.value;
  }}>
  <button on:click={()=>{
    try{
      postFetch()
    } catch(err) {
      console.log(err);
    }
  }}>post</button>
</div>
<slot></slot>

<style>
</style>
