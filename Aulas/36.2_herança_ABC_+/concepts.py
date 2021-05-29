concepts = {
    "composition": "incorporar em um objeto outro objeto, para compartilhar código de maneira eficaz",
    "class_method": "métodos que podem ser chamados diretamente pela classe definida, e não por sua instância, para definirmos quando instânciar um objeto dessa classe for desnecessário! Utilizam, obrigatóriamente, atributos ou métodos internos da classe em seu funcionamento;",
    "static_method": "como os métodos de classe, mas não utilizam nada de sua classe em seu funcionamento",
    "inheritance": "é uma forma de especializar o comportamento de uma classe com outra classe;",
    "abstract_class": "uma classe que não pode ser instanciada. Utilizada para definir as funções comuns (nem sempre abstratas) e suas assinaturas",
    "abstract_method": "um método, ou função, que precisa ser implemetado por uma classe herdeira para  funcionar corretamente. Criado para definir uma Interface",
    "abstract_function": "",
    "interface": "conjunto de mensagens (funções) que um objeto pode interpretar . OBS: Lembra que falamos que uma vantagem da Programação Orientada a Objetos é que só precisamos saber como instanciar um objeto e quais funções ele tem ? Falando a mesma coisa de maneira mais técnica, podemos dizer que a Programação Orientada a Objetos garante interfaces bem definidas para as várias partes do nosso programa se comunicarem sem que se precise saber como, internamente, cada parte funciona . Se suas interfaces tem nomes bons e lógicas bem definidas, fica fácil reusar o código que você escreveu! Não é preciso entender como ele funciona, só como me comunico com ele.",
}

WARNING = "Utilize herança para especialização e composição para compartilhamento de código."

WARNING_TWO: "Na Programação Orientada a Objetos, você deve criar entidades ( Abstração ) com as mensagens que escuta bem definidas ( Encapsulamento ), podendo especializar comportamentos de entidades ( Herança ) contanto que garanta que a forma de enviar mensagens é consistente ( Polimorfismo )"
