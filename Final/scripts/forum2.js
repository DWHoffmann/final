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
        name: "Anonymous",
        message: "speaking of secrets and butterflies, has that 'Anonymous Forum' looked like this: <br><br><img src='../media/butterfly_forum_screen_capture.PNG'>",
        date: "4-6-3005 2:10:11 PM"
    },
    {
        name: "Anonymous",
        message: "ooh yeah ive noticed taht",
        date: "4-4-3005 3:00:00 PM"
    },
    {
        name: "Anonymous",
        message: "*that    (sorry)   <:___( ",
        date: "4-4-3005 3:00:45 PM"
    },
    {
        name: "Anonymous",
        message: "WAIT!! WHAT... WHEN WAS THAT PUT THERE!! conspiracies i tell you!!",
        date: "4-4-3005 3:43:54 AM"
    },
    {
        name: "SOVEREIGNTY",
        message: "Everything on these pages are as it should be. No need to worry.",
        date: ""
    },
    {
        name: "Anonymous",
        message: "OOH BS... FUN FACT, THE FASCISTS ALWAYS GET SECOND PLACE, SO WHY DON'T YOU STICK IT UP YOUR [REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>[REDACTED] <BR>",
        date: "[REDACTED]"
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
const pageID = "page2"; // Unique identifier for each HTML page
postBtn.addEventListener("click", () => addPost(pageID));
window.addEventListener('load', () => loadPosts(pageID));