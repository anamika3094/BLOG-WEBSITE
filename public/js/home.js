import { db, collection, getDocs } from "./firebase.js";

const blogSection = document.querySelector('.blogs-section');

const fetchBlogs = async () => {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    let blogs = [];
    querySnapshot.forEach((doc) => {
        blogs.push({ id: doc.id, ...doc.data() });
    });
    
    console.log("Fetched Blogs:", blogs);
    
    blogSection.innerHTML = "";
    blogs.forEach((blog) => createBlog(blog));
};

const createBlog = (blog) => {
    blogSection.innerHTML += `
    <div class="blog-card">
        <img src="${blog.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${blog.title.substring(0, 100) + '...'}</h1>
        <p class="blog-overview">${blog.article.substring(0, 200) + '...'}</p>
        <a href="/${blog.id}" class="btn dark">read</a>
    </div>
    `;
};

fetchBlogs();
