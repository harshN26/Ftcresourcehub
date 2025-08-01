// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore, doc, setDoc, increment } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBS5tt47kdVKZbX-5TToaGFKbSoTKTl1b4",
    authDomain: "ftcresourcelocator.firebaseapp.com",
    projectId: "ftcresourcelocator",
    storageBucket: "ftcresourcelocator.firebasestorage.app",
    messagingSenderId: "211095332815",
    appId: "1:211095332815:web:780d94aee93195ba1494ba",
    measurementId: "G-5816VQRNK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ⬇️ Your rendering logic (add this inside your renderPost or wherever you create the links)
async function trackClick(title) {
    try {
        const docRef = doc(db, "ClickCounter", title);
        await setDoc(docRef, { click: increment(1) }, { merge: true });
        await setDoc(doc(db, "ClickCounter", "totalClicks"), { click: increment(1) }, { merge: true });
        console.log(`Click tracked for "${title}"`);
    } catch (error) {
        console.error("Error tracking click:", error);
    }
}


/** List of all tags that create sections */
const viewableTags = [
    "everything",
    "season resource",
    "team made",
    "example",

    // programming subs
    "programming",
    "vision",
    "limelight",
    "opencv",
    "PID",
    "tuning",
    "motion profiling",
    "localization",
    "path following",
    "visualizer",
    "general programming resource",
    "command system",

    // mechanical subs
    "mechanical",
    "lifts", "elevators", "slides",
    "outtake",
    "passive intake",
    "active intake",

    "manufacturing",
    "general mechanical resource",
    "swerve",
    "drivetrain",
    "filaments",
    "3d printer",
    "cnc",
    "laser-cutting",
    "water-jet",
    "general cad resource",

    //electrical
    "electrical",
    "servo",
    "motor",
    "Control System",
    "motor",
    "Servo hub",


    // cad subs
    "CAD",
    "fusion",
    "onshape",
    "featurescripts",
    "parts library",
    "rendering",


    // business subs
    "business",
    "sponsors",
    "fundraising",

    // outreach subs
    "outreach",
    "emails",
    "mentors",
    "events",

    //scouting
    "scouting",
    "strategy",

    //comp
    "awards/portfolio",
    "pits",
    "competition inner-workings",


    //vendors:
    "vendors",

    //discord
    "discord invite"

];

/** Tags to NOT show as sections, but allowed for filtering */
const unviewableTags = [
    "new",
    "trending",
    "generally popular",
    "most useful",

    //rot
    "ftc rot"
];

const defaultSectionOrder = [
    "trending",
    "everything",
    "season resource",
    "mechanical",
    "programming",
    "scouting",
    "business",
    "outreach",
    "cad",
    "vision",
    "strategy",
    "vendors",
    "team made",
    "discord invite"
];

const resources = [
    {
        title: "gm0",
        description: "Guide to get started with FTC concepts",
        links: [{ label: "gm0.org", url: "https://gm0.org" }],
        tags: ["everything"]
    },
    {
        title: "FTC docs",
        description: "Guide to get started with FTC concepts",
        links: [{ label: "FTC Docs", url: "https://ftc-docs.firstinspires.org/en/latest/" }],
        tags: ["everything"]
    },
    {
        title: "FTClib",
        description: "FTClib command base documentation and explanations + pure pursuit explanation",
        links: [{ label: "FTClib", url: "https://docs.ftclib.org/ftclib/" }],
        tags: ["programming", "path following", "PID", "motion profiling", "command system"]
    },
    {
        title: "25679 Grants Spreadsheet",
        description: "small list of potential grant opportunities.",
        links: [{ label: "25679 Grands Google Spreadsheet", url: "https://docs.google.com/spreadsheets/d/1r3xjIrP7uX1hlVNqKqBSDIXmQeQRP2pLLYg5KN7jqs4/edit?gid=0#gid=0" }],
        tags: ["business", "sponsorship"]
    },
    {
        title: "FTCScout",
        description: "scouting site",
        links: [{ label: "FTC Scout", url: "https://ftcscout.org" }],
        tags: ["scouting", "strategy"]
    },
    {
        title: "Pedro Pathing Docs",
        description: "Fast path-following",
        links: [{ label: "pedro pathing docs", url: "https://pedropathing.com" }],
        tags: ["programming", "path following"]
    },
    {
        title: "Road Runner Docs",
        description: "path-following",
        links: [{ label: "Road runner docs", url: "https://rr.brott.dev/" }],
        tags: ["programming", "path following"]
    },
    {
        title: "Limelight Docs",
        description: "vision - only look at documentation for Limelight 3A",
        links: [{ label: "Limelight docs", url: "https://docs.limelightvision.io/docs/docs-limelight/getting-started/summary" }],
        tags: ["programming", "vision", "limelight"]
    },
    {
        title: "FIRST Q&A",
        description: "place for official game questions and official answers",
        links: [{ label: "FIRST Q&A", url: "https://ftc-qa.firstinspires.org/" }],
        tags: ["season resource"]
    },
    {
        title: "Competition Manual and Team Updates",
        description: "place to find the game manual and team updates for the game manual",
        links: [{ label: "FIRST Competition Resources", url: "https://www.firstinspires.org/resource-library/ftc/game-and-season-info" }],
        tags: ["season resource"]
    },
    {
        title: "ftcpitstop",
        description: "scouting site for teams at a specific event",
        links: [{ label: "Pitstop", url: "https://www.ftcpitstop.com/" }],
        tags: ["scouting", "strategy"]
    },
    {
        title: "FIRST Resource Library",
        description: "collection of official FIRST articles detailing a variety of topics",
        links: [{ label: "FIRST resource library", url: "https://www.firstinspires.org/resource-library?field_content_type_value%5B%5D=first_tech_challenge" }],
        tags: ["everything"]
    },
    {
        title: "Learn Java for FTC",
        description: "An introduction to programming FTC robots in Java.",
        links: [{ label: "LJ4FTC", url: "https://raw.githubusercontent.com/alan412/LearnJavaForFTC/master/LearnJavaForFTC.pdf " }],
        tags: ["programming", "general programming resource"]
    },
    {
        title: "Intro to FTC Programming",
        description: "An introduction to programming FTC robots in Java.",
        links: [{ label: "Intro to FTC Programming", url: "https://raw.githubusercontent.com/alan412/LearnJavaForFTC/master/LearnJavaForFTC.pdf " }],
        tags: ["programming", "general programming resource"]
    },
    // add more resources
];

