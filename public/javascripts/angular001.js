
function switching($scope, ngAudio)
{
	$scope.switchState = "OFF";
	
	$scope.se = document.getElementById('uni');
	
	$scope.clicked = function()
	{	
		//$scope.playSound('uni');
	
		if($scope.switchState == "ON")
		{
			$scope.switchState = "OFF";
		}
		else
		{
			$scope.switchState = "ON";
		};
		
		$scope.se.pause();
		$scope.se.currentTime = 0;
		$scope.se.play();
	}
}