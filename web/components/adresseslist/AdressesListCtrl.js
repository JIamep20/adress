var _ = require('lodash');

require('./styles.scss');

module.exports = function (app) {
  app.controller('AdressesListCtrl', AdresseslistCtrl);

  function AdresseslistCtrl($q, adressesService, uiGridConstants) {
    var vm = this;
    vm.nextPage = 1;
    vm.gridApi = null;

    vm.highlightFilteredHeader = function (row, rowRenderIndex, col, colRenderIndex) {
      if (col.filters[0].term) {
        return 'header-filtered';
      } else {
        return '';
      }
    };

    vm.gridOptions1 = {
      enableSorting: true,
      enableFiltering: true,
      infiniteScrollRowsFromEnd: 20,
      infiniteScrollUp: true,
      infiniteScrollDown: true,
      columnDefs: [
        {
          name: 'name',
          headerCellClass: vm.highlightFilteredHeader,
          cellTooltip: function(row, col) {return row.entity.createdAt;},
          cellTemplate: '<div class="ui-grid-cell-contents"><a ui-sref="editAdress({adressId: row.entity.id})">{{row.entity.name}}</a></div>'
        },
        {
          field: 'description',
          name: 'description',
          headerCellClass: vm.highlightFilteredHeader,
          cellTooltip: function(row, col) {return row.entity.createdAt;}
        },
        {
          field: 'city.name',
          name: 'city',
          filter: {
            condition: uiGridConstants.filter.ENDS_WITH,
            placeholder: 'ends with'
          },
          headerCellClass: vm.highlightFilteredHeader,
          cellTooltip: function(row, col) {return row.entity.createdAt;}
        },
        {
          field: 'city.description',
          name: 'city description',
          headerCellClass: vm.highlightFilteredHeader,
          cellTooltip: function(row, col) {return row.entity.createdAt;}
        },
        {
          name: 'createdAt',
          filter: {
            placeholder: 'part of date'
          },
          headerCellClass: vm.highlightFilteredHeader,
          cellTooltip: function(row, col) {return row.entity.name;}
        },
        {
          name: 'Actions',
          cellTemplate: '<div class="ui-grid-cell-contents"><button class="btn btn-danger btn-xs btn-block" ng-click="grid.appScope.alc.deleteAdress($event, row.entity);"><span class="glyphicon glyphicon-trash"></span></button></div>'
        }
      ],
      onRegisterApi: function (gridApi) {
        gridApi.infiniteScroll.on.needLoadMoreData(null, vm.getData);
        vm.gridApi = gridApi;
      }
    };

    vm.deleteAdress = function(e, model) {
      adressesService.deleteAdress(model.id).then(function(response) {
        vm.gridOptions1.data = vm.gridOptions1.data.filter(function(item){return item.id !== response.id});
      });
    },

      vm.getData = function() {
      var promise = $q.defer();
      adressesService.fetchPaginatedAdresses(vm.nextPage++)
        .then(function(res) {
          vm.gridApi.infiniteScroll.saveScrollPercentage();
          vm.gridOptions1.data = vm.gridOptions1.data.concat(res);
          vm.gridApi.infiniteScroll.dataLoaded(false, res.length > 0);
          return promise.resolve();
        })
        .catch(function(err) {
          console.log(err);
          vm.gridApi.infiniteScroll.dataLoaded();
          return promise.reject();
        });
    };

    vm.getData();

    // adressesService.fetchPaginatedAdresses(vm.nextPage++)
    //   .then(function(res) {
    //     vm.gridOptions1.data = vm.gridOptions1.data.concat(res);
    //   })
    //   .catch(function(err) {
    //     console.log(err);
    //   });

    //adressesService.fetchAdress()
    //  .then(function (data) {
        // var tmp = _.map(data, function (item) {
        //   return {
        //     name: item.name,
        //     city: item.city.name,
        //     createdAt: item.createdAt
        //   };
        // });
    //    vm.gridOptions1.data = data;
    //  });
  }
};
