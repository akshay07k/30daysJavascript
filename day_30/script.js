function showRegisterForm() {
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('registerFormContainer').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('registerFormContainer').style.display = 'none';
    document.getElementById('loginFormContainer').style.display = 'block';
}

document.getElementById('showRegisterForm').addEventListener('click', showRegisterForm);

document.getElementById('showLoginForm').addEventListener('click', showLoginForm);


// Handle user registration

function registerUser(event) {
    event.preventDefault();
    let username = document.getElementById('registerUsername').value;
    let email = document.getElementById('registerEmail').value;
    let password = document.getElementById('registerPassword').value;

    if (username && email && password) {
        let user = { username, email, password };
        localStorage.setItem(username, JSON.stringify(user));
        alert('Registration successful! Please log in.');
        document.getElementById('showLoginForm').click();
    } else {
        alert('Please fill in all fields.');
    }
}

document.getElementById('registerForm').addEventListener('submit', registerUser);

// Handle user login
function loginUser(event) {
    event.preventDefault();
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;

    let user = JSON.parse(localStorage.getItem(username));
    if (user && user.password === password) {
        sessionStorage.setItem('loggedInUser', username);
        alert('Login successful!');
        showDashboard();
    } else {
        alert('Invalid username or password.');
    }
}

document.getElementById('loginForm').addEventListener('submit', loginUser);

// Show the dashboard after login
function showDashboard() {
    let loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
        document.getElementById('authContainer').style.display = 'none';
        document.getElementById('dashboardContainer').style.display = 'block';

        let user = JSON.parse(localStorage.getItem(loggedInUser));
        document.getElementById('profileUsername').innerText = user.username;
        document.getElementById('profileEmail').innerText = user.email;

        // Load profile picture if available
        if (user.profilePicture) {
            document.getElementById('profilePicture').src = user.profilePicture;
        }

        displayPosts();
    }
}

// Handle creating and displaying posts
function createPost(event) {
    event.preventDefault();
    let content = document.getElementById('postContent').value;
    let image = document.getElementById('postImage').files[0];
    let loggedInUser = sessionStorage.getItem('loggedInUser');

    let post = {
        username: loggedInUser,
        content: content,
        image: image ? URL.createObjectURL(image) : null,
        likes: 0,
        comments: []
    };

    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));

    displayPosts();
    document.getElementById('createPostForm').reset();
}

document.getElementById('createPostForm').addEventListener('submit', createPost);

// Display posts on the page
function displayPosts() {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    let postFeed = document.getElementById('postFeed');
    postFeed.innerHTML = '';

    posts.forEach((post, index) => {
        let comments = post.comments.map(comment => `<p>${comment}</p>`).join('');
        let postElement = `
            <div class="post ${post.username === sessionStorage.getItem('loggedInUser') ? 'own-post' : ''}">
                <p><strong>${post.username}</strong></p>
                <p>${post.content}</p>
                ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
                <p><button class="likeButton" data-index="${index}">Like (${post.likes})</button> 
                <button class="commentButton" data-index="${index}">Comment</button></p>
                <div class="comments">
                    ${comments}
                </div>
            </div>
        `;
        postFeed.innerHTML += postElement;
    });
}

// Handle post interactions
document.addEventListener('click', function(event) {
    // console.log(event.target.dataset);
    
    if (event.target.classList.contains('likeButton')) {
        let postIndex = event.target.dataset.index;
        let posts = JSON.parse(localStorage.getItem('posts'));
        posts[postIndex].likes += 1;
        localStorage.setItem('posts', JSON.stringify(posts));
        displayPosts();
        addNotification(`Your post received a new like!`);
    }

    if (event.target.classList.contains('commentButton')) {
        let comment = prompt('Enter your comment:');
        if (comment) {
            let postIndex = event.target.dataset.index;
            let posts = JSON.parse(localStorage.getItem('posts'));
            posts[postIndex].comments.push(comment);
            localStorage.setItem('posts', JSON.stringify(posts));
            displayPosts();
            addNotification(`Your post received a new comment!`);
        }
    }
});

// Handle editing the user profile
// Show the Edit Profile Modal
document.getElementById('editProfileButton').addEventListener('click', function() {
    document.getElementById('editProfileModal').style.display = 'block';
    let loggedInUser = sessionStorage.getItem('loggedInUser');
    let user = JSON.parse(localStorage.getItem(loggedInUser));
    document.getElementById('editUsername').value = user.username;
    document.getElementById('editEmail').value = user.email;
});

// Close the Edit Profile Modal
document.getElementById('editProfileModal').style.display = 'none';
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('editProfileModal').style.display = 'none';
});

// Handle Profile Update
document.getElementById('editProfileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('editUsername').value;
    let email = document.getElementById('editEmail').value;
    let profilePicture = document.getElementById('editProfilePicture').files[0];

    let loggedInUser = sessionStorage.getItem('loggedInUser');
    let user = JSON.parse(localStorage.getItem(loggedInUser));

    user.username = username;
    user.email = email;
    if (profilePicture) {
        user.profilePicture = URL.createObjectURL(profilePicture);
    }

    localStorage.setItem(loggedInUser, JSON.stringify(user));
    alert('Profile updated successfully!');
    document.getElementById('editProfileModal').style.display = 'none';

    // Update profile information in UI
    document.getElementById('profileUsername').innerText = username;
    document.getElementById('profileEmail').innerText = email;
    if (profilePicture) {
        document.getElementById('profilePicture').src = user.profilePicture;
    }
});


// Function to add a notification
function addNotification(message) {
    let notifications = document.getElementById('notifications');
    let notification = document.createElement('p');
    notification.textContent = message;
    notifications.appendChild(notification);
}
