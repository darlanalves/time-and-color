'use strict';

$module.directive('timeColor', ['$interval', function($interval) {
    return {
        link: linker
    };

    function linker($scope, $element) {

        function update() {
            var now = new Date(),
                color = [
                    leftPad(now.getHours()),
                    leftPad(now.getMinutes()),
                    leftPad(now.getSeconds())
                ].join('');

            $element.css('background-color', '#' + color);
        }

        function leftPad(number) {
            return String(number < 10 ? '0' + number : number);
        }

        var timer = $interval(update, 1000);

        $scope.$on('$destroy', function() {
            if (timer) {
                $interval.cancel(timer);
            }
        });
    }
}]);
