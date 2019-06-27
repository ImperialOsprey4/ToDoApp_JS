var input = document.getElementsByClassName('entrada-tareas')[0];
input.addEventListener("keypress", function(event){
    var keyName = event.key;
    if (keyName === 'Enter'){
        var texto = input.value;
        if (texto !== ''){
        input.value = ''
        var cuerpo = document.getElementsByClassName('cuerpo')[0]
        cuerpo.innerHTML += '<div class="task" onmouseover="mOver(this)" onmouseout="mOut(this)">' +
            '                    <div class="task-circle" onclick="finishTask(this)">' +
            '                        <span class="circle"><i class="fa fa-check"></i></span>' +
            '                    </div>' +
            '                    <div class="task-title" >'+texto+'</div>' +
            '                    <div class="task-close" onclick="removeTask(this)">' +
            '                        <i class="fa fa-times"></i>' +
            '                    </div>' +
            '                </div>'
        var tareas = document.getElementsByClassName('task');
            if (tareas.length > 1){
                document.getElementsByClassName('pie')[0].firstElementChild.innerHTML = tareas.length + ' tareas restantes'
            } else{
                document.getElementsByClassName('pie')[0].firstElementChild.innerHTML = tareas.length + ' tarea restante'
            }
        }else{
            alert('Campo Vacio')
        }
        document.getElementsByClassName('pie')[0].style.display = "block"

}
});


function finishTask(item) {

    if(!item.parentElement.classList.contains('done')){
        item.parentElement.classList.add('done');
        item.firstElementChild.firstElementChild.style.display = "inline"
    }else{
        item.parentElement.classList.remove('done')
        item.firstElementChild.firstElementChild.style.display = "none"
    }

    var tareas_terminadas = document.getElementsByClassName('done');
    var tareas = document.getElementsByClassName('task');
    var total = tareas.length - tareas_terminadas.length;
    if (total > 1){
        document.getElementsByClassName('pie')[0].firstElementChild.innerHTML = total + ' tareas restantes'
    } else{
        document.getElementsByClassName('pie')[0].firstElementChild.innerHTML = total + ' tarea restante'
    }
}

function mOver(item) {
    item.lastElementChild.style.display = "flex";
}

function mOut(item) {
    item.lastElementChild.style.display = "none";
}

function removeTask(item) {
    item.parentElement.remove();
    var tareas = document.getElementsByClassName('task');
    var pie = document.getElementsByClassName('pie')[0];
    console.log(pie)
    if(tareas.length === 0){
        pie.style.display = "none"
    }else{
        if (tareas.length > 1){
            pie.firstElementChild.innerHTML = tareas.length + ' tareas restantes'
        } else{
            pie.firstElementChild.innerHTML = tareas.length + ' tarea restante'
        }
    }
}

function clearList() {
    var i;
    var tareas = document.getElementsByClassName('task');
    for(i = 0;i<= tareas.length;i++){
        tareas[i].remove();
    }
    document.getElementsByClassName('pie')[0].style.display = "none"
}

function showTodas(item) {
    document.getElementsByClassName('option-active')[0].classList.remove('option-active');
    item.classList.add('option-active');
    var tareas = document.getElementsByClassName('task');
    for (let i = 0;i <= tareas.length;i++){
        tareas[i].style.display = "block"
    }
}

function showDone(item) {
    document.getElementsByClassName('option-active')[0].classList.remove('option-active');
    item.classList.add('option-active');
    var tareas_done = document.getElementsByClassName('done');
    for (let i = 0;i <= tareas_done.length; i++){
        if(tareas[i].classList.contains('done')){
            tareas[i].style.display = "block"
        }else{
            tareas[i].style.display = "none"
        }
    }
}

function showActivas(item) {
    document.getElementsByClassName('option-active')[0].classList.remove('option-active');
    item.classList.add('option-active');
    var tareas = document.getElementsByClassName('task');
    for(let i = 0;i< tareas.length;i++){
        if(tareas[i].classList.contains('done')){
            tareas[i].style.display = "none"
        }
    }
}
