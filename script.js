
const hashes = {
    plink: {
        nombre: "Plink",
        archivo: "plink.exe",
        md5: "63680900B42BF3F41F71C3A4CFF80E15",
        sha1: "00AAB5B2CEE16DB15081936FC17B53735BDAD127",
        sha256: "969F36879D5716AA1A9811F43A6A6510E8F08372DBEB9695B810B9C776F39C75"
    },
    putty: {
        nombre: "PuTTY",
        archivo: "putty.exe",
        md5: "0673FCA154B47E4158269B4EADD23689",
        sha1: "0456C056DFB21549163A48C2E9B10DD572C9924F",
        sha256: "D01FDB5AAE8F112526040A39B0BFB9E27D813003178645E65F8D1CFDB2A26C87"
    },
    virtualbox: {
        nombre: "VirtualBox",
        archivo: "VirtualBox-7.0.8-156879-Win.exe",
        md5: "5277068968032AF616E7E4CC86F1D3C2",
        sha1: "6E3E2912D2131BB249F416088EE49088AB841580",
        sha256: "8A2DA26CA69C1DDFC50FB65EE4FA8F269E692302046DF4E2F48948775BA6339A"
    }
};

const botones = document.querySelectorAll(".tarjeta-app");
const resultado = document.getElementById("resultado");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        const aplicacion = boton.dataset.app;
        const datos = hashes[aplicacion];

        if (!datos || !resultado) return;

        resultado.innerHTML = `
            <div class="resultado-contenido">
                <h3>${datos.nombre}</h3>
                <p class="nombre-archivo">${datos.archivo}</p>

                <div class="hash-fila">
                    <h4>MD5</h4>
                    <p>${datos.md5}</p>
                    <button class="copiar-hash" data-hash="${datos.md5}">Copiar</button>
                </div>

                <div class="hash-fila">
                    <h4>SHA1</h4>
                    <p>${datos.sha1}</p>
                    <button class="copiar-hash" data-hash="${datos.sha1}">Copiar</button>
                </div>

                <div class="hash-fila">
                    <h4>SHA256</h4>
                    <p>${datos.sha256}</p>
                    <button class="copiar-hash" data-hash="${datos.sha256}">Copiar</button>
                </div>
            </div>
        `;

        resultado.querySelectorAll(".copiar-hash").forEach((botonCopiar) => {
            botonCopiar.addEventListener("click", async () => {
                try {
                    await navigator.clipboard.writeText(botonCopiar.dataset.hash);
                    botonCopiar.textContent = "¡Copiado!";
                    setTimeout(() => {
                        botonCopiar.textContent = "Copiar";
                    }, 1500);
                } catch (error) {
                    alert("No se pudo copiar. Selecciona el código y cópialo manualmente.");
                }
            });
        });
    });
});
