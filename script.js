document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts-container');

    function createPostHTML(post) {
        return `
            <div class="post">
                <h2>Заголовок: ${post.title}</h2>
                <p>${post.body}</p>
            </div>
        `;
    }

  
    function addPostToContainer(container, postHTML) {
        container.innerHTML += postHTML;
    }

    function fetchAndDisplayPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                posts.forEach(post => {
                    const postHTML = createPostHTML(post);
                    addPostToContainer(postsContainer, postHTML);
                });
            })
            .catch(error => {
                console.error('Ошибка при получении постов:', error);
                postsContainer.innerHTML = '<p>Не удалось загрузить посты. Пожалуйста, попробуйте позже.</p>';
            });
    }


    fetchAndDisplayPosts();
});