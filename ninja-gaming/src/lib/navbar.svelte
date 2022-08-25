<script>
    import { page } from "$app/stores";
    
    export let title = "Ninja Gaming"

    const nav = [
      { title: "Home", path: "/" },
      { title: "About", path: "/about" },
      { title: "Guides", path: "/guides" },
    ];
</script>

<nav class="flex items-center justify-between max-w-3xl p-4 mx-auto mt-6">
    <a
      class="inline-flex items-center justify-center w-10 h-10 bg-white-100 rounded-lg"
      href="/"
    >
        <img src="/controller.svg" alt="site logo">
        <h2 class="ml-4">{ title }</h2>
    </a>
  
    <ul class="flex items-center space-x-2 text-sm font-medium text-gray-500">
      {#each nav as item }
        <li><a class:text-blue-600={$page.url.pathname === item.path} class="hover:underline px-3 py-2 rounded-lg" href={item.path}> {item.title} </a></li>
      {/each}
    </ul>
  </nav>
