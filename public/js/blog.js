import { db, doc, getDoc } from "./firebase.js";

let blogId = decodeURI(location.pathname.split("/").pop());

let docRef = doc(db, "blogs", blogId);

getDoc(docRef).then((docSnap) => {
    if (docSnap.exists()) {
        console.log("Blog Data:", docSnap.data());
        setupBlog(docSnap.data());
    } else {
        location.replace("/");
    }
}).catch((error) => {
    console.error("Error fetching blog:", error);
});

const setupBlog = (data) => {
    const banner = document.querySelector('.banner');
    const blogTitle = document.querySelector('.title');
    const titleTag = document.querySelector('title');
    const publish = document.querySelector('.published');
    
    banner.style.backgroundImage = `url(${data.bannerImage})`;

    titleTag.innerHTML += blogTitle.innerHTML = data.title;
    publish.innerHTML += data.publishedAt;

    const article = document.querySelector('.article');
    addArticle(article, data.article);
};

const addArticle = (ele, data) => {
    data = data.split("\n").filter(item => item.length);
    
    data.forEach(item => {
        if(item.startsWith('#')){
            let hCount = item.match(/^#+/)[0].length;
            let tag = `h${hCount}`;
            ele.innerHTML += `<${tag}>${item.slice(hCount)}</${tag}>`;
        } 
        else if(item.startsWith("![") && item.includes("](") && item.endsWith(")")) {
            let alt = item.substring(2, item.indexOf("]"));
            let src = item.substring(item.indexOf("(") + 1, item.length - 1);
            ele.innerHTML += `<img src="${src}" alt="${alt}" class="article-image">`;
        } 
        else {
            ele.innerHTML += `<p>${item}</p>`;
        }
    });
};
