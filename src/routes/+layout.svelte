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
  canonical="https://eunoh.pages.dev/"
  openGraph={{
    url: 'https://eunoh.pages.dev/',
    title: "Eun Oh's website",
    description: "This is Eun Oh's website",
    images: [
      {
        url: 'https://raw.githubusercontent.com/EunOh1/public/f66e0067229129127878b70adb58304fcbabd6db/balzac.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt'
      }
    ],
    site_name: "Eun Oh's Website"
  }}
  twitter={{
    cardType: 'summary_large_image',
    title: "Eun Oh's website",
    description: 'Twitter',
    image: 'https://raw.githubusercontent.com/EunOh1/public/f66e0067229129127878b70adb58304fcbabd6db/balzac.jpg',
  }}
/>
<JsonLd
schema={{
    '@type': 'Article',
    mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://eunoh.pages.dev/works'
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
            url: 'https://screenxyz.net/wp-content/uploads/2022/03/221204_simbol.png'
        }
    }
}}
/>
<svelte:head>
<meta itemprop="name" content="Eun Oh's Website">
<meta itemprop="description" content="This is Eun Oh's website">
<meta itemprop="image" content="https://raw.githubusercontent.com/EunOh1/public/f66e0067229129127878b70adb58304fcbabd6db/balzac.jpg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rubik&family=Rubik+Bubbles&display=swap" rel="stylesheet">
<title>Eun Oh's Home</title>
</svelte:head>
<header>
    <nav>
        <ul class="top-menu">
            <li class="eunoh"><a on:click={eunohClick()} href='/'>EunOh</a></li> 
            {#each items as item}          
            <li class="def-menu {activeTabValue === item.value ? 'active' : ''}"><a on:click={handleClick(item.value)} href={item.href}>{item.label}</a></li>
            {/each}
            <li class="insta-menu"><a rel='noreferrer' href="https://instagram.com/eunohhh" target="_blank">뷁</a></li>
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
</style>
