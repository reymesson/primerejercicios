var jsonObj = [{
	"name": "html",
	"parent": "null",
	"children": [
		{
			"name": "head",
			"parent": "html"
		},
		{
			"name": "body",
			"parent": "html",
			"children": [
				{
					"name": "h1",
					"parent": "body"
				},
				{
					"name": "div",
					"parent": "body",
					"children": [
						{
							"name": "p",
							"parent": "body",
							"children": [
								{
									"name": "strong",
									"parent": "p"
								}
							]
						}
					]
				},
				{
					"name": "div",
					"parent": "body",
					"children": [
						{
							"name": "h2",
							"parent": "div"
						},
						{
							"name": "p",
							"parent": "div"
						},
						{
							"name": "ul",
							"parent": "div",
							"children": [
								{
									"name": "li",
									"parent": "ul"
								},
								{
									"name": "li",
									"parent": "ul"
								}
							]
						}
					]
				}
			]
		}
	]
}];

var listEl = document.getElementById("tree");

makeList(jsonObj,listEl);

function makeList( jsonObject, listElement){
    for(var i in jsonObject){//iterate through the array or object
        //insert the next child into the list as a <li>
        var newLI = document.createElement('li');



        if  (jsonObject[i] instanceof Array){
            newLI.innerHTML=i+": ARRAY";            
        }
        else if (  jsonObject[i] instanceof Object){
            newLI.innerHTML=i+": OBJECT";            
        }
        else
            newLI.innerHTML=i+': '+jsonObject[i];
        listElement.appendChild(newLI);   
        //insert a <ul> for nested nodes 
        if  (jsonObject[i] instanceof Array || jsonObject[i] instanceof Object){
            var newUL = document.createElement('ul');
            //newUL.innerHTML=i;
            listElement.appendChild(newUL);
            makeList(jsonObject[i],newUL);
        }
    }
}


