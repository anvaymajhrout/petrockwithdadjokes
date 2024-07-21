document.getElementById('pet-rock').addEventListener('click', getDadJoke);

function getDadJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('joke').textContent = data.joke;
    })
    .catch(error => {
        document.getElementById('joke').textContent = 'Oops! Something went wrong. Please try again.';
        console.error('Error fetching the dad joke:', error);
    });
}
