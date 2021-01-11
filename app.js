

// Não atualizar a página automaticamente e limpa formulário 
let submit = document.getElementById("btn-submit");
let inputs = document.querySelectorAll("input");

submit.addEventListener('click', function(event) {
    event.preventDefault();
    inputs.forEach(input => input.value = '');
});

//Checar se valor é negativo (Lado Sul)
function checkSul(LATIDUDE){
    var DIR_SUL = document.getElementById('inputSUL');

    if (DIR_SUL.checked == true)
        LATIDUDE *= -1

    return LATIDUDE;
}
//Checar se valor é negativo (Lado Oeste)
function checkOeste(LONGITUDE){
    var DIR_SUL = document.getElementById('inputOESTE');

    if (DIR_SUL.checked == true)
        LONGITUDE *= -1

    return LONGITUDE;
}


// Chama todos os campos para criar o JSON
function JSon(){

    let TIPO_LOGRADOURO = document.getElementById('inputLogradouro').value;
    let NOME_LOGRADOURO = document.getElementById('inputAddress').value;
    let NUM_RESIDENCIA = document.getElementById('inputNumber').value;
    let COMPLEMENTO = document.getElementById('inputAddress2').value;
    let BAIRRO = document.getElementById('inputDistrict').value;
    let GRAU_LONG = Number (document.getElementById('inputGrau-Long').value);
    let MIN_LONG = Number (document.getElementById('inputMin-Long').value);
    let SEG_LONG = Number (document.getElementById('inputSeg-Long').value);
    let GRAU_LAT = Number (document.getElementById('inputGrau-Lat').value);
    let MIN_LAT = Number (document.getElementById('inputMin-Lat').value);
    let SEG_LAT = Number (document.getElementById('inputSeg-Lat').value);
    let LONGITUDE = GRAU_LONG + (MIN_LONG/60) + (SEG_LONG/3600);
    let LATITUDE = GRAU_LAT + (MIN_LAT/60) + (SEG_LAT/3600);
    LATITUDE = this.checkSul(LATITUDE)
    LONGITUDE = this.checkOeste(LONGITUDE)


    var endereco = {
        "TIPO_LOGRADOURO": TIPO_LOGRADOURO,
        "NOME_LOGRADOURO": NOME_LOGRADOURO,
        "NOME_LOGRADOURO": NOME_LOGRADOURO,
        "NUM_RESIDENCIA": NUM_RESIDENCIA,
        "COMPLEMENTO": COMPLEMENTO,
        "BAIRRO": BAIRRO,
        "LONGITUDE": LONGITUDE.toFixed(6), 
        "LATIDUDE": LATITUDE.toFixed(6), 
        
    }
    console.log(endereco);
};

