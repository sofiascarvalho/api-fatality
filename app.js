/* **********************************************************
* objetivo: API para monitorar dados de alunos pela escola
* data:27/11/2024
* autor: sofia
* versão: 1.0
************************************************************/

/**
    para criar uma API devemos instalar:
        express -> npm install express --save           (criar a API)
        cors -> npm install cors --save                 (especifica permissoes da API)
        body-parser -> npm install body-parser --save   (para a API receber dados ma requisição)
 */

//import das bibliotecas
const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')

//inicia a utilizacao do express
const app=express()