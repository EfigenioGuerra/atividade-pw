function changePageTitle(title) {
    document.title = title
}


async function dataNomeEstados() {
    try {
        const response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
        const jsonData = await response.json()
  
        generateInfoSection(jsonData.nome.front_default)
    } catch (error) {s
      console.error(error)
    }
}

function generateInfoSection(nome) { 
    const ul = document.createElement('ul')

    const li = document.createElement('li')
    li.id = "estados"
    li.textContent = `${nome}`
  
    section.appendChild(li)
    section.appendChild(ul)

}

document.addEventListener('DOMContentLoaded', function () {
    getSearchParams()
})

dataNomeEstados()