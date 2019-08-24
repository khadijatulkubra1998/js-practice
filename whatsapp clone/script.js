axios.get("https://tk-whatsapp.herokuapp.com/messages")
    .then(function (response) {
        // handle success
        console.log(response);

        for (let i = 0; i < response.data.length; i++) {
            let messages = response.data[i];

            document.querySelector("ul").innerHTML += `
        <li>
        <h3> ${messages.name} </h3>
        <p> ${messages.number} </p>
        <p> ${messages.gender} </p>
        <img src="${messages.profilePic}">
        </li>
        `
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    })