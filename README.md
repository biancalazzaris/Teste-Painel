## Teste prático para a Painel Pesquisas

Objetivo: 
Criar um formulário (Página WEB), onde os pesquisadores
vão inserir os endereços dos moradores e esses dados serão estruturados em JSON. As
coordenadas geográficas também serão inseridas manualmente via formulário pelo
pesquisador.
Ao clicar em enviar o formulário as coordenadas geográficas (grau, minuto, segundo),
deverão ser convertidas para graus decimais (x,y). Depois os dados do endereço já com
as coordenadas convertidas serão armazenados em um JSON.

### O resultado pode ser acessado atráves do link a seguir:

http://testepainel-bl.surge.sh/

Foi utilizado Bootstrap 4 e JavaScript para resolução desse teste. 

Para conversão de GMS para Graus Decimais foi a seguinte:

Para entender "Grau decimal" busquei entender através do vídeo: https://www.youtube.com/watch?v=NgU-u3hkSsU 
E pesquisei sobre a conversão desses dados: http://forest-gis.com/2011/07/como-converter-graus-minutos-e-segundos-para-graus-decimais.html/#:~:text=Primeiro%20separamos%20a%20parte%20inteira,%3A%2020%C2%BA%2015%E2%80%9D%2035%E2%80%9D.
e
http://www.siggeo.com.br/2010/06/iniciando-construcao-de-um-mapa_7751.html
e
https://en.wikipedia.org/wiki/Decimal_degrees
e
https://content.meteoblue.com/pt/especificacoes/standards/posicao

Depois utilizei a opção escolhida (Radio Button) para transformar os valores que já haviam sidos calulados 
conforme entendido nos sites acima, para a sua devida direção.
