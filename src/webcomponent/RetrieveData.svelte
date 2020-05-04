<script>
    import ProcessData from "./ProcessData.svelte";
    export let url;
    let promise = getData();

    async function getData() {
        const res = await fetch(url);
        const text = await res.json();

        if (res.ok) {
            return text;
        } else {
            throw new Error(text);
        }
    }

    function handleClick() {
        promise = getData();
    }
</script>

<div on:load={handleClick}>
{#await promise}
    <div class="spinner-grow text-success" style="width: 3rem; height: 3rem;" role="status">
        <span class="sr-only">Loading...</span>
    </div>
{:then data}
    <ProcessData data={data} />
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
</div>