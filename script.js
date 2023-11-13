
const newPetCard = (inData) =>{
    let newCard = document.createElement('div')
    newCard.style.backgroundColor =  "#1a1e26";
    newCard.style.width = "10rem";
    newCard.style.height = "auto";
    newCard.style.marginLeft = "5px"
    newCard.style.marginRight = "5px"
    newCard.style.borderRadius = "1rem"
    newCard.style.textAlign = "center"
    newCard.style.padding = "5px"
    newCard.style.marginBottom = "1rem"
    newCard.appendChild(inData)
    return newCard
}
const DisplayCards = (elementClass, data) =>{

    let divTarget = document.getElementById("pets")

    while (divTarget.firstChild) {
        divTarget.removeChild(divTarget.firstChild);
    }
    for( pet in data){
        let newText = document.createElement('h1')
        newText.innerHTML = data[pet]
        let returned = newPetCard(newText)
        divTarget.append(returned)
    }
}
 const RequestPets =  (elementClass) =>{

    const url = `http://localhost:8000/`;

    fetch(url, {
        method: 'GET',
    })
        .then((response)=> response.json() )
        .then((data) => {
            console.log("here")
            console.log(data)
            DisplayCards( elementClass, data)
        })

        .catch((error) => {
            console.log("there")
            console.error(error);

        });
}

 const RequestPetInfo = ( petName ) =>{


     const url = `http://localhost:8000/${petName}`;

     fetch(url, {
         method: 'GET',
     })
         .then((response)=> response.json() )
         .then((data) => {
             console.log("here")
             console.log(data)


             document.getElementById("frm1").reset();
             document.getElementById("pnameGet").innerHTML = "name: " + petName
             document.getElementById("pspeciesGet").innerHTML = "species: " + data["species"]
             document.getElementById("pbreedGet").innerHTML = "breed: " + data["breed"]
             document.getElementById("pageGet").innerHTML = "age: " + data["age"]


         })

         .catch((error) => {
             console.log("there")
             console.error(error);
         });
 }

 const RequestAdoptPet =  ( petName ) =>{


     const url = `http://localhost:8000/${petName}`;

     fetch(url, {
         method: 'DELETE',
     })
         .then((data) => {
             console.log("here")
             console.log(data)
             document.getElementById("frm2").reset();

             RequestPets()
         })

         .catch((error) => {
             // Handle any errors here
             console.log("there")
             console.error(error);

         });


 }

 const RequestAddPet =  ( petName,species, breed, age) =>{

     const url = `http://localhost:8000/${petName}`;

     fetch(url, {
         method: 'POST', // Change the method if needed (e.g., POST),
         body: JSON.stringify({
             species: species,
             breed: breed,
             age: age
         })
     })
         .then((data) => {
             // Handle the API response data here
             console.log("here")
             console.log(data)
             document.getElementById("frm3").reset();

             RequestPets()
             // You can also perform any other actions or state updates based on the response
         })

         .catch((error) => {
             // Handle any errors here
             console.log("there")
             console.error(error);

         });


 }

const RequestUpdatePet =  ( petName,species, breed, age) =>{

    const url = `http://localhost:8000/${petName}`;

    fetch(url, {
        method: 'PATCH', // Change the method if needed (e.g., POST),
        body: JSON.stringify({
            species: species,
            breed: breed,
            age: age
        })
    })
        .then((data) => {
            // Handle the API response data here
            console.log("here")
            console.log(data)
            document.getElementById("frm4").reset();
            RequestPets()
            // You can also perform any other actions or state updates based on the response
        })

        .catch((error) => {
            // Handle any errors here
            console.log("there")
            console.error(error);

        });


}