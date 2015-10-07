/**
 * AlunoController
 *
 * @description :: Server-side logic for managing alunoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = 
{
    index: function (req, res) 
    {
    	res.view(null, {title: "Aluno"});
  	}
};