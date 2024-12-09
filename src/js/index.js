(() => {
  const form = document.querySelector('#form');

  const createComment = (id, name, email, body) => {
    const blockComments = document.querySelector('.blockComments');
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
                <div class="itemComent p-2 border"><strong>Comment ID:</strong> ${id}</div>
                <div class="itemComent p-2 border"><strong>Name: </strong> ${name}</div>
                <div class="itemComent p-2 border"><strong>Email:</strong> ${email}</div>
                <div class="itemComent p-2 border mb-3"><strong>Body:</strong> ${body}</div>
            `;
    blockComments.append(wrapper);
  };

  const getComments = async (id) => {
    try {
      let comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      comments = await comments.json();

      comments.forEach((comment) => {
        createComment(comment.id, comment.name, comment.email, comment.body);
      });
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  const createPost = (userID, id, title, body) => {
    const blockPost = document.querySelector('#searchResult');
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
                <div class="itemPost p-2 border"><strong>UserID:</strong> ${userID}</div>
                <div class="itemPost p-2 border"><strong>Post ID:</strong> ${id}</div>
                <div class="itemPost p-2 border"><strong>Title:</strong> ${title}</div>
                <div class="itemPost p-2 border"><strong>Body:</strong> ${body}</div>
                <div class="blockComments"><button id="comments" class="btn btn-primary mt-3 mb-3">Search comments</button></div>
            `;
    blockPost.append(wrapper);
    const printComments = document.querySelector('#comments');
    printComments.addEventListener('click', () => {
      getComments(id);
    });
  };

  const getPost = async (event) => {
    event.preventDefault();
    const number = Number(event.target.querySelector('#postID').value);

    try {
      if (number < 1 || number > 100) { throw new Error('Wrong PostID'); }
      let posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${number}`);
      posts = await posts.json();
      createPost(posts.userId, posts.id, posts.title, posts.body);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  form.addEventListener('submit', getPost);
})();
