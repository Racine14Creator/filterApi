
const display = document.getElementById("result"),
    inputSearch = document.getElementById('search'),
    urlAPIs = "https://jsonplaceholder.typicode.com/users"

const getData = async () => {
    const res = await fetch(urlAPIs),
        data = await res.json()
    return data
}

const displayFunction = async () => {

    let q = inputSearch.value

    const payload = await getData()

    let displayData = payload.filter(event => {

        if (q === '') { return event } else if (event.name.toLowerCase().includes(q.toLowerCase())) {
            console.log(event)
            return event;

        }
    }).map(object => {

        const { name, id, username } = object
        return `
                <div class="item" id=${id}>
                    <h3>${name}</h3>
                    <p>${username}</p>
                </div>
            `
    }).join("")
    display.innerHTML = displayData
}
displayFunction()
inputSearch.addEventListener('input', function () {
    displayFunction()
})

