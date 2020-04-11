function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (Client.checkForName(formText)) {
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
                document.getElementById('results').innerHTML =
                    `<h2>Results for : ${res.text}</h2>
                    <ul style="list-style-type:square;">
                    <li>Polarity:    <var>${res.polarity}</var> </li>
                    <li>Subjectivity:    <var>${res.subjectivity}</var> </li>
                    <li>Polarity confidence:    <var>${res.polarity_confidence}</var> </lir>
                    <li>Subjectivity confidence:    <var>${res.subjectivity_confidence}</var></li>
                    </ul>`;
            })
    }


}

export { handleSubmit }