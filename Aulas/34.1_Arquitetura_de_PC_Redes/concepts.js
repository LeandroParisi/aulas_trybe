const concepts = {
  'client-server': '',
  email: '1972 - invenção',
  ethernet: 'bob metcalfe - padrão de conexão',
  
  alternativeNets: {
    CSNET: '',
    USENET: 'foruns e grupos de discussão',
    BITNET: 'email and archive transfer',
    NSFNET: 'access of researches to super PCS and DBs',
  },

  timeline: {
    1990: 'HTML + URLs + HTTP + WWW'
  },

  geniuses: {
    timBernersLee: 'world wide web foundation'
  },

  networkTypes: {
    pan: 'personal area network - ex.: bluetooth',
    lan: 'local area network - seft explanatory, right? (at least for me)',
    man: 'metropolitan area network - ex.: connects many networks in an urban or bigger area',
    wan: 'wide area netwoek - geographycally distributed network, we go global bitch!!'
  },

  protocols: {
    NCP: 'primeiro protocolo de conexão da ARPA: troca de arquivos e uso remoto de maquinas',  
    P2P: '',
    FTP: 'file transfer protocol',
    TCP_IP: {
      name:'transmission control protocol / internet protocol - padrão vive até hoje',
      layers: {
        interface: 'Fisic and enlace (from ISO)',
        network: 'network (from ISO)',
        transport: 'transport (from ISO)',
        application: 'session, interface, application (from ISO) '

      },
    },
    UDP: 'can lose packages but is faster'
  },

  layers_Models: {
    Modelo_ISO_OSI: {
      name: 'Open Systems Interconnection',
      parts: {
        fisic: {
          simple: 'hardware, cable, optic cable, etc.',
          detailed: `Estabelece a comunicação entre os dispositivos no sentido físico. Responsável pelo cabeamento, pelas características elétricas como tensão, ópticas (quando se der por meio óptico) ou eletromagnéticas em uma rede sem fio. Tudo isso garantindo que ocorra a transmissão dos dados pelos meios físicos (hardware), sem perder 0 s e 1 s.`,
        },
        enlace: {
          simple: 'detect and correct eventual errors from transmission ex.: interference on fisic layer',
          detailed: `Também chamada de "link de dados", essa camada é responsável pela detecção e eventualmente pela correção de erros que tenham ocorrido no nível físico. Ela também realiza o controle do fluxo da transmissão entre um dispositivo e outro.`,
        },
        network: {
          simple: 'addresses information to respective addresses / paths',
          detailed: `Responsável pelo endereçamento dos dispositivos na rede, assim como pela rota (caminho) que os pacotes deverão percorrer para chegarem da origem até destino.`,
        },
        transport: {
          simple: 'correct eventual errors from other 3 layers / order packages',
          detailed: `Responsável pela detecção e correção de erros que tenham ocorrido nas camadas anteriores, assim como pela ordenação, garantindo que os dados saídos da origem sejam os mesmos no destino. Além disso, ela define a conexão que será usada e como estabelecê-la, assim como controla o fluxo e congestionamento de dados.`,
        },
        session: {
          simple: 'status from a session',
          detailed: `Responsável pela comunicação entre dois processos que estão em máquinas diferentes, controlando o status, definindo quando deve começar, terminar ou reiniciar a comunicação entre origem e destino.`
        },
        interface: {
          simple: 'presentation: transpilation of characters for example',
          detailed: `Responsável pela conversão entre os formatos de caracteres para que possam ser utilizados na transmissão, também responsável pela compressão e criptografia desses dados.`,
        },
        application: {
          simple: '',
          detailed: `Essa camada diz respeito dos protocolos de comunicação, controlando sintaxe e semântica da mensagem, traduzindo de fato as informações trafegadas.`,
        },


        
      }
    }
  }
}

const doubts = [
  '1. o que exatamente é o https (o s no final), qual a diferença com relação ao http?',
  '2. qual a vantagem de ter 2 sites com HTML diferentes para mobile / desk x ter responsividade no CSS?',
  '3. e esses hostgator da vida que ganham 9 reais por mes pra te dar um https na URL, é ganhar dinheiro facil?',
  '4. qual a diferenca de mandar o token no header ou no body?',
  '5. poderia explicar o cross origin?',
  '6. poderia explicar o pre flight?',
  '7. QUando apontamos um DNS de um dominio comprado no registro.br para uma aplicação hosteada na goDaddy por exemplo, o que está rolando por tras dos panos?',
  '8. user agente não é obrigatorio tbm?',
  '9. o meu ubuntu as vezes desconecta sozinho do wifi e volta depois, é pq ele mudou de mac?',
  'BONUS: falou de matrix tenho que perguntar: se estivesse no filme escolheria qual pilula?'

]