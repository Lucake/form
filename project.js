const projects = {
    restart:{
        name:'AWS Restart',
        logo:'./images/logos/restart.png',
        image:'./images/photos/esv.jpg', 
        color:'#027DBA',
    },
    cdd:{
        name:'Com.Dominio digital',
        logo:'./images/logos/cdd.png',
        image:'./images/photos/cdd.jpg', 
        color:'#027DBA',
    },
    esv:{
        name:'Escola Social do Varejo',
        logo:'./images/logos/esv.png',
        image:'./images/photos/esv.jpg', 
        color:'#17428B',
    },
    rotas:{
        name:'Rotas e Travessias',
        logo:'./images/logos/rotas.png',
        image:'./images/photos/rotas.jpg', 
        color:'#f1872d',
    },
}

const states = {
    SP:[]
}
const LOGO = document.querySelector('.logo')
const BG_IMG = document.querySelector('.image img')
const PROJECT_FIELD = document.querySelector('#input-projeto');
const PROJECT_FIELD2 = document.querySelector('#input-projeto-2');


const changeProject = (project_name)=>{
    LOGO.src = projects[project_name].logo;
    BG_IMG.src = projects[project_name].image;
    document.documentElement.style.setProperty('--primary', projects[project_name].color);
    PROJECT_FIELD.value = projects[project_name].name;
    PROJECT_FIELD2.value = projects[project_name].name;
    PROJECT_FIELD2.disabled = true;
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
            htmlString = `<option value="${projects[e].name}">${projects[e].name}</option>`
            var div = document.createElement('div');
            div.innerHTML = htmlString;
            SELECT.append(div.firstChild)
    })
}

window.addEventListener('DOMContentLoaded', (event) => {
    appendProjectsField()
    projeto = getUrlParameter('projeto')
    if(projeto){
        changeProject(projeto)
    }
    appendProjectsField()
});