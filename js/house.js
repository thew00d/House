

$( document ).ready(function() {

	var housePositions = [];
	var currentPosition = 1;
	var actions = [];
	var areas = [];
	var currentArea = "";

	mouseLocation();

	// Set defaults for the 1st location
	$("#goleft").hide();
	$("#goright").hide();
	$("#goback").hide();
	$("#subheader h2").text("Front Door");
	$("#description").text(positionDescription("Front Door"));

	main();

	function main()
	{
		positions();
		positionActions();
		currentPosition = 1;

		// hide all the descriptions
		//for (var x = 0; x < areas.length; x++)
		//{
		//	$("#description " +  areas[x]).hide();			
		//}

		/* ----------------------------------------------------------
		Overrides the a click event so you can use the navigation buttons
		-------------------------------------------------------------*/

		$("#housepic a").click(
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
							//console.log("classname: " +  getAreaClassName(housePositions[currentPosition].description) );

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
				//console.log("show: #description " +  getAreaClassName(housePositions[currentPosition].description));
				//$("." +  getAreaClassName(housePositions[currentPosition].description)).show();			

				console.log('image' + currentPosition);
				console.log(housePositions[currentPosition]);
				$("#housepic").addClass('image' + currentPosition)


				if (housePositions[currentPosition].forwardPosition == 0)
				{
					$("#goforward").hide(2000);
				}
				else
				{
					$("#goforward").show(2000);
				}

				if (housePositions[currentPosition].leftPosition == 0)
				{
					$("#goleft").hide(2000);
				}
				else
				{
					$("#goleft").show(2000);
				}

				if (housePositions[currentPosition].backPosition == 0)
				{
					$("#goback").hide(2000);
				}
				else
				{
					$("#goback").show(2000);
				}

				if (housePositions[currentPosition].rightPosition == 0)
				{
					$("#goright").hide(2000);
				}
				else
				{
					$("#goright").show(2000);
				}

				$("#description").text(housePositions[currentPosition].verboseDescription);
				$("#subheader h2").text(housePositions[currentPosition].description);

				return false; 
			} 
		);	
	
		/*-------------------------------------------------------
		This tests for clicking on an area of the image - for
		clicking on light switches and the like
		-------------------------------------------------------*/
		$('#housepic').click( function (event) {
			var x = event.pageX - $('#housepic').offset().left
			var y = event.pageY - $('#housepic').offset().top
			
			for (var p = 0; p < actions.length; p ++)
			{
				if (actions[p].position == currentPosition )
				{
					if ( x > actions[p].minx && x < actions[p].maxx && y > actions[p].miny && y < actions[p].maxy )
					{
						// If its a new position then show the new picture
						if (actions[p].newposition > 0)
						{
							$("#housepic").removeClass('image' + currentPosition);
							$("#housepic").addClass('image' + actions[p].newposition);
							currentPosition = actions[p].newposition;
						}
						//If its a sound then play the sound
						else if (actions[p].sound > 0)
						{
							playSound(actions[p].sound)
						}
					}	
				}
			}
		});	

	}

	function playSound(sound)
	{

		var clickSound = new Audio('sounds/' + sound + '.mp3');
		clickSound.play();
		  console.log("sound played");

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

	function action(position, minx, miny, maxx, maxy, newposition, sound)
	{
		this.position = position;
		this.minx = minx;
		this.miny = miny;
		this.maxx = maxx;
		this.maxy = maxy;
		this.newposition = newposition;
		this.sound = sound;
	}

	/* ----------------------------------------------------------
	This sets up clickable positions on pictures for swtitching on
	lights etc
	-------------------------------------------------------------*/
	function positionActions()
	{

		// switch hall light on
		actions.push(new action(2, 165, 240, 209, 276, 23, 0))

		// switch hall light off
		actions.push(new action(23, 225, 272, 269, 320, 2, 0))

		// switch landing light on
		//actions.push(new action(11, 266, 156, 274, 174, 24, 0))

		// play doorbell sound
		actions.push(new action(1, 444, 103, 461, 122, 0, 1))	

		// play door knock sound
		actions.push(new action(1, 433, 32, 473, 47, 0, 2))	

		// play door knock sound
		actions.push(new action(1, 200, 365, 312, 412, 0, 2))	

	}

	/* ----------------------------------------------------------
	This sets up the map of the house and what happens when you click
	on the navigation buttons, and the Headings to each room
	-------------------------------------------------------------*/
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

		// 23 - Hallway lights on
		housePositions.push(new position(23, 10, 3, 1, 0, "Hallway"));

	}

	/* ----------------------------------------------------------
	This is the longer descriptions for each room of the house
	-------------------------------------------------------------*/
	function positionDescription(position)
	{
		var posDes;
		switch(position)
		{
			case 'Front Door':
				posDes = "This is the front door.  Feel free to go in but it might be considered rude not to knock or ring the bell (which oddly is located where you insert the key).";
				return posDes;
				break;

			case 'Hallway':
				posDes = "You now find yourself in the hallway.  This provides several options to you.  You can go up the stairs to the 2nd floor, or to your right there is the living room.  Shoes should be removed here to avoid any stainage on the cream carpets that are fitted throughout the house.  If it is too dark, feel free to turn on the light.";
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

			case 'Junk Room':
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

	/* ----------------------------------------------------------
	This turns the areaname into a useable class name and adds to 
	the array
	-------------------------------------------------------------*/
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

	function mouseLocation(){		
		//$('#housepic').mousemove( function (event) {
			$('#housepic').click( function (event) {

			var x = event.pageX - $('#housepic').offset().left
			var y = event.pageY - $('#housepic').offset().top
				console.log(x + " " + y);
			});	
		//});	
	}

	/*function getAreaClassName(areaname)
	{
		areaname = areaname.toLowerCase();
		areaname = areaname.replace(/\s+/g, '');
		return areaname.trim();

	}*/

});