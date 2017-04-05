var text = localStorage.getItem('exols');


if(text !==null){
	$('#mtextarea').val(text);

}


$('#btn').click(function(){
	var valeur = $('#champ').val();
	localStorage.setItem('exols', valeur);
	// $('#mtextarea').val(valeur);
	window.location.reload()

});

function chaine( nbCaracteres ){
	return "kjhkj";
}



//chaine( 10 );