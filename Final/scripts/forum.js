/* setting to null */
const userID = {
    name: "Anonymous",
    identity: null,
    message: null,
    date: null
}
/* setting variables */
const userComment = document.querySelector(".usercomment");
const postBtn = document.querySelector("#post");
const comments = document.querySelector(".comments");
/* Some validation to post */
userComment.addEventListener("input", e => {
    if(!userComment.value) {
        postBtn.setAttribute("disabled", "disabled");
        postBtn.classList.remove("abled")
    }else {
        postBtn.removeAttribute("disabled");
        postBtn.classList.add("abled")
    }
})

// Pre-made comments array
const preMadeComments = [
    {
        name: "SOVEREIGNTY",
        message: "THIS FORUM IS NOW LOCKED",
        date: ""
    },
    {
        name: "Anonymous",
        message: "Does anyone still post on this forum anymore???!!!",
        date: "4-4-3005 10:00:32 AM"
    },
    {
        name: "Anonymous",
        message: "yes.",
        date: "4-4-3005 10:30:45 AM"
    },
    {
        name: "Anonymous",
        message: "cool. so is this like a gerneral discussion place orrr...???!!!",
        date: "4-4-3005 11:00:04 AM"
    },
    {
        name: "Anonymous",
        message: "general.",
        date: "4-4-3005 11:30:15 AM"
    },
    {
        name: "Anonymous",
        message: "sick. *does cool backflip*",
        date: "4-4-3005 3:24:05 AM"
    },
    {
        name: "Anonymous",
        message: "you guys hear about that a group. little worried about mentioning their name on here.",
        date: "4-6-3005 12:44:32 PM"
    },
    {
        name: "N/A",
        message: "../i have a cool ppet. aare we ggood at eengaging oursselves/ffriends oor rroommates uusually mmeet_ llets iinteract nnow, ya kknow_ pplease aaccept ggenerous eengagement_1. hhow tto mmeet at the llake",
        date: "N/A"
    },
    {
        name: "Anonymous",
        message: "i totally forgot how to do it, but there's something you have to do with the characters in the message above me that takes you to this weird freaky lookin website. i also keep seeing that butterfly on that page everywhere.",
        date: "4-6-3005 1:56:54 PM"
    },
    {
        name: "Anonymous",
        message: "yeah me 2. but everytime i try and click any of them, it says i don't have high enough clearance to activate it. something having to do with secret codes or something idk",
        date: "4-6-3005 1:59:22 PM"
    },
    
    // Add more pre-made comments as needed
];

/* Adding the post to the forum */
function addPost(pageID) {
    if (!userComment.value) return;
    userID.message = userComment.value;

    let currentDate = new Date();
    currentDate.setFullYear(3005);
    userID.date = currentDate.toLocaleString();

    let allPosts = JSON.parse(localStorage.getItem('forumPosts_' + pageID)) || [];
    allPosts.push(userID);
    localStorage.setItem('forumPosts_' + pageID, JSON.stringify(allPosts));
    let sideClass = allPosts.length % 2 === 0 ? 'right-comment' : 'left-comment';
    let published =
        `<div class="parents ${sideClass}">
            <div>
                <h1>${userID.name}</h1>
                <p>${userID.message}</p>
                <span class="date">${userID.date}</span>
            </div>
        </div>`;
    comments.innerHTML += published;
    userComment.value = "";
    comments.scrollTop = comments.scrollHeight;

    /* counting the amount of posts */
    let commentsNum = document.querySelectorAll(".parents").length;
    document.getElementById("comment").textContent = commentsNum;
}

// Function to load pre-made comments
function loadPreMadeComments() {
    preMadeComments.forEach(comment => {
        let sideClass = preMadeComments.indexOf(comment) % 2 === 0 ? 'left-comment' : 'right-comment';
        let published =
        `<div class="parents ${sideClass}">
            <div>
                <h1>${comment.name}</h1>
                <p>${comment.message}</p>
                <span class="date">${comment.date}</span>
            </div>
        </div>`;
        comments.innerHTML += published;
    });
}

function loadPosts(pageID) {
    loadPreMadeComments(pageID);

    let allPosts = JSON.parse(localStorage.getItem('forumPosts_' + pageID)) || [];
    allPosts.forEach(post => {
        let sideClass = allPosts.indexOf(post) % 2 === 0 ? 'left-comment' : 'right-comment';
        let published =
            `<div class="parents ${sideClass}">
                <div>
                    <h1>${post.name}</h1>
                    <p>${post.message}</p>
                    <span class="date">${post.date}</span>
                </div>
            </div>`;
        comments.innerHTML += published;
    });
    let commentsNum = document.querySelectorAll(".parents").length;
    document.getElementById("comment").textContent = commentsNum;
}

// Usage:
const pageID = "page1"; // Unique identifier for each HTML page
postBtn.addEventListener("click", () => addPost(pageID));
window.addEventListener('load', () => loadPosts(pageID));