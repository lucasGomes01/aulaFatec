function limpaFormularioCep() {
    document.getElementById("rua").value = ("");
    document.getElementById("bairro").value = ("");
    document.getElementById("cidade").value = ("");
    document.getElementById("estado").value = ("");
}

function retorno(conteudo){
	if (!("erro" in conteudo)) {
		document.getElementById("rua").value = (conteudo.logradouro);
		document.getElementById("bairro").value = (conteudo.bairro);
		document.getElementById("cidade").value = (conteudo.localidade);
		document.getElementById("estado").value = (conteudo.uf);
		document.getElementById("mensagemCep").innerHTML="<div class='alert alert-success'>Informações do endereço preenchida de forma automática.</div>";
	} else {
		limpaFormularioCep();
		document.getElementById("mensagemCep").innerHTML="<div class='alert alert-danger'>CEP não encontrado!</div>";
	}
}

function pesquisaCep(valor) {
	var cep = valor.replace(/\D/g,'');

	if (cep != "") {
		var validaCep = /^[0-9]{8}$/;
		if (validaCep.test(cep)) {
            document.getElementById("rua").value="...";
            document.getElementById("bairro").value="...";
            document.getElementById("cidade").value="...";
            document.getElementById("estado").value="...";

			var script = document.createElement("script");
			script.src = "https://viacep.com.br/ws/"+cep+"/json/?callback=retorno";

			document.body.appendChild(script);
		} else {
			limpaFormularioCep();
			document.getElementById("mensagemCep").innerHTML="<div class='alert alert-warning'>Formato de CEP inválido!</div>";
		}
	} else {
		limpaFormularioCep();
		console.log("cep invalido")
	}
}


function produto1(){
    document.getElementById("carrinhoLabel").innerHTML="Notebook Samsung";
    document.getElementById("carrinhoConteudo").innerHTML='<img class="img-fluid" src="../img/img1.jpeg">';
}

function produto2(){
    document.getElementById("carrinhoLabel").innerHTML="Notebook SamsungV2";
    document.getElementById("carrinhoConteudo").innerHTML='<img class="img-fluid" src="../img/img2.jpeg">';
}

function produto3(){
    document.getElementById("carrinhoLabel").innerHTML="Notebook Lenovo";
    document.getElementById("carrinhoConteudo").innerHTML='<img class="img-fluid" src="../img/img3.jpeg">';
}