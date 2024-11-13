const url = "https://docs.google.com/forms/d/e/1FAIpQLSftFYtf4wGYeHQq4oiqiUa2m-pXNkO7yZlyM7ztVeKarpWLgQ/formResponse"; //action url
const url2 = "https://docs.google.com/forms/d/1zInM1Zf89cwUPrMa5ZMGQ4nz4akZjRLxSRr8aEMPf8o/formResponse"
const form = document.querySelector("#form");
const form2 = document.querySelector("#form2");
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

const formFields2 = [
    {
        "name":'nome-2',
        "code":'entry.1036168316',
        "type":"input",
    },
    {
        "name":'telefone-2',
        "code":'entry.1974084074',
        "type":"input",
    },
    {
        "name":'projeto-2',
        "code":'entry.1673520773',
        "type":"input",
    },
    {
        "name":'email-2',
        "code":'entry.809244251',
        "type":"input",
    },
    {
        "name":'nascimento',
        "code":'entry.1546868978',
        "type":"input",
    },
    {
        "name":'estado',
        "code":'entry.489358037',
        "type":"input",
    },
    {
        "name":'cidade',
        "code":'entry.705058959',
        "type":"input",
    },
    {
        "name":'escolaridade',
        "code":'entry.511299699',
        "type":"input",
    },
    {
        "name":'como-soube',
        "code":'entry.322928398',
        "type":"input",
    },
    {
        "name":'turma',
        "code":'entry.1479635839',
        "type":"input",
    },
]

window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('body').classList.remove("preload");
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

//form 1
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    fetch(url,{
        method: "POST",
        mode: "no-cors",
        header:{
            'Content-Type': 'application/json'
            },
        body: getInputData(formFields)
    })
    .then(data=>{
        console.log(data);
        CONTAINER1.classList.toggle('closed')
        clearInputs()
    })
    .catch(err=>console.error(err));
});

//form 2
form2.addEventListener("submit", (e)=>{
    e.preventDefault();
    CONTAINER2.classList.add('loading')
    fetch(url2,{
        method: "POST",
        mode: "no-cors",
        header:{
            'Content-Type': 'application/json'
            },
        body: getInputData(formFields2)
    })
    .then(data=>{
        console.log(data);
        CONTAINER2.classList.remove('loading')
        CONTAINER2.classList.add('loaded')
    })
    .catch(err=>console.error(err));
});

const getInputData = (form)=>{
    let dataToPost = new FormData();
    form.forEach(e=>{
        console.log(e.name)
        val = document.querySelector(`[name='${e.name}']`).value
        dataToPost.append(e.code, val);
        if(isForm1())document.querySelector(`#container2 [name='${e.name}-2']`).value=val;
    })
    return dataToPost;
}

const clearInputs = () => {
    document.querySelector('form').reset()
}

const isForm1= () => {
    return !CONTAINER1.classList.contains('closed')
}

 
document.body.onkeyup = function(e) {
    if(e.keyCode == 66){
        window.scrollTo(0, 0)
        CONTAINER1.classList.toggle('closed')
    }
}
