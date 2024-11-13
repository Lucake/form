const projects = {
    restart:{
        name:'AWS Restart',
        logo:'./images/logos/restart.png',
        image:'./images/photos/esv.jpg', 
        color:'#027DBA',
        cities:[
        {
            'state':'Pernambuco',
            'city':'Recife',
        }]
    },
    cdd:{
        name:'Com.Dominio digital',
        logo:'./images/logos/cdd.png',
        image:'./images/photos/cdd.jpg', 
        color:'#027DBA',
        cities:[
        {
            'state':'Pernambuco',
            'city':'Recife',
        }]
    },
    esv:{
        name:'Escola Social do Varejo',
        logo:'./images/logos/esv.png',
        image:'./images/photos/esv.jpg', 
        color:'#17428B',
        cities:[{
            'state':'Bahia',
            'city':'Salvador',
        },
        {
            'state':'Bahia',
            'city':'São Cristovão',
        },
        {
            'state':'Pernambuco',
            'city':'Recife',
        }]
    },
    rotas:{
        name:'Rotas e Travessias',
        logo:'./images/logos/rotas.png',
        image:'./images/photos/rotas.jpg', 
        color:'#f1872d',
        cities:[{
            'state':'Bahia',
            'city':'Salvador',
        },
        {
            'state':'Bahia',
            'city':'Teixeira de Freitas',
        },
        {
            'state':'São Paulo',
            'city':'São Paulo',
        }]
    },
}

const states = {
    SP:[]
}
const LOGO = document.querySelector('.logo')
const BG_IMG = document.querySelector('.image img')
const PROJECT_FIELD = document.querySelector('#input-projeto');
const PROJECT_FIELD2 = document.querySelector('#input-projeto-2');


const setupProject = (projectName)=>{
    LOGO.src = projects[projectName].logo;
    BG_IMG.src = projects[projectName].image;
    document.documentElement.style.setProperty('--primary', projects[projectName].color);
    PROJECT_FIELD.value = projects[projectName].name;
    PROJECT_FIELD2.value = projects[projectName].name;
    PROJECT_FIELD2.disabled = true;
    updateProject(projectName)
}

const getUrlParameter = (param)=>{
    const project =  window.location.search;
    const searchParams = new URLSearchParams(project);
    return searchParams.get(param)
}

const appendProjectsField = ()=>{
    const SELECT = document.querySelector('#input-projeto-2') 
    Object.keys(projects)
        .forEach((e)=>{
            let htmlString = `<option value="${projects[e].name}" data-name="${e}">${projects[e].name}</option>`
            let div = document.createElement('div');
            div.innerHTML = htmlString;
            SELECT.append(div.firstChild)
    })
}

const appendTurmaField = (projectName)=>{
    const SELECT = document.querySelector('#input-turma-2') 
    SELECT.innerHTML = '<option value="" disabled selected>Selecione uma turma</option>'
    projects[projectName].cities
        .forEach((e)=>{
            htmlString = `<option value="${e.city}" data-state="${e.state}">${e.city}</option>`
            var div = document.createElement('div');
            div.innerHTML = htmlString;
            SELECT.append(div.firstChild)
    })
}

const appendStateField = (projectName)=>{
    const SELECT = document.querySelector('#input-estado-2') 
    SELECT.innerHTML = '<option value="" disabled selected>Selecione um estado</option>'
    let states = [...new Set(projects[projectName].cities.map(e=>e.state))]
    states.forEach((e)=>{
            htmlString = `<option value="${e}">${e}</option>`
            var div = document.createElement('div');
            div.innerHTML = htmlString;
            SELECT.append(div.firstChild)
    })
}



const updateProject =  (projectName)=>{
    appendStateField(projectName)
    appendTurmaField(projectName)
}

const setupMobilizador = (mobilizador)=>{
    const COMO_SOUBE = document.querySelector('#input-como-soube-2');
    COMO_SOUBE.querySelector('option').value = 'Mobilizador: ' + mobilizador;
    COMO_SOUBE.querySelector('option').text = mobilizador;
    COMO_SOUBE.disabled = "true"
    COMO_SOUBE.style.display = "none"
    COMO_SOUBE.previousElementSibling.style.display = "none"
}


PROJECT_FIELD2.addEventListener('change', e => {
    projectName = [...PROJECT_FIELD2.querySelectorAll('option')]
    .filter(e=> e.text == PROJECT_FIELD2.value)[0]
    .dataset
    .name
    updateProject(projectName)
})

window.addEventListener('DOMContentLoaded', (event) => {
    appendProjectsField()
    projeto = getUrlParameter('projeto')
    mobilizador = getUrlParameter('mobilizador')
    if(mobilizador){
        setupMobilizador(mobilizador)
    }
    if(projeto && projects[projeto]){
        setupProject(projeto)
    }
});