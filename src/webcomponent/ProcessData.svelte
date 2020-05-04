<script>
    import {setContext} from 'svelte';
    import {getContext} from 'svelte';
    import Table from "./Table.svelte";
    import Checkbox from "./Tab/Checkbox.svelte";

    export let data = {};

    let obj = data[0];
    let objectKeyList = getObjectKeys();

    let columns = objectKeyList;

    function getObjectKeys() {
        let list = [];
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                list.push(key);
            }
        }
        return list;
    }

    if(columns.length >= 5){
        columns = columns.slice(0, 5)
    }

</script>

<style>
    .checkbox-inline{
        display: inline;
        text-align: left;
        word-spacing: 25%;
    }
</style>

<div>
{#each objectKeyList as column}
    <label class="checkbox-inline">
        <input type=checkbox bind:group={columns} value={column}>
        {column}
    </label>
{/each}
</div>

{#if columns.length === 0}
    <p>Please select at least one column.</p>
{/if}
<Table data={data} objectKeyList={columns} />