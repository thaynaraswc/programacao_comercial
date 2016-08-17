function MinhaFuncao1(){
  $('#area-01').css({
    color: '#ff0000',
    textTransform: 'uppercase',
    width: 600
  });
};


function MinhaFuncao2(){
  $('#area-02').empty();
    var alunos = ['aluno 01', 'aluno 02', 'aluno 03', 'aluno 04','aluno 05'];

    for(i=0; i<5; i++){
      $('#area-02').append(alunos[i]);
    };
};

function MinhaFuncao3(){
  $('#area2').empty();
  var alunos = [
    {
    Nome: 'Aluno 01',
    Idade: 20
    },
    {
    Nome: 'Aluno 02',
    Idade: 22
    },
    {
    Nome: 'Aluno 03',
    Idade: 23
    },
    {
    Nome: 'Aluno 04',
    Idade: 24
    },
    {
    Nome: 'Aluno 05',
    Idade: 25
    },
    {
    Nome: 'Aluno 06',
    Idade: 26
    }
  ];

  for(i=0; i<5; i++){
    console.log(alunos[i]);
  }

var list = $("#area-02").append('<ul></ul>').find('ul');
$.each(alunos, function(index, value){
  list.append('<li>' + value.nome + '-' + value.idade + '</li>')
});
};
