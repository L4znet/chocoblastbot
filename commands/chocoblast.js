export const chocoblast = (victime, author = "") => {

    if(author === ""){
        return `🔥 Voilà quelque chose de spécial pour vous : **${victime}** s'est fait chocoblast 🍫 !`
    } else {
        return `🔥 Voilà quelque chose de spécial pour vous : **${victime}** s'est fait chocoblast 🍫 par **${author}** !`;
    }
};
