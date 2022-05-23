async function getUser() {
    try {
        const response = await fetch('https://api.truckersmp.com/v2/player', {
            method: 'GET',
            headers: {
                Accept: 'text/html',
                Cookie: 'Version=1',
                mode: 'no-cors',
                credentials: 'include',
            },
        });

        if (!response.ok) {
            throw new Error(`[ERROR]: Status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (err) {
        console.log(err);
    }
}

getUser();

/*const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.truckersmp.com/v2/player/")
xhr.setRequestHeader("Content-Type", "application/json")
xhr.setRequestHeader("Accept", "text/html")
xhr.setRequestHeader("Cookie", "Version=1")
xhr.setRequestHeader("mode", "cors")
xhr.setRequestHeader("credentials", "include")
xhr.send()

xhr.onload = function() {
    if (xhr.status === 200) {
        data = JSON.parse(xhr.responseText)
        console.log(data.name)
        console.log(data.steamID)
    } else if (xhr.status === 404) {
        console.log("No records found")
    }
}

xhr.onerror = function() {
    console.log("Network error occured")
}*/