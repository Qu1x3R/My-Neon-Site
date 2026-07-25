document.addEventListener("DOMContentLoaded", () => {
    // 1. Konfiguration aus config.js laden und ins HTML einfügen
    document.title = `${config.username} | Profile`;
    document.getElementById("username").innerText = config.username;
    document.getElementById("avatar").src = config.avatar;
    document.getElementById("bio").innerText = config.bio;

    // 2. Theme Farben anwenden
    document.documentElement.style.setProperty('--neon-blue', config.theme.neonColor);
    document.documentElement.style.setProperty('--bg-color', config.theme.backgroundColor);

    // 3. Social Media Links generieren
    const socialsContainer = document.getElementById("socials");
    config.socials.forEach(social => {
        const a = document.createElement("a");
        a.href = social.url;
        a.target = "_blank"; // Öffnet Link in neuem Tab
        a.className = "social-icon";
        a.title = social.name;
        a.innerHTML = `<i class="${social.icon}"></i>`;
        socialsContainer.appendChild(a);
    });

    // 4. "Click to Enter" Logik (Typisch für guns.lol)
    const enterScreen = document.getElementById("enter-screen");
    const mainContent = document.getElementById("main-content");
    const audio = document.getElementById("bg-audio");

    // Audio vorbereiten, falls in config angegeben
    if (config.audioUrl !== "") {
        audio.src = config.audioUrl;
        audio.volume = 0.3; // Lautstärke (0.0 bis 1.0)
    }

    enterScreen.addEventListener("click", () => {
        // Enter Screen ausblenden
        enterScreen.style.opacity = "0";
        
        setTimeout(() => {
            enterScreen.style.display = "none";
            // Hauptinhalt einblenden
            mainContent.classList.remove("hidden");
            
            // Audio abspielen (Browser erlauben Audio meist erst nach Nutzerinteraktion)
            if (config.audioUrl !== "") {
                audio.play().catch(e => console.log("Audio konnte nicht abgespielt werden:", e));
            }
        }, 500);
    });
});
