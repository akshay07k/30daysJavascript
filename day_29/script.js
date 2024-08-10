const loggedInUser = sessionStorage.getItem('loggedInUser');
const loginForm = document.getElementById('login-form');
const postForm = document.getElementById('post-form');
const postContainer = document.getElementById('post-container');

const posts = [];

if (loggedInUser) {
    loginForm.style.display = 'none';
    postForm.style.display = 'flex';
}

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        sessionStorage.setItem('loggedInUser', username);
        alert('Login successful!');
        loginForm.style.display = 'none';
        postForm.style.display = 'flex';
    } else {
        alert('Please enter a username and password.');
    }
});

postForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const content = document.getElementById('post-content').value;
    const image = document.getElementById('post-image').files[0];
    const username = sessionStorage.getItem('loggedInUser');
    const timestamp = new Date().toLocaleString();

    // console.log(URL.createObjectURL(image));
    

    const post = {
        username,
        content,
        image: image ? URL.createObjectURL(image) : null,
        timestamp,
        likes: 0,
        comments: []
    };

    posts.push(post);
    displayPosts();
    postForm.reset();
});

function displayPosts() {
    postContainer.innerHTML = '';

    // console.log(posts);
    

    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        if (post.username === sessionStorage.getItem('loggedInUser')) {
            postElement.classList.add('own-post');
        }
        
        postElement.innerHTML = `
            <h3>${post.username}</h3>
            <p>${post.content}</p>
            ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
            <small>${post.timestamp}</small>
            <button class="like-btn" data-index=${index}>Like (${post.likes})</button>
            <button class="comment-btn" data-index=${index}>Comment (${post.comments.length})</button>
            <div class="comment-section"></div>
        `;
        postContainer.appendChild(postElement);
    });
}


// Like and Comment

document.addEventListener('click', function(e) {
    // console.log(e);
    
    if (e.target.classList.contains('like-btn')) {
        const postIndex = e.target.getAttribute("data-index");
        posts[postIndex].likes += 1;
        displayPosts();
    } 
    
    else if (e.target.classList.contains('comment-btn')) {
        const comment = prompt('Enter your comment:');
        if (comment) {
            const postIndex = e.target.getAttribute("data-index");
            posts[postIndex].comments.push(comment);
            displayPosts();
            
        }
    }
});