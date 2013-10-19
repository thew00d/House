

$( document ).ready(function() {

	var housePositions = [];
	var currentPosition = 1;

	main();

	function main()
	{
		positions();
		currentPosition = 1;

		$("a").click(
			function() 
			{ 		
				event.preventDefault();
				console.log("here");
				if (housePositions[currentPosition].forwardposition != 0)
				{
					currentPosition = housePositions[currentPosition].forwardposition;
					console.log(currentPosition);

				}          
				return false; 
			} 
		);	

	}

	function position(position, forwardposition, backposition, leftposition, rightposition) 
	{
	  this.position = position;
	  this.forwardposition = forwardposition;
	  this.backposition = backposition;
	  this.leftposition = leftposition;
	  this.rightposition = rightposition;
	}


	function positions() 
	{
		housePositions.push(new position(0, 0, 0, 0, 0));
		housePositions.push(new position(1, 2, 0, 0, 0));
		housePositions.push(new position(2, 9, 1, 0, 3));
	}

});