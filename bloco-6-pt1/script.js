let estados = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo",
               "Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná",
               "Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia",
               "Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"];

function selectCombo() {    
    for(let i = 0; i < estados.length; i++){        
        let options = document.createElement("option");
        options.value = i;
        options.text = estados[i];
        let comboEstados = document.getElementById('idEstado');

        comboEstados.appendChild(options);        
    }
}

function radioButton(valor) {
    let radio1 = document.getElementById("radioCasa");
    let radio2 = document.getElementById("radioApt");
 
    if(valor.value === 'radio1'){
        radio2.checked = false;
    }else if (valor.value === 'radio2'){
        radio1.checked = false;
    }    
}


// var opt0 = document.createElement("option");
// opt0.value = "0";
// opt0.text = "";
// comboCidades.add(opt0, comboCidades.options[0]);