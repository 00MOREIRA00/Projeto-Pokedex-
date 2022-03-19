/*O QUE FAZER?

Quando clicar no pokemon da listagem temos que esconder o cartão do pokemon aberto e
mostrar o cartão corrrespodente ao que foi selecionado na listagem


para isso vamos precisar criar duas variaveis:
-Listagem 
-Cartão Pokemon

Precisamos criar duas variaveis no Js para trabalhar com os elementos da tela

Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem do 
pokemons

-Remover a classe aberto só do cartão que está aberto.
-Ao clicar em pokemon da listagem pegamos o id desse pokemon para saber qual cartão 
mostrar.
-Remover a classe ativo que marca o pokemon selecionado.
-Adicionar a classe ativo no item da lista selecionado.
*/



//1º - Precisamos criar duas variáveis no Js para trabalhar com os elementos da tela.

//Listagem - Recuperando Listagem de Pokemons
const listaSelecaoPokemons = document.querySelectorAll('.pokemon') 

//Cartão Pokemon - Recuperando os cartões de pokemons no sistema
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')
console.log(pokemonsCard)


//2º Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem do pokemons
listaSelecaoPokemons.forEach(pokemon =>{
	pokemon.addEventListener('click', () =>{

		//remover a classe aberto só do cartão que esta aberto
		const cartaoPokemonAberto = document.querySelector('.aberto')
		cartaoPokemonAberto.classList.remove('aberto')

		//Ao clicar em pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar.
		const idPokemonSelecionado = pokemon.attributes.id.value

		const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
		const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
		cartaoPokemonParaAbrir.classList.add('aberto')

		//remover a classe ativo que marca o pokemon selecionados
		const pokemonAtivoNaListagem = document.querySelector('.ativo')
		pokemonAtivoNaListagem.classList.remove('ativo')

		//adicionar a classe ativo na listagem selecionada
		const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
		pokemonSelecionadoNaListagem.classList.add('ativo')
	})
})