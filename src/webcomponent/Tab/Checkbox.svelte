<script>
    export let checked = true;
</script>

<label>
    <input type=checkbox bind:checked={checked}>
    <slot />
</label>
