// Este arquivo é um módulo JavaScript que contém uma função para formatar preços em uma moeda específica. Ele define a moeda e o idioma a serem usados para a formatação, e exporta a função formataPreco, que recebe um valor de preço e retorna uma string formatada de acordo com as configurações definidas. Esta função pode ser usada em diferentes partes do aplicativo para exibir os preços dos produtos de forma consistente e legível para os usuários.

const moedaPais = 'BRL'
const idioma = 'pt-BR'

function formataPreco(preco) {
  return Number(preco).toLocaleString(idioma, {
    style: 'currency',
    currency: moedaPais
  })
}

export { formataPreco }