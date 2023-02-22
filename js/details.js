const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".details");
const deleteBtn = document.querySelector(".delete");

const renderDetails = async () => {
  const res = await fetch(`http://localhost:3000/blogs/${id}`);
  const blog = await res.json();

  const template = `   
        <h1>${blog.blogtitle}</h1>
          <h3>  this blog was created by : 
  <span> ${blog.author} on ${blog.date}</span>
  </h3> 
               <p>${blog.blogbody}</p>
               <img src="${blog.thumbnailurl}">             
             
             `;
  container.innerHTML += template;
};
deleteBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  await fetch(`http://localhost:3000/blogs/${id}`, {
    method: "DELETE",
  });
  window.location.replace("index.html");
});
window.addEventListener("DOMContentLoaded", () => renderDetails());
