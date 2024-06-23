const mainContainer = document.getElementById("container");
const blogTitle = document.createElement("h1");
blogTitle.textContent = "My Awesome Blog!";
blogTitle.id = "blog-title";
container.appendChild(blogTitle);

function creatPost(title, date, body) {
  // Creat DOM elements
  const postContainer = document.createElement("div");
  const postTitle = document.createElement("h3");
  const postDate = document.createElement("span");
  const postBody = document.createElement("p");
  
  // Update text content
  postTitle.textContent = title;
  postDate.textContent = date;
  postBody.textContent = body;
  
  // Add classes to elements
  postContainer.classList.add("post-container");
  postTitle.classList.add("blog-entry-title");
  postDate.classList.add("blog-entry-date");
  postBody.classList.add("blog-entry-body");
  
  // Add elements to thier own post container
  postContainer.appendChild(postTitle);
  postContainer.appendChild(postDate);
  postContainer.appendChild(postBody);
  mainContainer.appendChild(postContainer);
}

posts.forEach(function(post) {
  creatPost(post.title, post.date, post.body)
})