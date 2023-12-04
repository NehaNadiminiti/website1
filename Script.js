function tellJoke() {
    // You can replace this with an API call to get a random joke
    const joke = "Why don't scientists trust atoms? Because they make up everything!";
    
    document.getElementById('joke-container').innerHTML = `<p>${joke}</p>`;
}
