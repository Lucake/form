let url = "https://docs.google.com/forms/d/e/1FAIpQLSftFYtf4wGYeHQq4oiqiUa2m-pXNkO7yZlyM7ztVeKarpWLgQ/formResponse"; //action url
let form = document.querySelector("#form");
const CONTAINER1 = document.querySelector('#container1')
const CONTAINER2 = document.querySelector('#container2')

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
    {
        "name":'projeto',
        "code":'entry.713884241',
        "type":"input",
    },
]


window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('body').classList.remove("preload");
});

form.addEventListener("submit", (e)=>{
    e.preventDefault();

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
        CONTAINER1.classList.toggle('closed')
        clearInputs()
    })
    .catch(err=>console.error(err));
});

document.body.onkeyup = function(e) {
    if(e.keyCode == 66){
        window.scrollTo(0, 0)
        CONTAINER1.classList.toggle('closed')
    }
}


const getInputData = ()=>{
    let dataToPost = new FormData();
    formFields.forEach(e=>{
        val = document.querySelector(`[name='${e.name}']`).value
        dataToPost.append(e.code, val);
        document.querySelector(`#container2 [name='${e.name}']`).value=val;
    })
    return dataToPost;
}

const clearInputs = () => {
    document.querySelector('form').reset()
}