angular.module("umbraco").controller("googlemapgeocoder.controller",
    function ($scope, assetsService) {
        // initialise variables
        var geocoder;

        // use assests service to load Google maps api
        assetsService.loadJs("https://maps.googleapis.com/maps/api/js?key=");

        // called when Google maps api has loaded
        function initialize() {
            // create geocoder
            geocoder = new google.maps.Geocoder();

        }

        // runs when geocode button in view is clicked
        $scope.codeAddress = function () {
            var address = $scope.model.value.address;

            var lat, lng;
            // use Google api to geocode location

            initialize();
            geocoder.geocode({ 'address': address }, function (results, status) {
                // set location if geocode successful
                lat = results[0].geometry.location.lat();
                lng = results[0].geometry.location.lng();
                $('#clicker').click();

                if (status == google.maps.GeocoderStatus.OK) {
                    // set something to $scope.model.value here.

                    $scope.model.value.lat = lat;
                    $scope.model.value.lng = lng;
                    console.log($scope.model)
                    var unsubscribe = $scope.$on("formSubmitting", function (ev, args) {
                        $scope.model.value = { 'address': address, 'lat':lat, 'lng':lng};
                        //$scope.model.latitude = lat;
                        //$scope.model.longitude = lng;
                    });

                } else {
                    alert('Geocode was not successful');

                }
            });
        }
    }); 