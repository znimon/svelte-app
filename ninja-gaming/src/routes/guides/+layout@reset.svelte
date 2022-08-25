<script>
    import Navbar from "$lib/navbar.svelte";
    import "../../app.css";
</script>


<header>
    <Navbar title="Ninja Gaming Stuff"/>
</header>

<main>
    <!-- page content -->
    <div id="main-content" class="content">
      <slot></slot>
    </div>
</main>

<footer class="bg-gray-900">
  <div class="relative max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:pt-24">
    <p class="text-sm text-center text-gray-400 lg:text-right">
      Copyright &copy; 2022. All rights reserved.
    </p>
  </div>
</footer>