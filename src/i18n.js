import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation:{
            "connect-wallet": "Connect Wallet",
            "connect": "Connect",
            "welcome": "For all users who want to pay off their accumulated pending, review the information described. This website is intended to offer an exchange opportunity, obtaining your digital assets that will be your property.",
            "first-step-title": "Watch the video",
            "first-step-desc": "Explanation of the necessary information you need to understand",
            "second-step-title": "Connect Wallet",
            "second-step-desc": "It is your wallet where you will receive your digital assets.",
            "third-step-title": "Receive Assets",
            "third-step-desc": "After signing the disclaimer you will be able to receive your digital assets",
            "metaverse-title": "What is the <span>Metaverse</span>?",
            "metaverse-desc": "<p>The Metaverse is a concept of a persistent 3D online universe that combines multiple different virtual spaces. You can think of this as a future version of the internet. The Metaverse will allow users to work, meet, play, and socialize together in these 3D spaces</p><p>The economic market for the Metaverse will grow drastically by 2030. In e-commerce it is estimated that the impact would be between 2 and 2.6 trillion dollars, while that in education it could generate up to 270,000 million dollars and, in the video game market, its impact could be up to 125,000 million dollars.</p>",
            "landian-title": " What is <span>Landian</span>?",
            "landiant-desc": "<p>The most hyper-realistic metaverse ever, blockchain connected and web 3.0 friendly.</p><p>LANDIAN broke sales records on the day of its launch, selling out in a single day more than 90 thousand NFTs. </p>",
            "disclaimer-title": "Disclaimer",
            "copyright": "x project @2022 All rights reserved"
        }
    },
    es: {
        translation: {
            "connect-wallet": "Conectar Wallet",
            "connect": "Conectar",
            "welcome": "Para todos los usuarios que desean saldar el pendiente que tienen acumulado revisen la información descrita. Este sitio web tiene como finalidad ofrecer una oportunidad de intercambio, obteniendo tu activos digitales que serán de tu propiedad.",
            "first-step-title": "Ver el video",
            "first-step-desc": "Explicación de la información necesaria que necesitas entender",
            "second-step-title": "Conectar Wallet",
            "second-step-desc": "Es tu wallet donde recibirás tus activos digitales.",
            "third-step-title": "Recibir Activos",
            "third-step-desc": "Después de la firma del disclaimer podrás recibir tus activos digitales",
            "metaverse-title": "¿Qué es el <span>Metaverso</span>?",
            "metaverse-desc": "<p>El Metaverso es un concepto de un universo 3D persistente en linea que combina múltiples espacios virtuales diferentes. Puedes pensar esto como versión futura del internet. El Metaverso permitirá a los usuarios trabajar, reunirse, jugar y socializar juntos en estos espacios 3D</p><p>El mercado económico para el Metaverso crecerá para el 2030 de manera drástica. En el comercio electrónico se calcula que el impacto se situaría entre los 2 y 2,6 billones de dólares, mientras que en la educación podría generar hasta 270.000 millones de dólares y, en el mercado de videojuegos, su impacto podría ser de hasta 125.000 millones de dólares.</p>",
            "landian-title": " ¿Qué es <span>Landian</span>?",
            "landiant-desc": "<p>El metaverso mas hiperealista de la historia conectado con blockchain y amigable con la web 3.0.</p><p>LANDIAN rompió récord de ventas el día de su lanzamiento, vendiendo en un solo día más de 90 mil NFT. </p>",
            "disclaimer-title": "Términos y condiciones",
            "copyright": "x project @2022 Todos los derechos reservados"
        }
    },
    pt: {
        translation: {
            "connect-wallet": "Conectar Carteira",
            "connect": "Conectar",
            "welcome": "Para todos os utilizadores que pretendam liquidar as pendências que acumularam, revejam a informação descrita. O objetivo deste site é oferecer uma oportunidade de troca, obtendo seus ativos digitais que serão de sua propriedade.",
            "first-step-title": "Assista o vídeo",
            "first-step-desc": "Explicação das informações necessárias que você precisa entender",
            "second-step-title": "Conectar Carteira",
            "second-step-desc": "É a sua carteira onde você receberá seus ativos digitais.",
            "third-step-title": "Receber ativos",
            "third-step-desc": "Depois de assinar o aviso de isenção de responsabilidade, você poderá receber seus ativos digitais",
            "metaverse-title": "O que é o <span>Metaverso</span>?",
            "metaverse-desc": "<p>O Metaverse é um conceito de um universo 3D online persistente que combina vários espaços virtuais diferentes. Você pode pensar nisso como uma versão futura da internet. O Metaverso permitirá que os usuários trabalhem, conheçam, joguem e socializem juntos nesses espaços 3D</p><p>O mercado econômico do Metaverso crescerá dramaticamente até 2030. No comércio eletrônico estima-se que o impacto seria entre 2 e 2,6 trilhões de dólares, enquanto na educação poderia gerar até 270.000 milhões de dólares e, no mercado de videogames, seu impacto poderia chegar a 125.000 milhões de dólares.</p>",
            "landian-title": "O que é <span>Landiano</span>?",
            "landiant-desc": "<p>O metaverso mais hiperrealista da história conectado ao blockchain e amigável à web 3.0.</p><p>LANDIAN quebrou recordes de vendas no dia de seu lançamento, vendendo mais de 90.000 NFTs em um único dia. </p>",
            "disclaimer-title": "Termos e Condições",
            "copyright": "x proyect @2022 Todos os direitos reservados"
        }
    },
    kr:{
        translation:{
            "connect-wallet": "지갑 연결",
             "connect": "연결",
             "welcome": "누적한 미결제 금액을 지불하려는 모든 사용자에게 설명된 정보를 검토하십시오. 이 웹사이트는 귀하의 재산이 될 디지털 자산을 획득하여 교환 기회를 제공하기 위한 것입니다.",
             "first-step-title": "동영상 보기",
             "first-step-desc": "이해해야 하는 필수 정보에 대한 설명",
             "second-step-title": "지갑 연결",
             "second-step-desc": "디지털 자산을 받을 지갑입니다.",
             "third-step-title": "자산 수령",
             "third-step-desc": "면책조항에 서명하면 디지털 자산을 받을 수 있습니다.",
             "metaverse-title": "<span>메타버스</span>가 무엇인가요?",
             "metaverse-desc": "<p>메타버스는 여러 개의 서로 다른 가상 공간을 결합한 지속적인 3D 온라인 우주의 개념입니다. 이것을 인터넷의 미래 버전이라고 생각할 수 있습니다. 메타버스는 사용자가 일하고 만나고 만날 수 있게 해 줄 것입니다. 메타버스의 경제 시장은 2030년까지 크게 성장할 것입니다. 교육을 통해 최대 2700억 달러를 창출할 수 있으며 비디오 게임 시장에서 최대 1250억 달러의 영향을 미칠 수 있습니다.</p>",
             "landian-title": " <span>랜디안</span>이 무엇인가요?",
             "landiant-desc": "<p>역대 가장 초현실적인 메타버스, 블록체인 연결 및 웹 3.0 친화적입니다.</p><p>LANDIAN은 출시 당일 판매 기록을 깨고 하루 만에 매진되었습니다. 90,000 NFT보다 많습니다. </p>",
             "disclaimer-title": "이용약관",
             "copyright": "x 프로젝트 @2022 All rights reserved"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: "en",
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;