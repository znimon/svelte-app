<script>
    /** @type {import('./$types').PageData} */
    export let data
</script>


<div class="guides">
    <ul>
        {#each data.guides as guide}
            <li>
                <a sveltekit:prefetch href={`/guides/${guide.id}`}>{ guide.title }</a>
            </li>
        {/each}
    </ul>
</div>