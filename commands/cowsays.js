import * as cowsay from "cowsay";


export const cowsaybigeyes = (text) => {
    return cowsay.say({
        text: text,
        f: 'eyes'
    });
};
