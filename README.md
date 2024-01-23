# Sisu-scraper
Demo: https://www.youtube.com/watch?v=bSCbrXIaPhU


## Uso:
Editar as constantes
```js
const curso = "MEDICINA";
const cota = "Candidatos que, independentemente da renda (art. 14, II, Portaria Normativa nº 18\/2012), tenham cursado integralmente o ensino médio em escolas públicas (Lei nº 12.711\/2012).";
```

## Extrair token de autenticação
  ```js
  sessionStorage.getItem("auth");
  ```

## Cotas
|	Código	|	Concorrência	|
---	---	|	---	|
|	0	|	Ampla concorrência	|
|	9032	|	Candidatos autodeclarados pretos, pardos ou ind\u00edgenas, com renda familiar bruta per capita igual ou inferior a 1 sal\u00e1rio m\u00ednimo e que tenham cursado integralmente o ensino m\u00e9dio em escolas p\u00fablicas (Lei n\u00ba 12.711\/2012).	|
|	6	|	Candidatos autodeclarados pretos, pardos ou ind\u00edgenas, independentemente da renda, que tenham cursado integralmente o ensino m\u00e9dio em escolas p\u00fablicas (Lei n\u00ba 12.711\/2012).	|
|	9505	|	concorrentes \u00e0s vagas de ampla concorr\u00eancia para o Curso de Medicina - Natal que tiverem cursado todo o ensino m\u00e9dio em escolas regulares do Estado do Rio Grande do Norte, exclu\u00eddos aqueles que conclu\u00edram o ensino m\u00e9dio por meio de exames supletivos, Exame Nacional para Certifica\u00e7\u00e3o de Compet\u00eancias de Jovens e Adultos - ENCCEJA e equivalentes.	|
|	9026	|	Candidatos autodeclarados quilombolas, com renda familiar bruta per capita igual ou inferior a 1 sal\u00e1rio m\u00ednimo e que tenham cursado integralmente o ensino m\u00e9dio em escolas p\u00fablicas (Lei n\u00ba 12.711\/2012).	|
|	9024	|	Candidatos com defici\u00eancia, independentemente da renda, que tenham cursado integralmente o ensino m\u00e9dio em escolas p\u00fablicas (Lei n\u00ba 12.711\/2012).	|
|	9025	|	Candidatos com defici\u00eancia, que tenham renda familiar bruta per capita igual ou inferior a 1 sal\u00e1rio m\u00ednimo e que tenham cursado integralmente o ensino m\u00e9dio em escolas p\u00fablicas (Lei n\u00ba 12.711\/2012)"	|
|	9028	|	Candidatos com renda familiar bruta per capita igual ou inferior a 1 sal\u00e1rio m\u00ednimo que tenham cursado integralmente o ensino m\u00e9dio em escolas p\u00fablicas (Lei n\u00ba 12.711\/2012).	|
|	9029	|	Candidatos que, independentemente da renda, tenham cursado integralmente o ensino m\u00e9dio em escolas p\u00fablicas (Lei n\u00ba 12.711\/2012).	|
|	9506	|	com defici\u00eancia oriundos da rede de ensino privada ou p\u00fablica. Os candidatos oriundos da rede p\u00fablica devem optar por concorrer \u00e0 vaga desta a\u00e7\u00e3o afirmativa ou \u00e0s vagas reservadas para os grupos de cotas estabelecidos na Lei n\u00ba 12.711\/2012, n\u00e3o sendo permitida aplica\u00e7\u00e3o cumulativa.	|
|	9821	|	que tenham cursado todo o Ensino M\u00e9dio, presencial e regular, em escolas privadas ou p\u00fablicas da regi\u00e3o do Estado do Acre	|


## Roda o script:
e salva o resultado em Resultado.txt
```shell
node .\index.js >Resultado.txt
```
