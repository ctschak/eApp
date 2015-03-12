mainApp.directive("alpacaInsured", ["$interval", function($interval) {
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
                    "dataSource": "./data/proposedInsured/data.json",
                    "optionsSource": "./data/proposedInsured/options.json",
                    "schemaSource": "./data/proposedInsured/schema.json"
                });
                
            }, 500);
        }
    }
}]);