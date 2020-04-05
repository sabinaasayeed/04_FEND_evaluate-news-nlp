function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    let data = { text: formText };
    fetch("/test", {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(function(res) {
            console.log("::: response :::", res)
            document.getElementById('results').innerHTML = `${res.text} has polarity: ${res.polarity}`
        })
}

export { handleSubmit }