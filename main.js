<script type="text/javascript">

	var loop_links;
	var rajon3;
	var time_stopwatch;
    var popup;
	var i=0;
	var j=0;
	document.getElementById("demo").innerHTML = j;
	var k=0;
	document.getElementById("stp_watch").innerHTML = k;
	var l=0;
	document.getElementById("auto_earning").innerHTML = l;
	var links=[
	
	"http://turboagram.com/B22y", 
	"http://turboagram.com/B20a", 
	"http://turboagram.com/B25F", 
	"http://ceesty.com/wChhoM",
	"http://ceesty.com/wChheI",
	"http://ceesty.com/wChg66",
	"https://ouo.io/eQIPPAG",
	"https://ouo.io/JqNVXz",
	"https://ouo.io/XqS5Mnx" 		
	
	];
	var links_length = links.length;
	
			function openPopup() 
			{
							k=1;
				time_stopwatch= setInterval(kobir, 1000);
						function kobir(){
							document.getElementById("stp_watch").innerHTML = k;
							k++;
							if(k==20){
								k=0;
							}
						}
				if(i==0){
					popup= window.open( links[0],"My Window", "height=300,width=300, top=500, left=400", false);
					i++;
				}
					loop_links= setInterval(rajon, 20000);
					function rajon() {
						popup.close();
						$.ajax({
							url:"autoshurf_configure.php"
						})
						j++;
						document.getElementById("demo").innerHTML = j;
						l= j*0.00003;
						document.getElementById("auto_earning").innerHTML = l;
						
						
						if(i != links_length && i != 0){
							popup= window.open( links[i],"My Window", "height=300,width=300, top=500, left=400", false);
							i++;
						}
						else if(i == links_length){
							popup= window.open( links[0],"My Window", "height=300,width=300, top=500, left=400", false);
							i=1;
						}
						
					}

			}

						
					
    function closePopup() 
    {
        popup.close();
		clearInterval(loop_links);
		clearInterval(time_stopwatch);
    }


</script>
