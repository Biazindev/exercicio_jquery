$(document).ready(function() {
    $('#cadastrar').click(function(){
        let tarefa = $('#tarefa').val();
        $('#lista-de-tarefas').append('<li>' + tarefa + '</li>');
        $('#tarefa').val('');
        $('#lista-de-tarefas li:last-child').addClass('exit');
    })
})