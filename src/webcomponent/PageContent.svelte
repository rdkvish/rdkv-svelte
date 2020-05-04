<script>
    import {Tabs, TabList, TabPanel, Tab} from './Tab/tabs.js';
    import PageContent from "./PageContent.svelte";
    import RetrieveData from "./RetrieveData.svelte";

    export let serviceData = {};
    let count = 0;

    const {
        HEADING,
        URL,
        SERVICE_LIST
    } = serviceData;
</script>
<div class="container text-center">
    <h2 class="title">{HEADING}</h2>
    <Tabs>
        <TabList>
            {#each SERVICE_LIST as item}
                <Tab><h3>{item.title}</h3></Tab>
            {/each}
        </TabList>
        {#each SERVICE_LIST as item}
            <TabPanel>
                <RetrieveData url={URL}{item.page} />
            </TabPanel>
        {/each}
    </Tabs>
</div>