const id_curso = 37;
const auth = JSON.parse('{"token_type":"Bearer","scope":"govbr_empresa+phone+email+openid+profile","access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIwMTYzOTI0MzA5NyIsImF1ZCI6InNpc3VhbHVuby5tZWMuZ292LmJyIiwic2NvcGUiOlsiZW1haWwiLCJnb3Zicl9lbXByZXNhIiwib3BlbmlkIiwicGhvbmUiLCJwcm9maWxlIl0sImFtciI6WyJwYXNzd2QiXSwiaXNzIjoiaHR0cHM6XC9cL3Nzby5hY2Vzc28uZ292LmJyXC8iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiIwMTYzOTI0MzA5NyIsImV4cCI6MTY0NTAzNzExNCwiaWF0IjoxNjQ1MDM1OTE0LCJqdGkiOiI5MTFiNGQ4NC01NTgxLTQzYTUtYTZiYi0xYTg5ZjY0M2EyZTIiLCJjYW5kaWRhdG8iOnsibnVfY3BmIjoiMTYzOTI0MzA5NyIsIm51X25vdGFfciI6IjgyMC4wIiwiY29faW5zY3JpY2FvX2VuZW0iOjIxMTAwODEwNjU0NywiZHRfY2llbnRlX2RhZG9zX2NvbnRhdG8iOiIyMDIyLTAyLTE1IDA3OjQwOjE5LjM4MTAwMDAiLCJpbl90cmVpbmVpcm8iOiIwIn19.dMzyGIp6fA3gE0AIrZq0-jXDnL4fh-b1QQFb9CtEGUTKOxsHgkczYBwrupiTHcmR4wIhZOm6AnuAufZgYmGkqcs3DglVEwR8XmYjrxDdpx25WVYOXZlPnCvJ4wspd9Bt5Yhwk8FfmtFIdA4E7x1ZxcFNs5pTWQ7W9IOZ4BoZplR0BsX45BQepIol9hW4yNNaxs0yaQf9kt0Md1IfmkMHTIdZWTXKwWQ_5Ni0OS1c2LtTo6JdkIhuqli7GJEOqAQsxev2YM7zcIfFrelnVJdiXVC1MgjzeGWuv7UdqLpuHoALgfzRQL1xurQUPJDQ0ECBo5arL8UcUZQe9e5J7-oYfw","expires":1645039514}')
const id_cota = 0;
var request = require("request");

const objectToArray = obj => {
    const keys = Object.keys(obj);
    const res = [];
    for(let i = 0; i < keys.length; i++){
       res.push(obj[keys[i]]);
    };
    return res;
 };
var result = {};
result.lista = [];
request(`https://sisualuno-api-pcr.apps.mec.gov.br/api/v1/oferta/curso/${id_curso}`, async function (error, response, body) {
    body = JSON.parse(body)
    result.curso = body.search_rule;
    const ofertas = objectToArray(body)
    for (let index = 0; index < ofertas.length; index++) {
        if(ofertas[index].co_oferta){
            request({
                "headers": {
                    "accept": "application/json, text/plain, */*",
                    "authorization": `${auth.token_type} ${auth.access_token}`,
                    "content-type": "application/json",
                    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Sidekick\";v=\"96\"",
                    "sec-ch-ua-mobile": "?1",
                    "sec-ch-ua-platform": "\"Android\"",
                    "Referer": "https://sisualuno.mec.gov.br/",
                    "Referrer-Policy": "strict-origin-when-cross-origin"
                },
                "body": null,
                "method": "GET",
                "url": `https://sisualuno-api-pcr.apps.mec.gov.br/api/v1/oferta/${ofertas[index].co_oferta}/modalidades/candidato`
            }, function (error, response, body) {
                body = JSON.parse(body);
                result.lista[index] = {};
                result.lista[index].nota = {};
                result.lista[index].nota.corte = body.modalidades[id_cota].nu_nota_corte;
                result.lista[index].nota.aluno = body.modalidades[id_cota].nu_nota_candidato;
                result.lista[index].sigla = body.oferta.sg_ies;
                result.lista[index].estado = body.oferta.sg_uf_campus;
                result.lista[index].cidade = body.oferta.no_municipio_campus;
            });
        }
    }
    
    
})




setTimeout(()=>{console.log(JSON.stringify(result));}, 5000);
