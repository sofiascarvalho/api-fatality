/******************************************************************************
 * objetivo: arquivo de funcoes para filtragem dos dados que serão fornecidos
 * data: 27/11/2024
 * autor: sofia
 * versao: 1.0
 ******************************************************************************/

const { get } = require('http')
const alunos=require('./alunos')
const cursos=require('./cursos')

// endpoint /v1/lion-school/cursos 
//feito
const getCursos = function(){
    let todosCursos =[]
    cursos.cursos.forEach(function(curso) {
        if(String(curso).toUpperCase()){
            todosCursos.push(
                {
                    nome: curso.nome,
                    sigla: curso.sigla,
                    icone: curso.icone,
                    carga: curso.carga
                }
            )
            }
    })
    return todosCursos
}

// endpoint v1/lion-school/alunos
//feito
const getAlunos=function(){
    let nomeAlunos=[]
    alunos.alunos.forEach(function(aluno){
        nomeAlunos.push(
            {
                foto: aluno.foto,
                nome:aluno.nome,
                matricula:aluno.matricula,
                sexo:aluno.sexo,
                curso:aluno.curso
            }
        )
    })
    return nomeAlunos
}

// endpointv1/lion-school/alunos/{matricula} 
const getAlunoMatricula=function(){                 //terminar
    let alunoMatricula =[]
    alunos.alunos.matricula.forEach(function(dados){
        if(dados.matricula){
            alunoMatricula.push(
            {
                foto: dados.foto,
                nome:dados.nome,
                matricula:dados.matricula,
                sexo:dados.sexo,
                curso:dados.curso
            }
        )
        }
    })
    return alunoMatricula
}

// endpoint  /v1/lion-school/alunos/cursos/{ds} 
//feito
const getAlunosCurso = function(curso){ 
    let alunosCurso = []
    let alunosC = String(curso).toUpperCase()

    alunos.alunos.forEach(function(item){
        if(String(item.curso[0].sigla).toUpperCase() == alunosC){
            alunosCurso.push(item)
        }
    })
    return alunosCurso
}

// endpoint  /v1/lion-school/alunos/filtro?status={finalizado}
//feito
const getStatus=function(status){
    let statusAlunos=[]
    let alunosS=String(status).toUpperCase()

    alunos.alunos.forEach(function(dado){
        if(String(dado.status).toUpperCase()==alunosS){
            statusAlunos.push(dado)
        }
    })
    return statusAlunos
}

// endpoint v1/lion-school/alunos/filtro?curso={ds}&status={Aprovado}
const getStatusDisciplina=function(curso, statusDisciplina){    //terminar
    let listaAlunosCurso=[]
    let listaCurso=String(curso).toUpperCase()
    let alunosSD=String(statusDisciplina).toUpperCase()

    alunos.alunos.forEach(function(dado){
        if(String(dado.status).toUpperCase()==alunosSD){
            dado.disciplina.forEach(function(item){
                listaAlunosCurso.push(item)
            })
        }
    })
    return listaAlunosCurso
}


// endpoint v1/lion-school/alunos/filtro? curso={ds}&ano-conclusao={2024}


//console.log(getCursos())
//console.log(getAlunos())
//console.log(getAlunoMatricula())
//console.log(getAlunosCurso('RDS'))
//console.log(getStatus('Finalizado'))
//console.log(getStatusDisciplina('Sistemas Operacionais', 'Aprovado'))
//




