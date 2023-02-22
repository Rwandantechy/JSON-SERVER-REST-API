// javascript for index.html
const container = document.querySelector(".blogs");
const searchForm = document.querySelector(".search");

const renderPosts = async (term) => {
  let uri = "http://localhost:3000/blogs?_sort=likes&_order=desc";
  if (term) {
    uri += `&q=${term}`;
  }
  const res = await fetch(uri);
  const blogs = await res.json();
  let template = "";
  blogs.forEach((blog) => {
    template += `
            <div class="post">
                <h1>${blog.blogtitle}</h1>
                <p><small>${blog.likes} likes</small></p>
                <p>${blog.blogbody.slice(0, 200)}</p>
                <a href="/data/details.html?id=${blog.id}">Read more...</a>
            </div>
        `;
  });
  container.innerHTML = template;
};
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  renderPosts(searchForm.term.value.trim());
});
window.addEventListener("DOMContentLoaded", () => renderPosts());
