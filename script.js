
 const RequestPets =  () =>{

    const url = `http://localhost:8000/`;

    fetch(url, {
        method: 'GET', // Change the method if needed (e.g., POST),
    })
        .then((response)=> response.json() )
        .then((data) => {
            // Handle the API response data here
            console.log("here")
            console.log(data)
            document.getElementById("pets").innerHTML = JSON.stringify(data)
            // You can also perform any other actions or state updates based on the response
        })

        .catch((error) => {
            // Handle any errors here
            console.log("there")
            console.error(error);

        });
}

 const RequestPetInfo =  ( petName ) =>{


     const url = `http://localhost:8000/${petName}`;

     fetch(url, {
         method: 'GET', // Change the method if needed (e.g., POST),
     })
         .then((response)=> response.json() )
         .then((data) => {
             // Handle the API response data here
             console.log("here")
             console.log(data)
             document.getElementById("pet").innerHTML = JSON.stringify(data)
             // You can also perform any other actions or state updates based on the response
         })

         .catch((error) => {
             // Handle any errors here
             console.log("there")
             console.error(error);

         });


 }