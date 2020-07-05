var flags = false;
if(flags === true)
{
	var CHECK_LOG =true;
	var SECOND_DELAY =true;
	var CHECK_LOG_DISPLAY = true;
	var SECOND_DELAY_DISPLAY =true;

}
var secHistory;
var secHistory2;


function setup()
{
	createCanvas(900,300);
	angleMode(DEGREES);
	font = loadFont('assets/Monoton-Regular.ttf');
  	font2 = loadFont('assets/Orbitron-VariableFont_wght.ttf');
  	img = loadImage('assets/images/morning.png');
  	img2 = loadImage('assets/images/night.png');
}

function draw()
{
	background(51);

	let hr = 15;
	let min = minute();
	let sec = second();


	if(CHECK_LOG && SECOND_DELAY)
	{
		console.log((hr%12)+ ' : ' + min + ' : ' + sec);
		secHistory = sec;
		SECOND_DELAY = false;
	}
	if(sec != secHistory)
	{
		SECOND_DELAY = true;

	}


	fill(255);
	noStroke();
	textFont(font);
	textAlign(CENTER,CENTER);
    textSize(50);

    h=hr;
    // console.log(h);

    if(h<=6 || h>=18) 
	{
		image(img2,width*0.75,height*0.6,img.width/2, img.height/2);
		//night
		// console.log('Night');
	}
	else
	{
		image(img,width*0.75,height*0.6,img.width/2, img.height/2);
		// console.log('Day');
		//day
	}


    if(hr!=12)
    {
    	hr = hr%12;
    }
	if(hr<10)
    {
		hr = '0' + hr;
    }
    if(min<10)
    {
		min =  '0' +  min ;
    }
    if(sec<10)
    {
		sec =  '0' +  sec;
    }
    text(hr, 100, 200);
    text(min, 300, 200);
    text(sec, 500, 200);

    // translate(200,200);
    strokeWeight(6);
    stroke(255);
    noFill();
    ellipse(100,210,150,150);
    ellipse(300,210,150,150);
    ellipse(500,210,150,150);

    strokeWeight(4);
    /*htime = h*60*60 + min*60 + sec ;  //0 to 86400
    mtime = min*60 + sec;   //0 to 3600
    stime = sec;
    let hrArcAngle = map(htime , 0 ,86400 , 0, 360);
    let minArcAngle = map(mtime , 0 ,3600 , 0, 360);
    let secArcAngle = map(stime , 0 ,60 , 0, 360);*/

    let hrArcAngle = map(h , 0 ,24 , 0, 360);
    let minArcAngle = map(min , 0 ,60 , 0, 360);
    let secArcAngle = map(sec , 0 ,60 , 0, 360);
    if(h!==0)
    {
    	push();
    	translate(100,210);
    	rotate(-90);
    	stroke(0,255,150);
    	arc(0,0,150,150,0, hrArcAngle);
    	pop();
    }
    if(min!=0)
    {
    	push();
    	translate(300,210);
    	rotate(-90);
    	stroke(255,0,150);
	    arc(0,0,150,150,0, minArcAngle);
    	pop();
	}
	if(sec!=0)
	{
		push();
    	translate(500,210);
    	rotate(-90);
    	stroke(150,255,0);
	    arc(0,0,150,150,0, secArcAngle);
    	pop();
	}



    if(CHECK_LOG_DISPLAY && SECOND_DELAY_DISPLAY)
	{
		console.log('Display format: ' + hr + ' : ' + min + ' : ' + sec);
		secHistory2 = sec
		SECOND_DELAY_DISPLAY = false;
	}
	if(sec != secHistory2)
	{
		SECOND_DELAY_DISPLAY = true;

	}

}