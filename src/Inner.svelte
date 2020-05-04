<script>
    let collapsed = true;

    function toggleSideBar() {
        if(collapsed){
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
        background-color: #4CAF50;
        color: white;
    }

    .sidebar-collapsed a.active {
        background-color: #4CAF50;
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
        div.content {margin-left: 0;}
    }

    @media screen and (max-width: 400px) {
        .sidebar .sidebar-collapsed a {
            text-align: center;
            float: none;
        }
    }
</style>
{#if collapsed}
    <div class="sidebar-collapsed">
        <a class="active" href="#">
            <span><i class="fa fa-fw fa-home"></i></span>
        </a>
        <a href="#">
            <span><i class="fa fa-fw fa-search"></i></span>
        </a>
        <a href="#">
            <span><i class="fa fa-fw fa-envelope"></i></span>
        </a>
        <a href="#">
            <span><i class="fa fa-fw fa-user"></i></span>
        </a>
        <a href="/#" on:click={toggleSideBar({collapsed})}>
            <span><i class="fa fa-2x mr-3 fa-angle-double-right"></i></span>
        </a>
    </div>
{:else}
    <div class="sidebar">
        <a class="active" href="#">
            <span><i class="fa fa-fw fa-home"></i></span>
            <span>Home</span>
        </a>
        <a href="#">
            <span><i class="fa fa-fw fa-search"></i></span>
            <span>Search</span>
        </a>
        <a href="#">
            <span><i class="fa fa-fw fa-envelope"></i></span>
            <span>Contact</span>
        </a>
        <a href="#">
            <span><i class="fa fa-fw fa-user"></i></span>
            <span>Login</span>
        </a>
        <a href="/#" on:click={toggleSideBar({collapsed})}>
            <span><i class="fa fa-2x mr-3 fa-angle-double-left"></i></span>
            <span>Collapse</span>
        </a>
    </div>
{/if}

{#if collapsed}
    <div class="content-collapsed">
        <h2>Responsive Sidebar Example</h2>
        <p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
        <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
        <h3>Resize the browser window to see the effect.</h3>
    </div>
{:else}
    <div class="content">
        <h2>Responsive Sidebar Example</h2>
        <p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
        <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
        <h3>Resize the browser window to see the effect.</h3>
    </div>
{/if}}