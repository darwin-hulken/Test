const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

const scenes = {
    start: {
        text: "Andreas står hjemme i sofaen. Fotballkampen starter om én time. Hvordan vil han komme seg til stadion?",
        choices: [
            { text: "Ta bussen", next: "bus" },
            { text: "Gå til fots", next: "walk" }
        ]
    },
    bus: {
        text: "Andreas tar bussen, men den stopper plutselig i kø. Hva gjør han?",
        choices: [
            { text: "Gå av bussen og løpe", next: "run" },
            { text: "Bli sittende og håpe det løser seg", next: "late" }
        ]
    },
    walk: {
        text: "Andreas går raskt gjennom byen, men tar feil vei og ender opp i en park.",
        choices: [
            { text: "Spør noen om veien", next: "ask" },
            { text: "Bruke Google Maps", next: "maps" }
        ]
    },
    run: {
        text: "Andreas løper alt han kan og rekker stadion akkurat i tide! 🎉",
        choices: [
            { text: "Spill igjen", next: "start" }
        ]
    },
    late: {
        text: "Bussen står fortsatt stille. Kampen starter uten Andreas 😢",
        choices: [
            { text: "Prøv på nytt", next: "start" }
        ]
    },
    ask: {
        text: "En hyggelig supporter viser vei. Andreas finner stadion i tide! ⚽",
        choices: [
            { text: "Spill igjen", next: "start" }
        ]
    },
    maps: {
        text: "Telefonen går tom for strøm. Andreas finner aldri stadion 💀",
        choices: [
            { text: "Prøv igjen", next: "start" }
        ]
    }
};

function showScene(sceneKey) {
    const scene = scenes[sceneKey];
    storyElement.textContent = scene.text;
    choicesElement.innerHTML = "";

    scene.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = () => showScene(choice.next);
        choicesElement.appendChild(button);
    });
}

showScene("start");
