function valider()
{
	var reference=document.getElementById("exampleInputReference").value;
	var nom=document.getElementById("exampleInputNom").value;
	var description=document.getElementById("exampleDescription").value;
	if(reference =="" || nom == "" || description == "")
	{
		alert("Ne laissez pas les champs vide!");
	}
	if(description.length > 200)
	{
		alert("Description trop longue");
	}
	if(description.charAt(0) ==" " || nom.charAt(0) == " " || reference.charAt(0) == " ")
	{
		alert("Verfier les champs");
	}
	if(nom.length > 100)
	{
		alert("Nom trop long");
	}
}


function modifier()
{
	var nom=document.getElementById("exampleInputNom").value;
	var description=document.getElementById("exampleDescription").value;
	if(nom == "" || description == "")
	{
		alert("Ne laissez pas les champs vide!");
	}
	if(description.length > 200)
	{
		alert("Description trop longue");
	}
	if(description.charAt(0) ==" " || nom.charAt(0) == " ")
	{
		alert("Verfier les champs");
	}
	if(nom.length > 100)
	{
		alert("Nom trop long");
	}
}
function confirmer()
{
	confirm("Etes vous sur de supprimer cet article?");
}

function confirmerfournisseur()
{
	confirm("Etes vous sur de supprimer ce fournisseur?");
}

function modifierfournisseur()
{
	var num=document.getElementById("exampleNumber").value;
	var adr=document.getElementById("exampleAdresse").value;
	var nom=document.getElementById("exampleInputNom").value;
	var letters=/^[A-Za-z]+$/;
	var number=/^[0-9]+$/;
	var chaine=nom.toUpperCase();
	var i;
	var test=0;
	if(nom == "" || num == "" || adr == "")
	{
		alert("Veuilliez remplir tout les champs");
	}
	if(adr.charAt(0) == " " || nom.charAt(0)==" ")
	{
		alert("Le premier caractere ne doit pas etre un espace");
	}
	for (i=0;i<chaine.length;i++)
	{
		if(chaine.charCodeAt(i)<65 || chaine.charCodeAt(i)> 90)
		{
			if(chaine.charAt(i) != " ")
			{
				test=1;
			}
		}
	}
	if(test==1)
	{
		alert("Champs nom Erroné");
	}
	if(num.match(number))
	{
		
	}
	else
	{
		alert("Veulliez entrer des chiffres dans le champs Numero");
	}
}

function validerfournisseur()
{
	var Identifiant=document.getElementById("exampleInputID").value;
	
	var adr=document.getElementById("exampleAdresse").value;
	var nom=document.getElementById("exampleInputNom").value;
	var letters=/^[A-Za-z]+$/;
	var number=/^[0-9]+$/;
	var chaine=nom.toUpperCase();
	var i;
	var test=0;

	if(Identifiant == "" || nom== "" || num == "" || adr== "")
	{
		alert("Veuilliez remplir tout les champs");
	}
	
	if(Identifiant.charAt(0) == " " || adr.charAt(0) == " " || nom.charAt(0)==" ")
	{
		alert("Le premier caractere ne doit pas etre un espace");
	}
	
	for (i=0;i<chaine.length;i++)
	{
		if(chaine.charCodeAt(i)<65 || chaine.charCodeAt(i)> 90)
		{
			if(chaine.charAt(i) != " ")
			{
				test=1;
			}
		}
	}
	if(test==1)
	{
		alert("Champs nom Erroné");
	}
	
}




