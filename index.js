// Write your code here!
// creating a function to display posts 
function displayPosts(posts){
    const ul = document.getElementById('post-list');
    ul.innerHTML = '';
    
    posts.forEach( post => {
    const li = document.createElement('li')
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.textContent = post.title;
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);
    });
};

// creating async function to fetch data
async function fetchAndDisplayPosts() {
    try {
           const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const posts = await  response.json();
        displayPosts(posts);
    }
    catch (error){
        console.log('Error fetching data');
    }
}

fetchAndDisplayPosts();