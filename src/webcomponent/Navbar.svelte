<script>
    export let navlists = [];
    export let header;
</script>
<!----------------MARKUP----------------------->
<section id="nav-bar">
    <nav class="navbar main-bgcolor navbar-expand-md navbar-dark">
        <a class="navbar-brand company_brand" href="/">
            {header}
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                {#each navlists as item}
                    {#if item.active }
                    <li class="nav-item">
                        <a class="active" href="#">
                            <span><i class={item.faclass}></i></span>
                            <span>{item.label}</span>
                        </a>
                    </li>
                    {:else}
                        <li class="nav-item">
                        <a href="#">
                            <span><i class={item.faclass}></i></span>
                            <span>{item.label}</span>
                        </a>
                        </li>
                    {/if}
                {/each}
            </ul>
        </div>
    </nav>
</section>
<style>
    #nav-bar {
        position: sticky;
        top: 0;
        z-index: 10;
        background-color: #000000;
    }

    .company_brand {
        color: #dddddd;
    }

    .navbar {
        padding: 0 20px !important;
    }

    .navbar-nav li {
        padding: 0 0 0 20px;
    }

    .navbar-nav li a {
        font-weight: 600;
        /* text-transform: uppercase; */
        float: right;
        text-align: left;
        color: #dddddd;
    }
</style>