angular.module('nodeAllAdmin').directive("sidebar",['$compile', 'communcationService', '$uibModal', function($compile, communcationService,$uibModal) {
    return {
        templateUrl : '/genetheme/directives/html/content/sidebar.html',
        scope: {},
        restrict: 'E',
        controller: function ($scope) {
            console.log('I am in the sidebar');

            $scope.clicker = function() {
              console.log('I am in the clicker');
            };

            var level1Expand = true;
            var level2Expand = true;

            $scope.animationsEnabled = true;

            


            $scope.endClick = function(id) {
                  console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzI am in the clicker');
                  console.log(id);
                  var obj = {"from": "sidebar", "data": id, "to": "Grid", "action": "select"};
                  communcationService.prepForBroadcast(obj);
                  var modalInstance = $uibModal.open({
                    templateUrl: './genetheme/directives/html/content/modalContent.html',
                    controller: 'modalContentCtrl',
                  });  
                  modalInstance.result.then(function (selectedItem) {
                    $scope.selected = selectedItem;
                    console.dir('--------------------------------THIS IS THE MODAL------------------------------------------------------');
                    console.dir(selectedItem);
                    console.dir('--------------------------------THIS IS THE MODAL------------------------------------------------------');
                  }, function () {
                    
                  });
              // $dialog.dialog({}).open('/genetheme/directives/html/content/modalContent.html');  
            };  

            $scope.Level1Click = function() {
              console.log('222222222222222222222222I am in the clicker');
              level1Expand = !level1Expand;
            };
            
            $scope.$on('handleBroadcast', function (event, args) {

            });

            // var schemaJsonData = [{"name":"Connection","id":"SCH_C_myConnection","ip":"127.0.0.1","children":[{"name":"informationDB","id":"SCH_C_myConnection_DB_informationDB","children":[{"name":"Tables","id":"SCH_C_myConnection_DB_informationDB_TH","children":[{"name":"table1","id":"SCH_C_myConnection_DB_informationDB_T_tabe1"},{"name":"table2","id":"SCH_C_myConnection_DB_informationDB_T_tabe2"}]}]},{"name":"exampleDB","id":"SCH_C_myConnection_DB_exampleDB","children":[{"name":"Tables","id":"SCH_C_myConnection_DB_informationDB_TH","children":[]}]}]},{"name":"Connection2222","id":"SCH_C_myConnection222","ip":"127.0.0.12222","children":[{"name":"informationDB","id":"SCH_C_myConnection_DB_informationDB","children":[{"name":"Tables","id":"SCH_C_myConnection_DB_informationDB_TH","children":[{"name":"exampleTable1","id":"SCH_C_myConnection_DB_informationDB_T_exampleTable1"}]}]}]}];
            var schemaJsonData = [{"name":"connection","host":"localhost","id":"SCH_C_connection","user":"root","password":"newpwd","children":[{"name":"information_schema","id":"SCH_C_connection_DB_information_schema","children":[{"name":"Tables","id":"SCH_C_myConnection_DB_informationDB_TH","children":[]}]},{"name":"mysql","id":"SCH_C_connection_DB_mysql","children":[{"name":"Tables","id":"SCH_C_myConnection_DB_informationDB_TH","children":[]}]},{"name":"performance_schema","id":"SCH_C_connection_DB_performance_schema","children":[{"name":"Tables","id":"SCH_C_myConnection_DB_informationDB_TH","children":[]}]},{"name":"timetrack","id":"SCH_C_connection_DB_timetrack","children":[{"name":"Tables","id":"SCH_C_myConnection_DB_informationDB_TH","children":[{"name":"employee","id":"SCH_C_connection_DB_timetrack_T_employee"},{"name":"work","id":"SCH_C_connection_DB_timetrack_T_work"}]}]}]}];
            var managementSchemaJsonData = [{
              "name": "myConnection",
              "id": "SCH_C_myConnection",
              "children": [{
                "name": "informationDB",
                "id": "SCH_C_myConnection_DB_informationDB",
                "children": [{
                    "name": "Tables",
                    "id": "SCH_C_myConnection_DB_informationDB_TH",
                    "children": [{
                        "name": "table1",
                        "id": "SCH_C_myConnection_DB_informationDB_T_tabe1",
                      }, {
                        "name": "table2",
                        "id": "SCH_C_myConnection_DB_informationDB_T_tabe2",
                    }]
                },
                {
                    "name": "view",
                    "id": "SCH_C_myConnection_DB_informationDB_TH",
                    "children": [{
                        "name": "view1",
                        "id": "SCH_C_myConnection_DB_informationDB_T_tabe1",
                      }, {
                        "name": "view2",
                        "id": "SCH_C_myConnection_DB_informationDB_T_tabe2",
                }],
              }]
            }]
            }];

            $scope.schemaData = schemaJsonData;
            $scope.managementData = managementSchemaJsonData;
        }
    };
}]);

angular.module('nodeAllAdmin').animation('.slide', function() {
  var NG_HIDE_CLASS = 'ng-hide';
  return {
    beforeAddClass: function(element, className, done) {
      if(className === NG_HIDE_CLASS) {
        element.slideUp(done);
      }
    },
    removeClass: function(element, className, done) {
      if(className === NG_HIDE_CLASS) {
        element.hide().slideDown(done);
      }
    }
  }
});

