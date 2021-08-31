const curso = "MEDICINA";
const cota = "Candidatos que, independentemente da renda (art. 14, II, Portaria Normativa nº 18\/2012), tenham cursado integralmente o ensino médio em escolas públicas (Lei nº 12.711\/2012).";

var request = require("request");

for (let index = 0; index < 1000; index++) {

var options = {
  method: 'GET',
  url: `https://sisu-api-pcr.apps.mec.gov.br/api/v1/oferta/instituicao/${index}`
};

request(options, function (error, response, body) {
    body = JSON.parse(body)
  var error = body.error;
   //  console.log(error);
  if(error !== "invalid") {step2(body)}
});

}
function step2(data){
   // console.log(data)

    for (let index = 0; index < 500; index++) {
        try {

        if (data[index].no_curso == curso){
            var options = {
                method: 'GET',
                url: `https://sisu-api-pcr.apps.mec.gov.br/api/v1/oferta/${data[index].co_oferta}/selecionados`
              };
              
              request(options, function (error, response, body) {
                body = JSON.parse(body)
                
               // console.log(body);

                        var menor = {};
                        menor.nu_nota_candidato = Infinity;

                        body.forEach(function(item){
                        if(item.no_mod_concorrencia == cota){

                            if (Number(item.nu_nota_candidato) < menor.nu_nota_candidato) menor = item;
                        }
                        });

                        //console.log(menor)
console.log(`=================================================================

${data.search_rule}
Vagas total: ${data[index].qt_vagas_sem2} vagas cota: ${menor.nu_classificacao}
Corte: ${menor.nu_nota_candidato}
`)
                   
//console.log(`${data.search_rule}	${menor.nu_nota_candidato}	${data[index].qt_vagas_sem2}	${menor.nu_classificacao}`)            
               
              });
              
            }
        } catch (error) {
            
        }
    }

  
}