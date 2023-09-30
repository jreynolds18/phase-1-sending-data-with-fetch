function submitData(usernameString, emailString){
    let destinationUrl = "http://localhost:3000/users"

    const formData = {
        name: usernameString,
        email: emailString,
    }

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    }
    return fetch(destinationUrl, configurationObject)
    .then((response) => response.json())
    .then((data) => {
        const showIdNumber = data.id;
        const createElement = document.createElement('p');
        const body = document.body;
        body.append(createElement);
        createElement.textContent = `${showIdNumber}`;
    })
    .catch((error) => {
        let message = 'Unauthorized Access';
        const createElement = document.createElement('p');
        const body = document.body;
        body.append(createElement);
        createElement.textContent = message;
    });
}