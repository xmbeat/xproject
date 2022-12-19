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