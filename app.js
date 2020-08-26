// array of cities
const cities = [
    {
        name: "New York, NY",
        latitude: 40.730610,
        longitude: -73.935242
        
    },
    {
        name: "Los Angeles, CA",
        latitude: 34.052235,
        longitude: -118.243683
    },
    {
        name: "Chicago, IL",
        latitude: 41.881832,
        longitude: -87.623177
    },
    {
        name: "Houston, TX",
        latitude: 29.749907,
        longitude: -95.358421
    },
    {
        name: "Phoenix, AZ",
        latitude: 33.448376,
        longitude: -112.074036
    },
    {
        name: "Philadelphia, PA",
        latitude: 39.952583,
        longitude: -75.165222
    },
    {
        name: "Denver, CO",
        latitude: 39.742043,
        longitude: -104.991531
    },
    {
        name: "Boston, MA",
        latitude: 42.361145,
        longitude: -71.057083
    },
    {
        name: "Nashville, TN",
        latitude: 36.174465,
        longitude: -86.767960
    },
    {
        name: "Seattle, WA",
        latitude: 47.608013,
        longitude: -122.335167
    }
]

$(() => {
    $("form").on("submit", (event) => {
        event.preventDefault()
        const userChoice = $("#cityList").val()

        // loop over cities array to find a string equal to the userChoice value
        const city = cities.find((city) => userChoice === city.name)
        console.log(city)

        $.ajax({
            // units=imperial is for Kelvin temp
            // available parameters: minutely, hourly, daily, current. include *exclusions* in url
            url: `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}2&units=imperial&exclude=minutely,hourly,daily&appid=86a56fb3135c86a87770953eed0010c4`
        }).then(
            (data) => {
                console.log(data)
                console.log("current temp: " + data.current.temp)
            },
            () => {
                console.log("bad request")
            }
        )
    })

    // populate weather button/modal with userChoice results
})