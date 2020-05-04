/**src/Data/data.js**/
const HEADER = "rdkv inc";

const NAVBAR_DATA = [
    { faclass: "fa fa-fw fa-home", label: "Home", active: true  },
    { faclass: "fa fa-fw fa-search", label: "Search", active: false  },
    { faclass: "fa fa-fw fa-envelope", label: "Contact", active: false  },
    { faclass: "fa fa-fw fa-user", label: "Login", active: false  }
];

const SIDEBAR_DATA = {
    ITEM: [
        { faclass: "fa fa-fw fa-home", label: "Home", active: true  },
        { faclass: "fa fa-fw fa-search", label: "Search", active: false  },
        { faclass: "fa fa-fw fa-envelope", label: "Contact", active: false  },
        { faclass: "fa fa-fw fa-user", label: "Login", active: false  }
    ],
    TOGGLE: [
        { faclass: "fa fa-2x mr-3 fa-angle-double-left", label: "Minimize" },
        { faclass: "fa fa-2x mr-3 fa-angle-double-right", label: "" }
    ],
    PAGECONTENT: '<h2>Responsive Sidebar Example</h2>' +
        '<p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>' +
        '<p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>' +
        '<h3>Resize the browser window to see the effect.</h3>'
};
const SERVICE_DATA = {
    HEADING: "Job Trigger Summary",
    URL: "https://node-hnapi.herokuapp.com/news?page=",
    SERVICE_LIST: [
        { title: "Cron", api: "Cron API", page: "1" },
        { title: "Data", api: "Data API", page: "2" },
        { title: "State", api: "State API", page: "3" }
    ]
};

const FOOTER_DATA = {
    DESCRIPTION: "We are typically focused on result-based maketing in the digital world. Also, we evaluate your brand’s needs and develop a powerful strategy that maximizes profits.",
    CONTACT_DETAILS: {
        HEADING: "Batch Scheduler Wiki",
        ADDRESS: "Wiki/int 1",
        MOBILE: "Wiki/int 2",
        EMAIL: "Wiki/int 3"
    }
};

const DATA = {
    HEADER,
    NAVBAR_DATA,
    SIDEBAR_DATA,
    SERVICE_DATA,
    FOOTER_DATA
};
export default DATA;