const sectionsContainer = document.getElementById("sectionsContainer");
const searchInput = document.getElementById("searchInput");

let tagClickMode = false;

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function renderPost(post) {
    const postDiv = document.createElement("div");
    postDiv.className = "post";

    const title = document.createElement("h3");
    title.textContent = post.title;

    const desc = document.createElement("p");
    desc.textContent = post.description;

    const linksContainer = document.createElement("div");
    linksContainer.className = "post-links";
    post.links.forEach(linkObj => {
        const link = document.createElement("a");
        link.href = linkObj.url;
        link.target = "_blank";
        link.textContent = linkObj.label;

        //  Track clicks
        link.addEventListener("click", () => {
            trackClick(post.title);
        });

        linksContainer.appendChild(link);
    });

    const tagsContainer = document.createElement("div");
    tagsContainer.className = "post-tags";
    post.tags.forEach(tag => {
        const tagEl = document.createElement("span");
        tagEl.textContent = tag;
        tagsContainer.appendChild(tagEl);
    });

    postDiv.appendChild(title);
    postDiv.appendChild(desc);
    postDiv.appendChild(linksContainer);
    postDiv.appendChild(tagsContainer);

    return postDiv;
}

function renderSection(tag, posts) {
    if (!posts || posts.length === 0) return null;

    const section = document.createElement("div");
    section.className = "section";

    const header = document.createElement("h2");
    header.innerHTML = `<span>${capitalize(tag)}</span> <span class="toggle-icon">▼</span>`;
    header.addEventListener("click", () => {
        section.classList.toggle("collapsed");
    });

    const postsContainer = document.createElement("div");
    postsContainer.className = "posts";
    posts.forEach(post => postsContainer.appendChild(renderPost(post)));

    section.appendChild(header);
    section.appendChild(postsContainer);
    return section;
}

function getTrendingPosts(posts) {
    return posts.filter(p => p.tags.map(t => t.toLowerCase()).includes("trending"));
}

function excludeTrendingPosts(posts) {
    return posts.filter(p => !p.tags.map(t => t.toLowerCase()).includes("trending"));
}

function getAllTags(posts) {
    const all = new Set();
    posts.forEach(post => post.tags.forEach(tag => all.add(tag.toLowerCase())));
    return Array.from(all);
}

function renderAllSections(filteredPosts, useDefaultOrder = true) {
    sectionsContainer.innerHTML = "";

    const trendingPosts = getTrendingPosts(filteredPosts);
    const normalPosts = excludeTrendingPosts(filteredPosts);

    const tagToPosts = {};
    const tagsToShow = useDefaultOrder ? defaultSectionOrder : getAllTags(filteredPosts);

    tagsToShow.forEach(tag => tagToPosts[tag] = []);

    normalPosts.forEach(post => {
        post.tags.forEach(tag => {
            const lowerTag = tag.toLowerCase();
            if (tagsToShow.includes(lowerTag)) {
                tagToPosts[lowerTag].push(post);
            }
        });
    });

    if (tagsToShow.includes("trending") && trendingPosts.length > 0) {
        const trendingSection = renderSection("trending", trendingPosts);
        if (trendingSection) sectionsContainer.appendChild(trendingSection);
    }

    tagsToShow.forEach(tag => {
        if (tag === "trending") return;
        const section = renderSection(tag, tagToPosts[tag]);
        if (section) sectionsContainer.appendChild(section);
    });
}

function filterResources(query) {
    const q = query.toLowerCase().trim();
    if (!q) return resources;

    return resources.filter(post =>
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.tags.some(tag => tag.toLowerCase().includes(q))
    );
}

function renderFlatList(posts) {
    sectionsContainer.innerHTML = "";
    const wrapper = document.createElement("div");
    wrapper.className = "flat-posts";
    posts.forEach(post => wrapper.appendChild(renderPost(post)));
    sectionsContainer.appendChild(wrapper);
}

function performSearch(query) {
    const trimmedQuery = query.trim();
    const filtered = filterResources(trimmedQuery);

    if (trimmedQuery === "") {
        tagClickMode = false;
        renderAllSections(filtered, true);
    } else {
        tagClickMode = true;
        renderFlatList(filtered);
    }
}

searchInput.addEventListener("input", e => performSearch(e.target.value));

// Initial render
renderAllSections(resources, true);