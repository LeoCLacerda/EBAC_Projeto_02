const nome = document.getElementById('idNome')
const tel = document.getElementById('idTelefone')
const tableBody = document.getElementById('idTbody')
const form = document.getElementById('idForm')
const alertaNome = document.getElementById('idCampoNome')
const alertaTel = document.getElementById('idCampoTel')
const adicionadoAlerta = document.getElementById('alertaAdicionado')

let contatos = '';


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const validarN = validarNome()
    const validarT = validarTel()
    if(validarN && validarT){
        addToAgenda()
        clear()
    }
    showStyle(adicionadoAlerta, !(validarN && validarT))
})

function validarNome() {
    const validar = nome.value.split(' ').length > 1
    showStyle(alertaNome, validar)
    return validar
}

function validarTel() {
    const validar = tel.value.length >= 8
    showStyle(alertaTel, validar)
    return validar
}

function addToAgenda() {
    const linha = `<tr><td>${nome.value}</td><td>${tel.value}</td></tr>`
    contatos += linha
    tableBody.innerHTML = contatos

}

function showStyle(obj, show){
    obj.style.display = show ? 'none' : 'block'
}

function clear() {
    nome.value = ''
    tel.value = ''
}