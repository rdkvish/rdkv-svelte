<script>
	import Navbar from "./webcomponent/Navbar.svelte";
	import DATA from './static/data'
	// import Sidebar from "./webcomponent/Sidebar.svelte";
	import PageContent from "./webcomponent/PageContent.svelte";
</script>

<Navbar navlists={DATA.NAVBAR_DATA} header={DATA.HEADER} />
<!--<Sidebar sidebarItem={DATA.SIDEBAR_DATA.ITEM} toggleItem={DATA.SIDEBAR_DATA.TOGGLE} pagelink={DATA.SERVICE_DATA}/>-->
<PageContent serviceData={DATA.SERVICE_DATA} />
