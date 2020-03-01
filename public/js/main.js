window.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("btn");
    button.onclick = async () => {
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        const response = await fetch('/signup', {
            method: "POST",
            body: JSON.stringify({
                "name": name.value,
                "email": email.value
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const people = await response.json();
        const list = document.getElementById("people-list");
        const msg = document.getElementById("message");
        const link = `Return to <a href="https://jasontsemf.github.io/optimice.html">OptiMice Page</a>`;
        msg.innerHTML = `Thank you for signing up, our ${numberToOrdinal(people.people.length)} follower! <br>${link}`;                
        console.log(unixConvertor(people.people.created));
        name.value = "";
        email.value = "";
    }
});

function unixConvertor(timestamp) {
    let unix_timestamp = timestamp;
    var date = new Date(unix_timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
    return formattedTime;
}

function numberToOrdinal(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}