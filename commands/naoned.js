export const naoned = (author, landingHour) => {

const hour = landingHour.split("h")[0];
const minute = landingHour.split("h")[1];

    const answers = [
        { id: 1, text: "Son bus a subi une panne de réveil !" },
        { id: 2, text: "Le tram a décidé de faire une grasse matinée aujourd'hui !" },
        { id: 3, text: "Les feux tricolores sont devenus philosophes et méditaient sur le vert !" },
        { id: 4, text: "Le métro a voulu faire une pause-café, il s'est laissé tenter !" },
        { id: 5, text: "La route a pris un congé surprise, d'où le détour imprévu !" },
        { id: 6, text: "Son vélo a déclaré forfait pour cause de fatigue généralisée !" },
        { id: 7, text: "Le GPS a voulu redécouvrir la ville, d'où le petit tour touristique !" },
        { id: 8, text: "Le train a eu une crise existentielle et a remis en question son horaire !" },
        { id: 9, text: "Le périphérique a décidé de jouer au serpent, on s'est fait avoir !" },
        { id: 10, text: "Le chauffeur de bus a pris un cours intensif de zénitude à chaque feu rouge !" },
        { id: 11, text: "Le vent a soufflé trop fort, et les feux se sont éteints !" },
        { id: 12, text: "Le soleil a décidé d'éblouir tout le monde, ralentissement général !" },
        { id: 13, text: "Les pigeons ont fait une manifestation surprise sur les rails !" },
        { id: 14, text: "La voiture a préféré faire une sieste à l'ombre d'un arbre !" },
        { id: 15, text: "Le réseau routier s'est mis en mode labyrinthe, impossible d'en sortir !" },
        { id: 16, text: "La météo a pris tout le monde de court, tempête de ralentissements !" },
        { id: 17, text: "Les trottoirs étaient en grève, trop de piétons !" },
        { id: 18, text: "Les horloges ont décidé de vivre leur propre vie, donc retard assuré !" },
        { id: 19, text: "Le pont s'est rétracté comme une passerelle de bateau, désolé !" },
        { id: 20, text: "Les routes ont joué à cache-cache avec le GPS, et elles ont gagné !" },
        { id: 21, text: "Un troupeau de moutons a envahi la route, j'ai dû attendre qu'ils passent !" },
        { id: 22, text: "Le réveil a décrété la journée de la sieste, il n'a pas sonné !" },
        { id: 23, text: "La ville a décidé de tester un nouveau sens de circulation ce matin, sans prévenir !" },
        { id: 24, text: "Le taxi a fait un détour par une boulangerie, croissant obligatoire !" },
        { id: 25, text: "Une course de trottinettes a pris le contrôle de la route, inévitable !" },
        { id: 26, text: "Mon chat a caché mes clés, il a fallu négocier pour les récupérer !" },
        { id: 27, text: "Un flashmob surprise a envahi le quai, impossible de monter dans le train !" },
        { id: 28, text: "Le ciel a décidé de se vider d'un coup, inondation express des routes !" },
        { id: 29, text: "Les pigeons ont décidé de faire une grève générale sur les câbles électriques !" },
        { id: 30, text: "Le pont-levis était coincé, j'ai dû attendre qu'il redescende !" },
        { id: 31, text: "Un marathon improvisé a bloqué tous les accès, désolé !" },
        { id: 32, text: "Les voitures ont tenté une chorégraphie de klaxons, mais ça n'a pas marché !" },
        { id: 33, text: "Les feux de circulation étaient en pleine crise d'identité, ils ne savaient plus quoi afficher !" },
        { id: 34, text: "Les piétons ont décidé de traverser en masse, impossible d'avancer !" },
        { id: 35, text: "Un cirque itinérant a pris possession du rond-point, détour obligatoire !" },
        { id: 36, text: "Le bus a fait un détour par le passé, retour à l'heure des dinosaures !" },
        { id: 37, text: "Mon parapluie s'est envolé, j'ai dû le rattraper à travers la ville !" },
        { id: 38, text: "Les horloges ont eu un bug, elles tournaient à l'envers ce matin !" },
        { id: 39, text: "La mer a décidé de s'inviter en ville, baignade imprévue sur la route !" },
        { id: 40, text: "Mon réveil a préféré rester au lit ce matin, et moi aussi !" },
        { id: 41, text: "Un robot de livraison s'est perdu sur le trottoir, bouchon piétonnier !" },
        { id: 42, text: "La route a été envahie par un festival de street art, trop de couleurs pour rouler !" },
        { id: 43, text: "Les panneaux de signalisation ont joué à cache-cache, j'ai dû les retrouver !" },
        { id: 44, text: "Le bus a décidé de faire une pause yoga en pleine route !" },
        { id: 45, text: "Une bande de skateurs a pris le contrôle de la piste cyclable !" },
        { id: 46, text: "Les bancs publics ont été réquisitionnés pour une réunion de quartier !" },
        { id: 47, text: "Le trottoir était en travaux, slalom obligatoire pour avancer !" },
        { id: 48, text: "Un livreur de pizza a bloqué la route en cherchant une adresse introuvable !" },
        { id: 49, text: "Les oiseaux ont fait une démonstration aérienne, difficile de ne pas s'arrêter pour regarder !" },
        { id: 50, text: "Mon application de navigation a voulu m'emmener en vacances, détour vers la plage !" },
        { id: 51, text: "On peut remercier la ville de Nantes et son formidable réseau de transport en commun" },
        { id: 52, text: "Au moins, il est en avance pour demain !" },
    ];


    const randomAnswer = answers.filter(response => response.id === Math.floor(Math.random() * answers.length) + 1);

    return `🔥 ${author} risque d'arriver en retard ! Arrivée prévu à` + parseInt(hour) + "h" + minute +" ! " + randomAnswer;
}

