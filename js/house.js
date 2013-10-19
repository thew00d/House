

$( document ).ready(function() {

	var housePositions = [];
	var currentPosition = 1;

	$("#goleft").hide();
	$("#goright").hide();
	$("#goback").hide();

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


				if (housePositions[currentPosition].forwardPosition == 0)
				{
					$("#goforward").hide();
				}
				else
				{
					$("#goforward").show();
				}

				if (housePositions[currentPosition].leftPosition == 0)
				{
					$("#goleft").hide();
				}
				else
				{
					$("#goleft").show();
				}

				if (housePositions[currentPosition].backPosition == 0)
				{
					$("#goback").hide();
				}
				else
				{
					$("#goback").show();
				}

				if (housePositions[currentPosition].rightPosition == 0)
				{
					$("#goright").hide();
				}
				else
				{
					$("#goright").show();
				}



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
		housePositions.push(new position(2, 10, 3, 1, 0));

		// 3
		housePositions.push(new position(3, 5, 4, 0, 2));

		// 4
		housePositions.push(new position(4, 6, 0, 0, 3));				

		// 5
		housePositions.push(new position(5, 7, 6, 3, 0));

		// 6
		housePositions.push(new position(6, 0, 0, 4, 5));

		// 7
		housePositions.push(new position(7, 21, 8, 5, 0));

		// 8
		housePositions.push(new position(8, 0, 0, 0, 7));

		// 9
		housePositions.push(new position(9, 10, 0, 2, 0));

		// 10
		housePositions.push(new position(10, 11, 0, 2, 0));

		// 11
		housePositions.push(new position(11, 0, 15, 10, 12));

		// 12
		housePositions.push(new position(12, 14, 11, 0, 13));


		// 13
		housePositions.push(new position(13, 0, 12, 0, 0));


		// 14
		housePositions.push(new position(14, 0, 0, 12, 0));


		// 15
		housePositions.push(new position(15, 17, 16, 0, 11));


		// 16
		housePositions.push(new position(16, 0, 0, 0, 15));


		// 17
		housePositions.push(new position(17, 18, 20, 15, 0));


		// 18
		housePositions.push(new position(18, 0, 19, 17, 0));


		// 19
		housePositions.push(new position(19, 0, 0, 20, 18));


		// 20
		housePositions.push(new position(20, 19, 0, 0, 17));

		// 21
		housePositions.push(new position(21, 0, 22, 7, 0));

		// 22
		housePositions.push(new position(22, 0, 0, 0, 21));


	}

});