let title = document.getElementById('title')
let post = document.getElementById('post')
let checkTitle = title.innerText
let checkPost = post.innerText

// if the post is none
if(checkTitle === '' && checkPost === ''){
    var blog = document.getElementsByClassName("Blog");
    var i;
    for (i = 0; i < blog.length; i++) {
        blog[i].style.display = 'none';
    }
}

function create(){
    for(var x=0;x<1;x++){
        var createTitle = []
        var createPost = []
        createTitle = document.getElementById('createTitle').value 
        createPost  = document.getElementById('createPost').value
        for(key=0;key<1;key++){
            console.log(localStorage.setItem(key,createTitle));
            
        }
		var blog=document.createElement('div')
		blog.className="Blog"
        blog.id = 'blog'
        blog.dir = "index.html"
        blog.innerHTML=`<div class="container"><div class="col-md-3"><h3 id="title">${createTitle}</h3><hr><p id="post">${createPost}</p></div></div>`
        blog.onclick=function(){alert(x)}
        document.body.appendChild(blog)
    }
}

function login(){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    if(username && password === "admin"){
        window.open('index.html')
    }
}
