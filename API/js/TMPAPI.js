async function getUser() {
    try {
        const response = await fetch('https://api.truckersmp.com/v2/player', {
            method: 'GET',
            headers: {
                mode: 'no-cors',
                credentials: 'include',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE",
                "Access-Control-Allow-Headers": "Authorization, Lang, Origin, X-Requested-With, Content-Type, Accept"
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
