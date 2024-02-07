async function attachEvents() {
  const posts = document.getElementById('posts');
  const view = document.getElementById('btnViewPost');
  const loadPosts = document.getElementById('btnLoadPosts');
  const postTitle = document.getElementById('post-title');
  const postBody = document.getElementById('post-body');
  const postComments = document.getElementById('post-comments');

  const titleOfComments = await fetch(
    `http://localhost:3030/jsonstore/blog/posts`,
  );
  const viewComment = await fetch(
    ` http://localhost:3030/jsonstore/blog/comments`,
  );

  const commentId = await viewComment.json();
  const title = await titleOfComments.json();

  loadPosts.addEventListener('click', async () => {
    posts.innerHTML = '';
    postBody.innerHTML = '';
    postComments.innerHTML = '';

    Object.entries(title).forEach(([key, value]) => {
      const option = document.createElement('option');
      option.textContent = `${value.title}`;
      option.value = `${key}`;
      posts.appendChild(option);
    });
    postTitle.textContent = 'Post Details';
  });
  view.addEventListener('click', async () => {

    let getPost = document.getElementById('posts');
    let postName = getPost.value;

    posts.innerHTML = '';
    postBody.innerHTML = '';
    postComments.innerHTML = '';

    const h1 = document.createElement('h1');
    h1.textContent = title[postName].title;
    const p = document.createElement('p');
    p.textContent = title[postName].body;
    postTitle.textContent = '';

    postTitle.appendChild(h1);
    postBody.appendChild(p);

    Object.entries(commentId).forEach(([key, value]) => {
      if (value.postId === postName) {
        const li = document.createElement('li');
        li.textContent = commentId[key].text;
        postComments.appendChild(li);
      }
    });
  });
}

attachEvents();
