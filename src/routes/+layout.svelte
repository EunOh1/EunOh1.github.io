<script>
    import { MetaTags, JsonLd } from 'svelte-meta-tags';

//     twitter={{
//     handle: '@handle',
//     site: '@site',
//     cardType: 'summary_large_image',
//     title: "Eun Oh's Website",
//     description: "This is Eun Oh's website",
//     image: '/assets/balzac.jpg',
//     imageAlt: 'Twitter image alt'
//   }}
//   facebook={{
//     appId: '1234567890'
//   }}

    let items = [
        {
          label: "Works",
		      value: 1,
          href:"/works"
		//  component: Tab1
		},
        {
          label: "Texts",
		      value: 2,
          href:"/texts"
		//  component: Tab2
		},
        {
          label: "About",
		      value: 3,
          href:"/about"
		//  component: Tab3
		}
  ];
    let activeTabValue = 0;

    const handleClick = tabValue => () => (activeTabValue = tabValue);
    const eunohClick = tabValue => () => (activeTabValue = 99);
    // let def_menu = 'def-menu';
    // let selected = 'selected';
    // let isTrue = false;
    // let myActiveClass = 'selected';
    import "./+layout_style.css";
</script>
 <MetaTags
  title="Eun Oh's website"
	titleTemplate = '%s | Svelte Meta Tags'
  description="This is Eun Oh's website"
  canonical="https://eunoh1.github.io/"
  openGraph={{
    url: 'https://eunoh1.github.io/',
    title: "Eun Oh' website",
    description: "This is Eun Oh's website",
    images: [
      {
        url: 'https://github.com/EunOh1/public/blob/f66e0067229129127878b70adb58304fcbabd6db/balzac.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt'
      },
      {
        url: 'https://github.com/EunOh1/public/blob/f66e0067229129127878b70adb58304fcbabd6db/balzac.jpg',
        width: 900,
        height: 800,
        alt: 'Og Image Alt Second'
      },
      { url: 'https://github.com/EunOh1/public/blob/f66e0067229129127878b70adb58304fcbabd6db/balzac.jpg' },
      { url: 'https://github.com/EunOh1/public/blob/f66e0067229129127878b70adb58304fcbabd6db/balzac.jpg' }
    ],
    site_name: "Eun Oh's Website"
  }}
/>
<JsonLd
schema={{
    '@type': 'Article',
    mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://eunoh1.github.io/works'
    },
    headline: 'Works',
    image: [
        '/assets/balzac.jpg',
    ],
    datePublished: '2023-01-10T08:00:00+08:00',
    dateModified: '2023-01-10T09:20:00+08:00',
    author: {
        '@type': 'Person',
        name: 'Eun Oh'
    },
    publisher: {
        '@type': 'Organization',
        name: 'screen',
        logo: {
            '@type': 'ImageObject',
            url: 'https://eunoh1.github.io/works'
        }
    }
}}
/>
<svelte:head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<title>Eun Oh's Home</title>
</svelte:head>
<header>
    <nav>
        <ul class="top-menu">
            <li class="eunoh"><a on:click={eunohClick()} href='/'>EunOh</a></li> 
            {#each items as item}          
            <li class="def-menu {activeTabValue === item.value ? 'active' : ''}"><a on:click={handleClick(item.value)} href={item.href}>{item.label}</a></li>
            {/each}
            <li class="insta-menu"><a rel='noreferrer' href="https://instagram.com/eunohhh" target="_blank">  </a></li>
        </ul>
    </nav>
</header>

<slot></slot>

<footer>
    <div class="footer">
        <p>copyright 2022. Eun Oh. all rights reserved.</p>
    </div>
</footer>
<style>
  * {
    margin: 0.5vh 0 0.5vh 0;
  }

  *:global(*){
    margin: 0;
    font-family: 'Rubik', 'Malgun Gothic', '맑은 고딕', sans-serif;
  }
</style>
