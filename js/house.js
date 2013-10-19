

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

				$("#housepic").removeClass('image' + currentPosition)
				switch(this.id)
				{
					case 'goforward':
						console.log(housePositions[currentPosition].forwardPosition);
						if (housePositions[currentPosition].forwardPosition != 0)
						{

							currentPosition = housePositions[currentPosition].forwardPosition;

						}          

					  break;
					case 'goright':
						console.log(housePositions[currentPosition].rightPosition);
						if (housePositions[currentPosition].rightPosition != 0)
						{
							currentPosition = housePositions[currentPosition].rightPosition;

						}          

					  break;
					case 'goback':
						console.log(housePositions[currentPosition].backPosition);						
						if (housePositions[currentPosition].backPosition != 0)
						{
							currentPosition = housePositions[currentPosition].backPosition;

						}          

					  break;
					case 'goleft':
						console.log(housePositions[currentPosition].leftPosition);							
						if (housePositions[currentPosition].leftPosition != 0)
						{
							currentPosition = housePositions[currentPosition].leftPosition;
							
						}          
					  break;
					default:
						break;
				}

				console.log('image' + currentPosition);
				console.log(housePositions[currentPosition]);
				$("#housepic").addClass('image' + currentPosition)


				return false; 
			} 
		);	

	}

	function position(position, forwardPosition, rightPosition, backPosition, leftPosition) 
	{
	  this.position = position;
	  this.forwardPosition = forwardPosition;
	  this.backPosition = backPosition;
	  this.leftPosition = leftPosition;
	  this.rightPosition = rightPosition;
	}


	function positions() 
	{

		//forwardPosition, rightPosition, backPosition, leftPosition
		// 0
		housePositions.push(new position(0, 0, 0, 0, 0));

		// 1
		housePositions.push(new position(1, 2, 0, 0, 0));

		// 2
		housePositions.push(new position(2, 9, 3, 1, 0));

		// 3
		housePositions.push(new position(3, 5, 4, 0, 2));

		// 4
		housePositions.push(new position(4, 6, 0, 0, 3));				

		// 5
		housePositions.push(new position(5, 7, 6, 3, 0));

		// 6
		housePositions.push(new position(6, 0, 0, 4, 5));

		// 7
		housePositions.push(new position(7, 13, 8, 5, 0));

		// 8
		housePositions.push(new position(8, 0, 0, 0, 7));

		// 9
		housePositions.push(new position(9, 10, 0, 2, 0));

		// 10
		housePositions.push(new position(10, 0, 0, 0, 0));

		// 11
		housePositions.push(new position(11, 0, 0, 0, 0));

		// 12
		housePositions.push(new position(12, 0, 0, 0, 0));
	}

});