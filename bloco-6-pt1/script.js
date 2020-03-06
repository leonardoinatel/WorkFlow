// function checarEmail(){
//     if( document.forms[0].email.value=="" 
//        || document.forms[0].email.value.indexOf('@')==-1 
//          || document.forms[0].email.value.indexOf('.')==-1 )
//         {
//           alert( "Por favor, informe um E-MAIL válido!" );
//           return false;
//         }
//     }

let estados = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo",
               "Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná",
               "Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia",
               "Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"];

let comboEstados = document.getElementsByTagName('select');


function selectCombo() {
    for(let i = 0; i < estados.length; i++){
        let options = document.createElement("option");
        options.value = i;
        options.text = estados[i];
        comboEstados.append(options)    
    }
}

// var opt0 = document.createElement("option");
// opt0.value = "0";
// opt0.text = "";
// comboCidades.add(opt0, comboCidades.options[0]);