define(function () 
{
  return ['$scope', '$http', function($scope, $http) 
  {
     
    function resetaItem()
    {
       $scope.aluno = 
       {
          matricula : '',
          nome : '',
          fone : '',
          endereco : '',
          cidade : '',
          email : '',
          id : ''
       };              
       $scope.displayForm = '';
      
    }
    resetaItem();

   $scope.adicionaItem = function () 
   {
     resetaItem();
     $scope.displayForm = true;
   }

    $scope.salvaItem = function () 
    {
      var aluno = $scope.aluno;
      
      if (aluno.id.length == 0)
      {
        $http.get('/aluno/create?matricula=' + aluno.matricula + '&nome=' +  aluno.nome + '&fone=' +  aluno.fone + '&endereco=' +  aluno.endereco + '&cidade=' +  aluno.cidade + '&email=' +  aluno.email).success(function(data) 
        {
                  $scope.items.push(data);
                  $scope.displayForm = '';
                  removeModal();
        }). 
        error(function(data, status, headers, config) 
        {
          alert(data.summary);
        });
      }
      else
      {
        $http.get('/aluno/update/'+ aluno.id +'?matricula=' + aluno.matricula + '&nome=' +  aluno.nome + '&fone=' +  aluno.fone + '&endereco=' +  aluno.endereco + '&cidade =' +  aluno.cidade + '&email=' +  aluno.email).success(function(data) 
        {
                  $scope.displayForm = '';
                  removeModal();
        }).
        error(function(data, status, headers, config) 
        {
          alert(data.summary);
        });
      }
    };

    $scope.editaItem = function (data) 
    {       
      $scope.aluno = data
      $scope.displayForm = true;
    }

    $scope.removeItem = function (data) 
    {
      if (confirm('Deseja excluir?'))
      {
        $http['delete']('/aluno/' + data.id).success(function() 
        {
          $scope.items.splice($scope.items.indexOf(data), 1);
        });
      }
    };

    $http.get('/aluno/find').success(function(data) 
    {
      for (var i = 0; i < data.length; i++) 
      {
        data[i].index = i;
      }
      $scope.items = data;
    });

    function removeModal()
    {
      $('.modal').modal('hide');          
    }

  }];

});