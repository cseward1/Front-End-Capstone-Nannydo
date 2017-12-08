angular
.module("CapstoneApp")
.controller("KidCtrl", function (kidFactory, $scope) {
    $scope.employees = []

    /**
     * Use factory to get all employees from Firebase
     */
    kidsFactory.list().then(data => {
        $scope.kids = data
    })
})