let array = [];


const Lib = {
    renderCollection: function (collection, template, target){
        let html='';
        let result = document.querySelector(target);
      
        for(let i=0; i<collection.length; i++){
            let item = collection[i];
            html += template(item);
        }
  
        result.innerHTML = html;
    },

    renderItem : function (item, template, target){
      document.querySelector(target).innerHTML = template(item)
    },

    getData: async function (url){
      const response = await fetch(url);
      return response.json();
    }
};

function card({ name, images:{sm}, biography:{fullName, alterEgos, alignment, publisher}, appearance:{gender, race}, powerstats:{intelligence, strength, speed, durability, power, combat}}){
    return `<div class="container">
				<div class="box">
   			<div class="charName">
       		 <div class="image">
           	 <img src="${sm}">
       		 </div>
    		</div>

				<div class="charinfo">
       		 <div class="info">
						<div class="basic">
            		<h1>Character Name: ${name}</h1>
        		</div>
    				</div>
            	 <p> Character info</p>
							 <p> Original name: ${fullName}</p>
			 				<p> Alter ego: ${alterEgos}</p>
			 				<p> Gender: ${gender}</p>
			 				<p> Race/Species: ${race}</p>
                            <p> Publisher: ${publisher}</p>

        </div>
			<div class="details">
    		<div class="context">
        	<h1>Character Stats</h1>
        		<p>Intelligence: ${intelligence}</p>
            <p>Strength: ${strength}</p>
            <p>Speed: ${speed}</p>
            <p>Durability: ${durability}</p>
            <p>Power: ${power}</p>
            <p>Combat: ${combat}</p>

    		</div>
			</div>
    </div> 		
</div>`
;
}

function aside({name, biography:{alignment}}){

                    if(alignment === "good"){
                        return `
                        <div class="cname"><li > ${name} </li>
                        <div class="secrete-good"><span> ${alignment}</span></div>
                        </div>`
                    }
                    else{
                        return `
                        <div class="cname"><li > ${name} </li>
                        <div class="secrete-bad"><span> ${alignment}</span></div>
                        </div>`
                    }
                    
}



async function showHeroes(){
    try{
        let data = await Lib.getData("https://akabab.github.io/superhero-api/api/all.json");
    console.log(data);
    array = data;
		 	Lib.renderCollection(array, aside, '.display_names');
			Lib.renderCollection(array, card, '#Character'); 
    }
    catch(err){
        console.log(err);
    }
    
}


showHeroes();






