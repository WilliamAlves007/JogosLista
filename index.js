const botao = document.querySelector('.botao-principal')
const inputNome = document.querySelector('.novo-jogo_input')
const listaCompleta = document.querySelector('.jogos-zerados-lista')
const localStorageKey = 'to-do-list'


function validateGame(){
    let valores = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputValue = inputNome.value
    let existe     = valores.find(x => x.name == inputValue)
    return !existe ? false : true
}

function addNewTask() {

    if (!inputNome.value) {

        alert('campo vazio, Digite algo')
    }
    else if (validateGame()) {
        alert('Ja existe esse jogo')
    }
    else {
            let valores = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
            valores.push({
                name: inputNome.value
            })
            localStorage.setItem(localStorageKey, JSON.stringify(valores))
            showTasks()
        }

        inputNome.value = ''

    }


    function showTasks() {

        let valores = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        let list = document.querySelector('.jogos-zerados-lista')
        list.innerHTML = ''

        for (let i = 0; i < valores.length; i++) {
            list.innerHTML +=
                `<ul class="lista-jogos-ul">
                <li class="lista-jogos-li">
                    ${valores[i]['name']}
                <button id="btn-remove" onClick='removeItem("${valores[i]['name']}")' class="btn-remove">X</button></li>
            </ul> `
        }
    }

function removeItem(data){
    let valores = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = valores.findIndex(x => x.name == data)
    valores.splice(index, 1)
    localStorage.setItem(localStorageKey, JSON.stringify(valores))
    showTasks()

}

showTasks()



    botao.addEventListener('click', addNewTask)
