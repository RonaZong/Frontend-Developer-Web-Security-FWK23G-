const fetchBlog = async() => {
    const selectedBlog = sessionStorage.getItem("selectedBlog");
    const response = await fetch(`/api/blogs/${selectedBlog}`);
    const jsonResponse = await response.json();
    return jsonResponse;
};

// Render out information about book
const renderBlog = async() => {
    const blogInfo = await fetchBlog();
    const blogTitle = document.getElementsByClassName("blog-title")[0];
    const blogText = document.getElementsByClassName("blog-text")[0];

    blogTitle.textContent = blogInfo.title;
    blogText.textContent = blogInfo.description;
};

renderBlog();