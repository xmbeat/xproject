import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "welcome": "Para todos los usuarios que desean saldar el pendiente que tienen acumulado revisen la información descrita. Este sitio web tiene como finalidad ofrecer una oportunidad de intercambio, obteniendo tu activos digitales que serán de tu propiedad.",
            "first-step-title": "Ver el video",
            "first-step-desc": "Explicación de la información necesaria que necesitas entender",
            "second-step-title": "Conectar Wallet",
            "second-step-desc": "Es tu wallet donde recibirás tus activos digitales.",
            "third-step-title": "Recibir Activos",
            "third-step-desc": "Después de la firma del disclaimer podrás recibir tus activos digitales"
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