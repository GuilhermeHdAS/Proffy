// Procurar o botão e quando o evento de click ocorrer chama a função cloneField
document.querySelector('#add-item').addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos (escolher o campo primeiro) - Eu preciso colocar o true após o cloneNode para ele pegar todo o conteúdo dentro da div, caso eu deixasse o cloneNode() assim, ele pegaria só a div, vazia. Após isso o campo está clonado, apenas clonado
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    fields.forEach(function(field) {
        // Pegar o field do momento e limpa ele
        field.value = ""
    })

    // Aqui, vamos colocar o campo na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}