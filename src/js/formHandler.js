import { postData } from './apiHandler';

function handleSubmit(event) {
    event.preventDefault();

    const url = document.getElementById('url').value;

    if (!validateURL(url)) {
        alert('Please enter a valid URL');
        return;
    }

    postData('http://localhost:8081/api', { url })
        .then(data => {
            document.getElementById('results').innerHTML = `
                <p>Polarity: ${data.polarity}</p>
                <p>Subjectivity: ${data.subjectivity}</p>
                <p>Text: ${data.text}</p>
            `;
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

function validateURL(url) {
    const regex = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/;
    return regex.test(url);
}

export { handleSubmit, validateURL };
