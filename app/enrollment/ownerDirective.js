mainApp.directive("alpacaOwner", ["$interval", function($interval) {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            //On click
            /*$(elem).click(function() {
                $(this).popover("open");
            });
            //On interval
            $interval(function() {
                $(elem).popover("open");
            }, 1000);
*/  
            //On interval
            $interval(function() {
                $(elem).alpaca({
                    "dataSource": "./data/proposedInsured/ownerData.json",
                    "optionsSource": "./data/proposedInsured/ownerOptions.json",
                    "schemaSource": "./data/proposedInsured/ownerSchema.json"
                });
                
            }, 500);
        }
    }
}]);