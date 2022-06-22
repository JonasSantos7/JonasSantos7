var listadepecas = ['filtro de ar', 'motor', 'amortecedor']

if(listadepecas.length < 10)
{
    console.log('É possível cadastrar mais pecas')
}
else
{
    console.log('Não tem mais espaço na lsita')
}

let peso = 150

if (peso <100)
{
    console.log('A peça deve pesar no mínimo 100g')
}
else
{
    console.log('A peça possuí o peso adequeado')
}

let nomepeca = 'Disco de Freio'
if(nomepeca.length > 3)
{
    console.log('Nome da peça está adequado para o cadastro')
}
else if(nomepeca.length == 0){
    console.log('O nome da peça não pode ser vazio')
}