<script>
    import DATA from './../static/data';
    import PageContent from "./PageContent.svelte";

    export let pagelink = {};

    export let sidebarItem = [];
    export let toggleItem = [];
    let collapsed = true;

    function toggleSideBar() {
        if (collapsed) {
            collapsed = false;
        } else {
            collapsed = true;
        }
    }
</script>

<style>
    .sidebar {
        margin: 0;
        padding: 0;
        width: 200px;
        background-color: #f1f1f1;
        position: fixed;
        height: 100%;
        overflow: auto;
    }
    .sidebar-collapsed {
        margin: 0;
        padding: 0;
        width: 50px;
        background-color: #f1f1f1;
        position: fixed;
        height: 100%;
        overflow: auto;
    }

    .sidebar a {
        display: block;
        color: black;
        padding: 16px;
        text-decoration: none;
    }

    .sidebar-collapsed a {
        display: block;
        color: black;
        padding: 16px;
        text-decoration: none;
    }

    .sidebar a.active {
        background-color: #0434AF;
        color: white;
    }

    .sidebar-collapsed a.active {
        background-color: #0434AF;
        color: white;
    }

    .sidebar a:hover:not(.active) {
        background-color: #555;
        color: white;
    }

    .sidebar-collapsed a:hover:not(.active) {
        background-color: #555;
        color: white;
    }

    div.content {
        margin-left: 200px;
        padding: 1px 15px;
        height: 1000px;
        position: relative;
    }

    div.content-collapsed {
        margin-left: 50px;
        padding: 1px 15px;
        height: 1000px;
        position: relative;
    }

    @media screen and (max-width: 700px) {
        .sidebar .sidebar-collapsed {
            width: 100%;
            height: auto;
            position: relative;
        }
        .sidebar .sidebar-collapsed a {float: left;}
        div.content div.content-collapsed {margin-left: 0;}
    }

    @media screen and (max-width: 400px) {
        .sidebar .sidebar-collapsed a {
            text-align: center;
            float: none;
        }
    }
</style>
<section class="sidebarnav" id="sidebarnav">
{#if collapsed}
    <div class="sidebar-collapsed">
        {#each sidebarItem as item}
            {#if item.active }
                <a class="active" href="#">
                    <span><i class={item.faclass}></i></span>
                </a>
            {:else}
                <a href="#">
                    <span><i class={item.faclass}></i></span>
                </a>
            {/if}
        {/each}
        {#if toggleItem[1] }
            <a href="/#" on:click={toggleSideBar({collapsed})}>
                <span><i class={toggleItem[1].faclass}></i></span>
            </a>
        {/if}
    </div>
{:else}
    <div class="sidebar">
        {#each sidebarItem as item}
            {#if item.active }
                <a class="active" href="#">
                    <span><i class={item.faclass}></i></span>
                    <span>{item.label}</span>
                </a>
            {:else}
                <a href="#">
                    <span><i class={item.faclass}></i></span>
                    <span>{item.label}</span>
                </a>
            {/if}
        {/each}
        {#if toggleItem[0] }
            <a href="/#" on:click={toggleSideBar({collapsed})}>
                <span><i class={toggleItem[0].faclass}></i></span>
                <span>{toggleItem[0].label}</span>
            </a>
        {/if}
    </div>
{/if}
</section>
{#if collapsed}
    <div class="content-collapsed">
        <PageContent serviceData={pagelink}/>
    </div>
{:else}
    <div class="content">
        <PageContent serviceData={pagelink}/>
    </div>
{/if}}