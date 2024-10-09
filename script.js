let url = "https://docs.google.com/forms/d/e/1FAIpQLSftFYtf4wGYeHQq4oiqiUa2m-pXNkO7yZlyM7ztVeKarpWLgQ/formResponse"; //action url
let form = document.querySelector("#form"); //form element
const formFields = [
    {
        "name":'nome',
        "code":'entry.1596959173',
        "type":"input",
    },
    {
        "name":'telefone',
        "code":'entry.158845610',
        "type":"input",
    },
    {
        "name":'email',
        "code":'entry.1842501334',
        "type":"input",
    },
]



form.addEventListener("submit", (e)=>{
    e.preventDefault();//prevent default behaviour

    fetch(url,{
        method: "POST",
        mode: "no-cors",
        header:{
            'Content-Type': 'application/json'
            },
        body: getInputData()
    })
    .then(data=>{
        console.log(data);
        alert("Enviado");
        clearInputs()
    })
    .catch(err=>console.error(err)); //promise based
});

//populating input data
const getInputData = ()=>{
    let dataToPost = new FormData(); //formdata API

    //fill name attributes to corresponding values
    formFields.forEach(e=>{
        dataToPost.append(e.code, document.querySelector(`[name='${e.name}']`).value);
    })
    

    return dataToPost;
}

const clearInputs = () => {
    document.querySelector('form').reset()
}