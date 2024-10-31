export const chocoblast = (victime, author = null) => {

    if(author === null){
        return `🔥 Voilà quelque chose de spécial pour vous : **${victime}** s'est fait chocoblast 🍫 !`
    } else {
        return `🔥 Voilà quelque chose de spécial pour vous : **${victime}** s'est fait chocoblast 🍫 par **${author}** !`;
    }
};
