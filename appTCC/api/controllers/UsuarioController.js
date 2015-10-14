/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = 
{
	novo: function (req, res) 
	{
    	res.view(null, {title: "Usuário"});
  	}	
};

