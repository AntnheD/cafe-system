document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:3000/api/your-endpoint')
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => console.error('Error:', error));
});
