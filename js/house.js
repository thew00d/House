

$( document ).ready(function() {

	var housePositions = [];
	var currentPosition = 1;
	var areas = [];
	var currentArea = "";

	$("#goleft").hide();
	$("#goright").hide();
	$("#goback").hide();
	$("header h2").text("Front Door");
	$("#description").text(positionDescription("Front Door"));

	main();

	function main()
	{
		positions();
		currentPosition = 1;

		// hide all the descriptions
		//for (var x = 0; x < areas.length; x++)
		//{
		//	$("#description " +  areas[x]).hide();			
		//}

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
							//console.log( housePositions[currentPosition].description) );
							console.log("classname: " +  getAreaClassName(housePositions[currentPosition].description) );

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
				console.log("show: #description " +  getAreaClassName(housePositions[currentPosition].description));
				//$("." +  getAreaClassName(housePositions[currentPosition].description)).show();			

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

				$("#description").text(housePositions[currentPosition].verboseDescription);
				$("header h2").text(housePositions[currentPosition].description);

				return false; 
			} 
		);	

	}

	function position(position, forwardPosition, rightPosition, backPosition, leftPosition, description, verboseDescription) 
	{
	  this.position = position;
	  this.forwardPosition = forwardPosition;
	  this.backPosition = backPosition;
	  this.leftPosition = leftPosition;
	  this.rightPosition = rightPosition;
	  this.description = description;
	  this.verboseDescription = positionDescription(this.description);
	  addArea(description);
	}


	function positions() 
	{

		//forwardPosition, rightPosition, backPosition, leftPosition
		// 0
		housePositions.push(new position(0, 0, 0, 0, 0, ""));

		// 1
		housePositions.push(new position(1, 2, 0, 0, 0, "Front Door"));

		// 2
		housePositions.push(new position(2, 10, 3, 1, 0, "Hallway"));

		// 3
		housePositions.push(new position(3, 5, 4, 0, 2, "Living Room"));

		// 4
		housePositions.push(new position(4, 6, 0, 0, 3, "Living Room"));				

		// 5
		housePositions.push(new position(5, 7, 6, 3, 0, "Living Room"));

		// 6
		housePositions.push(new position(6, 0, 0, 4, 5, "Living Room"));

		// 7
		housePositions.push(new position(7, 21, 8, 5, 0, "Kitchen"));

		// 8
		housePositions.push(new position(8, 0, 0, 0, 7, "Kitchen"));

		// 9
		housePositions.push(new position(9, 10, 0, 2, 0, "Stairs"));

		// 10
		housePositions.push(new position(10, 11, 0, 2, 0, "Stairs"));

		// 11
		housePositions.push(new position(11, 0, 15, 10, 12, "Landing"));

		// 12
		housePositions.push(new position(12, 14, 11, 0, 13, "Landing"));


		// 13
		housePositions.push(new position(13, 0, 12, 0, 0, "Bathroom"));


		// 14
		housePositions.push(new position(14, 0, 0, 12, 0, "Spare room"));


		// 15
		housePositions.push(new position(15, 17, 16, 0, 11, "Landing"));


		// 16
		housePositions.push(new position(16, 0, 0, 0, 15, "Junk Room"));


		// 17
		housePositions.push(new position(17, 18, 20, 15, 0, "Bedroom"));


		// 18
		housePositions.push(new position(18, 0, 19, 17, 0, "Bedroom"));


		// 19
		housePositions.push(new position(19, 0, 0, 20, 18, "Bedroom"));


		// 20
		housePositions.push(new position(20, 19, 0, 0, 17, "Bedroom"));

		// 21
		housePositions.push(new position(21, 0, 22, 7, 0, "Back Garden"));

		// 22
		housePositions.push(new position(22, 0, 0, 0, 21, "Back Garden"));

	}

	function positionDescription(position)
	{
		var posDes;
		switch(position)
		{
			case 'Front Door':
				posDes = "This is the front door.  As front doors go, it's fairly standard.  It has a lock which a key can be inserted into and with no more than a 40 degree turn to the left the door will open.";
				return posDes;
				break;

			case 'Hallway':
				posDes = "You now find yourself in the hallway.  This provides several options to you.  You can go up the stairs to the 2nd floor, or to your right there is the living room.  Shoes should be removed here to avoid any stainage on the cream carpets that are fitted throughout the house.";
				return posDes;
				break;

			case 'Stairs':
				posDes = "You are climbing the stairs.  This means you are either heading up to the 2nd floor or descending once again.  If you were to ascend and descend the stairs for 20 times in a row, this would probably provide you with a fairly nice workout.";
				return posDes;
				break;				

			case 'Living Room':
				posDes = "The living room is an idea place for sitting in front of the TV with your dinner and a beer or possibly a nice glass of Chablis.  You may prefer to call it the lounge but that is probably because you are working class.";
				return posDes;
				break;				

			case 'Back Garden':
				posDes = "The back garden is a great place to come if you want to get to the shed.  In the shed there are many treasures, mostly for tidying up the front and back gardens.  You might want to consider concreting over the front and back gardens and having the shed demolished.";
				return posDes;
				break;		

			case 'Kitchen':
				posDes = "The kitchen is an ideal place to be if you have something that needs cooking - be it a can of Heinz Macaroni Cheese or a packet of noodles.  Once you have cooked either of these, the dishwasher will be able to provide you with cleaning facilities.";
				return posDes;
				break;		

			case 'Bedroom':
				posDes = "If you are tired, the bedroom is the place to be.  ";
				return posDes;
				break;	

			case 'Landing':
				posDes = "this is the Landing";
				return posDes;
				break;		

			case 'Spare Room':
				posDes = "this is the spare room";
				return posDes;
				break;			

			case 'Bathroom':
				posDes = "this is the bathroom";
				return posDes;
				break;		

			default:
				posDes = "this is somewhere else";
				return posDes;
				break;

		}
	}

	function addArea(areaname)
	{
		var areaFound = false;

		areaname = areaname.toLowerCase();
		areaname = areaname.replace(/\s+/g, '');

		for (var x = 0; x < areas.length; x++)
		{
			if (areaname == areas[x])
			{
				areaFound = true;
			}
		}

		if (!areaFound)
		{
			areas.push (areaname);
		}
	}

	function getAreaClassName(areaname)
	{
		areaname = areaname.toLowerCase();
		areaname = areaname.replace(/\s+/g, '');
		return areaname.trim();

	}

});