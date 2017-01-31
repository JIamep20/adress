module.exports = function (app) {
  app.factory('adressesService', function ($http, apiPath) {
    return {
      createCity: function (data) {
        return $http.post(apiPath('/city'), data)
          .then(function (response) {
            return response;
          });
      },
      fetchCity: function (id) {
        var url = !!id ? apiPath('city/' + id) : url = apiPath('city');

        return $http.get(url)
          .then(function (response) {
            return response.data;
          });
      },

      fetchAdress: function (id) {
        var url = !!id ? apiPath('adress/' + id) : apiPath('adress');

        return $http.get(url)
          .then(function (response) {
            return response.data;
          });
      },

      postAdress: function (data) {
        return $http.post(apiPath('adress/'), data)
          .then(function(response){return response.data;});

        // return $http.post(apiPath('city/' + cityId + '/adresses/'), data)
        //   .then(function (response) {
        //     return response.data;
        //   });
      },

      deleteAdress: function(id) {
        if(!id) return $q.reject();

        return $http.delete(apiPath('adress/' + id)).then(function(response) {return response.data;});
      },

      fetchPaginatedAdresses: function(pageId) {
        pageId = pageId || 1;
        return $http.get(apiPath('adress/getPaginated?page=' + pageId))
          .then(function(response) {
          return response.data;
        });
      },

      updateAdress: function(model) {
        return $http.put(apiPath('adress/' + model.id), model)
          .then(function(response) {return response.data;});
      }
    };
  });
};
