document.addEventListener("DOMContentLoaded", async () => {
    // Fetch and desplay blog posts
    const blogPostsElement = document.getElementById("blogPosts");
    const blogPosts = await fetch("/feed").then((res) => res.json());
    blogPosts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `<strong>${post.title}</strong><p>${post.text}</p><small>Author: ${post.author} | Date: ${post.date}</small>`;
        blogPostsElement.appendChild(postElement);
    });

    // Fetch and display looged-in user
    const loggedInUserElement = document.getElementById("loggedInUser");
    const loggedInUser = await fetch("/get-user").then((res) => res.json());
    if (loggedInUser) {
        loggedInUserElement.innerHTML = `Logged in as: ${loggedInUser.username}`;
    }
});
// window.location.reload;
// // Check for the presence of a token
// const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");

// if (token) {
//     // Parse the token and extract user information
//     const payload = JSON.parse(atob(token.split('.')[1]));
//     document.getElementById("userInfo").innerText = `Logged in as ${payload.username}`;
// }

// // // Logout function
// // function logout() {
// //     document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
// //     // Redirect to the login page or any other desired action
// //     window.location.href = "/";
// // }

// // Get cookie by name
// function getCookie(name) {
//     const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
//     return match ? match[2] : null;
// }

// // Fetch and display blog posts
// async function fetchPosts() {
//     const response = await fetch("/feed");
//     const posts = await response.json();

//     const blogPostsElement = document.getElementById("blogPosts");
//     blogPostsElement.innerHTML = "";

//     posts.forEach(post => {
//         const li = document.createElement("li");
//         li.innerHTML = `<strong>${post.title}</strong> by ${post.author} (${post.date}): ${post.text} <button onclick="deletePost(${post.id})">Delete</button>`;
//         blogPostsElement.appendChild(li);
//     });
// }

// // Delete a blog post
// async function deletePost(postId) {
//     // Make a DELETE request to your server to delete the post
//     fetch(`/delete-post/${postId}`, {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         // Add any necessary authentication headers or tokens
//     })
//     .then(response => {
//         if (response.ok) {
//             // Refresh the page or update the UI to reflect the deletion
//             window.location.reload();
//         } else {
//             console.error("Error deleting post");
//         }
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });
// }

// // Fetch and display blog posts when the page loads
// fetchPosts();