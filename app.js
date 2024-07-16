let ipt = document.querySelector('input')
let btn = document.querySelector('.btn-dark')
let tasks = document.querySelector("#tasks")
let deleteAll = document.querySelector('.btn-sm')

// obliger l'utisateur à taper quelque chose dans l'input sinon désactivé button
ipt.addEventListener('input', () => {
    if (ipt.value.length > 0) {
        btn.removeAttribute('disabled')
    } else {
        btn.setAttribute('disabled', true)
    }
})


// ajouter les tâches
btn.addEventListener('click', () => {
    let rand = Math.random()
    tasks.innerHTML += `<div class="d-flex align-items-center justify-content-between py-2 border-bottom border-1">
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch"
            id=${'flexSwitchCheckChecked' + rand} onchange="changer('${'flexSwitchCheckChecked' + rand}')">
        <label class="form-check-label" for=${'flexSwitchCheckChecked' + rand}>${ipt.value}</label>
    </div>
    <i class="bi bi-trash fs-5 text-danger cursor-pointer" onclick="deleteTask('${'flexSwitchCheckChecked' + rand}')"></i>
</div>`

    ipt.value = ""
    btn.setAttribute('disabled', true)
})


const changer = (id) => {
    let label = document.querySelector(`label[for='${id}']`);
    label.classList.toggle("text-decoration-line-through")
}


const deleteTask = (id) => {
    let el = document.getElementById(`${id}`)
    el.parentElement.parentElement.remove()
}


deleteAll.addEventListener('click', () => {
    tasks.innerHTML = ""
})