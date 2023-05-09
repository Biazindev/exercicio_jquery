    $(document).ready(function() {
        $('#cadastrar').click(function() {
        let tarefa = $('#tarefa').val();
        $('#lista-de-tarefas').append('<li class="nova-tarefa">' + tarefa + '</li>');
        $('#tarefa').val(''); 
        });

        $('#lista-de-tarefas').on('click', 'li.nova-tarefa', function() {
        $(this).css('text-decoration', 'line-through');
        });
    });
    
