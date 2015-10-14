/**
* Usuario.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    nome: {
        type: 'string',
        required: true
    },

    titulo: {
        type: 'string'
    },

    email: {
        type: 'string',
        email: true,
        required: true,
        unique: true
    },

    senha: {
        type: 'string'
    }

  }
  }
};

