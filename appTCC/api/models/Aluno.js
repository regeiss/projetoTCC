/**
* Aluno.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = 
{
  attributes: 
  {
      matricula:
      {
        type:"string",
        required:true,
        minLength: 6,
        unique: true
      }, 
      nome:
      {
        type:"string",
        required:true,
        minLength: 6
      },     
      fone:
      {
        type:"string",
        required:true
      },
      endereco:
      {
        type:"string",
        required:true
      },      
      cidade:
      {
        type:"string",
        required:true
      },                        
      email:
      {
        type:"string",
        required:"true",
        unique: true
      },
  }
};

