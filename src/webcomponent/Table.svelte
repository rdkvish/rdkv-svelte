<script>
    export let data;
    export let objectKeyList = [];

    let isWebUrl = false;

    function checkForWebUrl(value) {
        if(value.indexOf('http') === 0 && value.indexOf('https') === 0){
            isWebUrl = true;
        }
        return value;
    }

</script>

<table class="table" id="table-id">
    <thead class="thead-light">
    <tr>
        {#each objectKeyList as key}
            <th scope="col">{key}</th>
        {/each}
    </tr>
    </thead>
    <tbody>
    {#each data as d}
        <tr>
            {#each objectKeyList as key}
                <td>{d[key]}</td>
            {/each}
        </tr>
    {/each}
    </tbody>
</table>