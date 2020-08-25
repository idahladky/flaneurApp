$(() => {

    // get string value from input

    $("form").on("submit", (event) => {
        event.preventDefault()

        let locationSearch = $("input").val()
    
   
        // pass value into geolocation api to get longitute and latitude values

        // $.ajax({
        //     url: 
        // }).then(
        //     (data) => {
        //         console.log(data)
        //     },
        //     () => {
        //         console.log("bad request")
        //     }
    
        // save longitude and latitude values into variables
        let longitude = 0
        let latitude = 0

        // pass above variables into weather api call

        // $.ajax({
        //     url: 
        // }).then(
        //     (data) => {
        //         console.log(data)
        //     },
        //     () => {
        //         console.log("bad request")
        //     }
        // )
    })
})