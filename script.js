// ============================================================
//  GERAR — atualiza o HTML e salva no localStorage
// ============================================================

const gerarBtn = document.getElementById("gerarBtn");

if (gerarBtn) {
    gerarBtn.addEventListener("click", gerar);
}

function gerar() {

    // lê os campos
    const data      = document.getElementById("dataInput").value;
    const extracao  = document.getElementById("extracaoInput").value;

    const p1 = document.getElementById("premio1Input").value;
    const p2 = document.getElementById("premio2Input").value;
    const p3 = document.getElementById("premio3Input").value;
    const p4 = document.getElementById("premio4Input").value;
    const p5 = document.getElementById("premio5Input").value;

    // datas
    document.getElementById("data5").innerHTML = data;
    document.getElementById("data6").innerHTML = data;
    document.getElementById("data7").innerHTML = data;

    // extração
    document.getElementById("extracao5").innerHTML = "Nº" + extracao;
    document.getElementById("extracao6").innerHTML = "Nº" + extracao;
    document.getElementById("extracao7").innerHTML = "Nº" + extracao;


    // ===== 5 DÍGITOS =====

    document.getElementById("premio1_5").innerHTML =
        '<span class="branco">'  + p1.substring(0,2) + '</span>' +
        '<span class="laranja">' + p1.substring(2,5) + '</span>';

    document.getElementById("premio2_5").innerHTML =
        '<span class="branco">'  + p2.substring(0,2) + '</span>' +
        '<span class="laranja">' + p2.substring(2,4) + '</span>' +
        '<span class="branco">'  + p2.substring(4,5) + '</span>';

    document.getElementById("premio3_5").innerHTML =
        '<span class="branco">' + p3 + '</span>';

    document.getElementById("premio4_5").innerHTML =
        '<span class="branco">' + p4 + '</span>';

    document.getElementById("premio5_5").innerHTML =
        '<span class="branco">' + p5 + '</span>';


    // ===== 6 DÍGITOS =====

    document.getElementById("premio1_6").innerHTML =
        '<span class="branco">'  + p1.substring(0,2) + '</span>' +
        '<span class="laranja">' + p1.substring(2,5) + '</span>';

    document.getElementById("premio2_6").innerHTML =
        '<span class="branco">'  + p2.substring(0,2) + '</span>' +
        '<span class="laranja">' + p2.substring(2,5) + '</span>';

    document.getElementById("premio3_6").innerHTML =
        '<span class="branco">' + p3 + '</span>';

    document.getElementById("premio4_6").innerHTML =
        '<span class="branco">' + p4 + '</span>';

    document.getElementById("premio5_6").innerHTML =
        '<span class="branco">' + p5 + '</span>';


    // ===== 7 DÍGITOS =====

    document.getElementById("premio1_7").innerHTML =
        '<span class="branco">'  + p1.substring(0,2) + '</span>' +
        '<span class="laranja">' + p1.substring(2,5) + '</span>';

    document.getElementById("premio2_7").innerHTML =
        '<span class="branco">'  + p2.substring(0,2) + '</span>' +
        '<span class="laranja">' + p2.substring(2,5) + '</span>';

    document.getElementById("premio3_7").innerHTML =
        '<span class="branco">'  + p3.substring(0,2) + '</span>' +
        '<span class="laranja">' + p3.substring(2,3) + '</span>' +
        '<span class="branco">'  + p3.substring(3,5) + '</span>';

    document.getElementById("premio4_7").innerHTML =
        '<span class="branco">' + p4 + '</span>';

    document.getElementById("premio5_7").innerHTML =
        '<span class="branco">' + p5 + '</span>';


    // ===== NÚMEROS SORTEADOS =====

    const sorteado5 =
        p1.substring(2,5) +
        p2.substring(2,4);

    const sorteado6 =
        p1.substring(2,5) +
        p2.substring(2,5);

    const sorteado7 =
        p1.substring(2,5) +
        p2.substring(2,5) +
        p3.substring(2,3);


    // ===== FORMATAÇÃO =====

    const sorteado6Formatado =
        sorteado6.substring(0,3) + "." + sorteado6.substring(3,6);

    const sorteado7Formatado =
        sorteado7.substring(0,1) + "." +
        sorteado7.substring(1,4) + "." +
        sorteado7.substring(4,7);


    // ===== ATUALIZA OS SORTEADOS =====

    document.getElementById("sorteado5").innerHTML =
        '<span class="laranja">' + sorteado5 + '</span>';

    document.getElementById("sorteado6").innerHTML =
        '<span class="laranja">' + sorteado6Formatado + '</span>';

    document.getElementById("sorteado7").innerHTML =
        '<span class="laranja">' + sorteado7Formatado + '</span>';

    // ============================================================
// PRÉVIAS - INCENTIVO
// ============================================================

// Data
document.getElementById("data5Incentivo").innerHTML = data;
document.getElementById("data6Incentivo").innerHTML = data;
document.getElementById("data7Incentivo").innerHTML = data;

// Extração
document.getElementById("extracao5Incentivo").innerHTML = "Nº" + extracao;
document.getElementById("extracao6Incentivo").innerHTML = "Nº" + extracao;
document.getElementById("extracao7Incentivo").innerHTML = "Nº" + extracao;


// ===== 5 DÍGITOS - INCENTIVO =====

document.getElementById("premio1_5Incentivo").innerHTML =
    '<span class="branco">'  + p1.substring(0,4) + '</span>' +
    '<span class="laranja">' + p1.substring(4,5) + '</span>';

document.getElementById("premio2_5Incentivo").innerHTML =
    '<span class="branco">'  + p2.substring(0,4) + '</span>' +
    '<span class="laranja">' + p2.substring(4,5) + '</span>';

document.getElementById("premio3_5Incentivo").innerHTML =
    '<span class="branco">'  + p3.substring(0,4) + '</span>' +
    '<span class="laranja">' + p3.substring(4,5) + '</span>';

document.getElementById("premio4_5Incentivo").innerHTML =
    '<span class="branco">'  + p4.substring(0,4) + '</span>' +
    '<span class="laranja">' + p4.substring(4,5) + '</span>';

document.getElementById("premio5_5Incentivo").innerHTML =
    '<span class="branco">'  + p5.substring(0,4) + '</span>' +
    '<span class="laranja">' + p5.substring(4,5) + '</span>';

const sorteado5Incentivo =
    p1.substring(4,5) +
    p2.substring(4,5) +
    p3.substring(4,5) +
    p4.substring(4,5) +
    p5.substring(4,5);

document.getElementById("sorteado5Incentivo").innerHTML =
    '<span class="laranja">' + sorteado5Incentivo + '</span>';


// ===== 6 DÍGITOS - INCENTIVO =====

document.getElementById("premio1_6Incentivo").innerHTML =
    '<span class="branco">'  + p1.substring(0,3) + '</span>' +
    '<span class="laranja">' + p1.substring(3,5) + '</span>';

document.getElementById("premio2_6Incentivo").innerHTML =
    '<span class="branco">'  + p2.substring(0,4) + '</span>' +
    '<span class="laranja">' + p2.substring(4,5) + '</span>';

document.getElementById("premio3_6Incentivo").innerHTML =
    '<span class="branco">'  + p3.substring(0,4) + '</span>' +
    '<span class="laranja">' + p3.substring(4,5) + '</span>';

document.getElementById("premio4_6Incentivo").innerHTML =
    '<span class="branco">'  + p4.substring(0,4) + '</span>' +
    '<span class="laranja">' + p4.substring(4,5) + '</span>';

document.getElementById("premio5_6Incentivo").innerHTML =
    '<span class="branco">'  + p5.substring(0,4) + '</span>' +
    '<span class="laranja">' + p5.substring(4,5) + '</span>';

const sorteado6Incentivo =
    p1.substring(3,5) +
    p2.substring(4,5) +
    p3.substring(4,5) +
    p4.substring(4,5) +
    p5.substring(4,5);

document.getElementById("sorteado6Incentivo").innerHTML =
    '<span class="laranja">' +
    sorteado6Incentivo.substring(0,3) + "." +
    sorteado6Incentivo.substring(3,6) +
    '</span>';


// ===== 7 DÍGITOS - INCENTIVO =====

document.getElementById("premio1_7Incentivo").innerHTML =
    '<span class="branco">'  + p1.substring(0,2) + '</span>' +
    '<span class="laranja">' + p1.substring(2,5) + '</span>';

document.getElementById("premio2_7Incentivo").innerHTML =
    '<span class="branco">'  + p2.substring(0,4) + '</span>' +
    '<span class="laranja">' + p2.substring(4,5) + '</span>';

document.getElementById("premio3_7Incentivo").innerHTML =
    '<span class="branco">'  + p3.substring(0,4) + '</span>' +
    '<span class="laranja">' + p3.substring(4,5) + '</span>';

document.getElementById("premio4_7Incentivo").innerHTML =
    '<span class="branco">'  + p4.substring(0,4) + '</span>' +
    '<span class="laranja">' + p4.substring(4,5) + '</span>';

document.getElementById("premio5_7Incentivo").innerHTML =
    '<span class="branco">'  + p5.substring(0,4) + '</span>' +
    '<span class="laranja">' + p5.substring(4,5) + '</span>';

const sorteado7Incentivo =
    p1.substring(2,5) +
    p2.substring(4,5) +
    p3.substring(4,5) +
    p4.substring(4,5) +
    p5.substring(4,5);

document.getElementById("sorteado7Incentivo").innerHTML =
    '<span class="laranja">' +
    sorteado7Incentivo.substring(0,1) + "." +
    sorteado7Incentivo.substring(1,4) + "." +
    sorteado7Incentivo.substring(4,7) +
    '</span>';

    // ===== LOCALSTORAGE =====

    localStorage.setItem("data",     data);
    localStorage.setItem("extracao", extracao);
    localStorage.setItem("premio1",  p1);
    localStorage.setItem("premio2",  p2);
    localStorage.setItem("premio3",  p3);
    localStorage.setItem("premio4",  p4);
    localStorage.setItem("premio5",  p5);
}

const campos = document.querySelectorAll("input");

campos.forEach(campo => {

    campo.addEventListener("input", () => {

        // ==========================
        // PRÊMIOS
        // ==========================

        if (campo.id.startsWith("premio")) {

            campo.value = campo.value.replace(/\D/g, "");

        }

        // ==========================
        // DATA (DD/MM/AAAA)
        // ==========================

        if (campo.id === "dataInput") {

            let valor = campo.value.replace(/\D/g, "");

            if (valor.length > 8) {
                valor = valor.substring(0, 8);
            }

            if (valor.length > 4) {

                valor =
                    valor.substring(0, 2) + "/" +
                    valor.substring(2, 4) + "/" +
                    valor.substring(4);

            } else if (valor.length > 2) {

                valor =
                    valor.substring(0, 2) + "/" +
                    valor.substring(2);

            }

            campo.value = valor;

        }

        // ==========================
        // EXTRAÇÃO (0000-0)
        // ==========================

        if (campo.id === "extracaoInput") {

            let valor = campo.value.replace(/\D/g, "");

            if (valor.length >= 5) {

                valor =
                    valor.substring(0, valor.length - 1) +
                    "-" +
                    valor.substring(valor.length - 1);

            }

            campo.value = valor;

        }

        gerar();

    });

});
// ============================================================
//  RESTAURA LOCALSTORAGE AO CARREGAR
// ============================================================

window.addEventListener("load", function () {

    const hoje = new Date();

    document.getElementById("dataInput").value =
        String(hoje.getDate()).padStart(2, "0") + "/" +
        String(hoje.getMonth() + 1).padStart(2, "0") + "/" +
        hoje.getFullYear();

    if (localStorage.getItem("extracao"))
        document.getElementById("extracaoInput").value = localStorage.getItem("extracao");

    if (localStorage.getItem("premio1"))
        document.getElementById("premio1Input").value = localStorage.getItem("premio1");

    if (localStorage.getItem("premio2"))
        document.getElementById("premio2Input").value = localStorage.getItem("premio2");

    if (localStorage.getItem("premio3"))
        document.getElementById("premio3Input").value = localStorage.getItem("premio3");

    if (localStorage.getItem("premio4"))
        document.getElementById("premio4Input").value = localStorage.getItem("premio4");

    if (localStorage.getItem("premio5"))
        document.getElementById("premio5Input").value = localStorage.getItem("premio5");

    gerar();
});


// ============================================================
//  FUNÇÕES AUXILIARES DE CANVAS
// ============================================================

/**
 * Desenha um número com segmentos de cores diferentes,
 * centralizando o texto completo no ponto (cx, y).
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Array<{texto: string, cor: string}>} segmentos
 * @param {number} cx  - X central do número inteiro
 * @param {number} y   - Y da baseline
 */
function desenhaSegmentos(ctx, segmentos, cx, y) {

    // Calcula a largura total para centralizar
    const larguraTotal = segmentos.reduce(
        (acc, seg) => acc + ctx.measureText(seg.texto).width, 0
    );

    let x = cx - larguraTotal / 2;

    segmentos.forEach(function (seg) {
        ctx.fillStyle = seg.cor;
        ctx.fillText(seg.texto, x, y);
        x += ctx.measureText(seg.texto).width;
    });
}

/**
 * Desenha texto centralizado simples (cor única).
 */
function desenhaTexto(ctx, texto, cx, y, cor, fonte) {
    if (fonte) ctx.font = fonte;
    ctx.fillStyle  = cor;
    ctx.textAlign  = "left"; // usamos textAlign left com measureText
    const w = ctx.measureText(texto).width;
    ctx.fillText(texto, cx - w / 2, y);
}


// ============================================================
//  FUNÇÕES DE LAYOUT POR NÚMERO DE DÍGITOS
// ============================================================

/**
 * Desenha o story de 5 dígitos no ctx e dispara o download.
 *
 * Layout (coordenadas Y baseadas no HTML visual):
 *   Data          y ≈  136
 *   Extração      y ≈  210
 *   1º prêmio     y ≈  746
 *   2º prêmio     y ≈  900
 *   3º prêmio     y ≈ 1054
 *   4º prêmio     y ≈ 1208
 *   5º prêmio     y ≈ 1362
 *   Sorteado      y ≈ 1650
 */
function desenha5digitos(ctx, dados) {

    const BRANCO  = "#ffffff";
    const LARANJA = "#ff912b";
    const CX      = 540;      // centro horizontal do canvas

    // --- Data ---
    ctx.textAlign = "left";
    ctx.font      = "800 48px Arial";
    desenhaTexto(ctx, dados.data, CX, 136, BRANCO);

    // --- Extração ---
    ctx.font = "700 40px Arial";
    desenhaTexto(ctx, "Nº" + dados.extracao, CX, 210, BRANCO);

    // --- Prêmios ---
    ctx.font = "800 70px Arial";

    // 1º: [branco][laranja] — 5 dígitos visíveis
    desenhaSegmentos(ctx, [
        { texto: dados.p1.substring(0,2), cor: BRANCO  },
        { texto: dados.p1.substring(2,5), cor: LARANJA }
    ], CX, 746);

    // 2º: [branco][laranja][branco]
    desenhaSegmentos(ctx, [
        { texto: dados.p2.substring(0,2), cor: BRANCO  },
        { texto: dados.p2.substring(2,4), cor: LARANJA },
        { texto: dados.p2.substring(4,5), cor: BRANCO  }
    ], CX, 900);

    // 3º, 4º, 5º: totalmente brancos
    desenhaTexto(ctx, dados.p3, CX, 1054, BRANCO);
    desenhaTexto(ctx, dados.p4, CX, 1208, BRANCO);
    desenhaTexto(ctx, dados.p5, CX, 1362, BRANCO);

    // --- Sorteado ---
    const sorteado5 = dados.p1.substring(2,5) + dados.p2.substring(2,4);

    ctx.font = "800 90px Arial";
    desenhaTexto(ctx, sorteado5, CX, 1650, LARANJA);
}


/**
 * Desenha o story de 6 dígitos no ctx e dispara o download.
 *
 *   Data          y ≈  136
 *   Extração      y ≈  210
 *   1º prêmio     y ≈  746
 *   2º prêmio     y ≈  900
 *   3º prêmio     y ≈ 1054
 *   4º prêmio     y ≈ 1208
 *   5º prêmio     y ≈ 1362
 *   Sorteado      y ≈ 1650
 */
function desenha6digitos(ctx, dados) {

    const BRANCO  = "#ffffff";
    const LARANJA = "#ff912b";
    const CX      = 540;

    ctx.textAlign = "left";

    // --- Data ---
    ctx.font = "800 48px Arial";
    desenhaTexto(ctx, dados.data, CX, 136, BRANCO);

    // --- Extração ---
    ctx.font = "700 40px Arial";
    desenhaTexto(ctx, "Nº" + dados.extracao, CX, 210, BRANCO);

    // --- Prêmios ---
    ctx.font = "800 70px Arial";

    // 1º: [branco][laranja]
    desenhaSegmentos(ctx, [
        { texto: dados.p1.substring(0,2), cor: BRANCO  },
        { texto: dados.p1.substring(2,5), cor: LARANJA }
    ], CX, 746);

    // 2º: [branco][laranja]
    desenhaSegmentos(ctx, [
        { texto: dados.p2.substring(0,2), cor: BRANCO  },
        { texto: dados.p2.substring(2,5), cor: LARANJA }
    ], CX, 900);

    // 3º, 4º, 5º: totalmente brancos
    desenhaTexto(ctx, dados.p3, CX, 1054, BRANCO);
    desenhaTexto(ctx, dados.p4, CX, 1208, BRANCO);
    desenhaTexto(ctx, dados.p5, CX, 1362, BRANCO);

    // --- Sorteado ---
    const sorteado6 = dados.p1.substring(2,5) + dados.p2.substring(2,5);
    const sorteado6Formatado =
        sorteado6.substring(0,3) + "." + sorteado6.substring(3,6);

    ctx.font = "800 90px Arial";
    desenhaTexto(ctx, sorteado6Formatado, CX, 1650, LARANJA);
}


/**
 * Desenha o story de 7 dígitos no ctx e dispara o download.
 *
 *   Data          y ≈  136
 *   Extração      y ≈  210
 *   1º prêmio     y ≈  746
 *   2º prêmio     y ≈  900
 *   3º prêmio     y ≈ 1054
 *   4º prêmio     y ≈ 1208
 *   5º prêmio     y ≈ 1362
 *   Sorteado      y ≈ 1650
 */
function desenha7digitos(ctx, dados) {

    const BRANCO  = "#ffffff";
    const LARANJA = "#ff912b";
    const CX      = 540;

    ctx.textAlign = "left";

    // --- Data ---
    ctx.font = "800 48px Arial";
    desenhaTexto(ctx, dados.data, CX, 136, BRANCO);

    // --- Extração ---
    ctx.font = "700 40px Arial";
    desenhaTexto(ctx, "Nº" + dados.extracao, CX, 210, BRANCO);

    // --- Prêmios ---
    ctx.font = "800 70px Arial";

    // 1º: [branco][laranja]
    desenhaSegmentos(ctx, [
        { texto: dados.p1.substring(0,2), cor: BRANCO  },
        { texto: dados.p1.substring(2,5), cor: LARANJA }
    ], CX, 746);

    // 2º: [branco][laranja]
    desenhaSegmentos(ctx, [
        { texto: dados.p2.substring(0,2), cor: BRANCO  },
        { texto: dados.p2.substring(2,5), cor: LARANJA }
    ], CX, 900);

    // 3º: [branco][laranja][branco]
    desenhaSegmentos(ctx, [
        { texto: dados.p3.substring(0,2), cor: BRANCO  },
        { texto: dados.p3.substring(2,3), cor: LARANJA },
        { texto: dados.p3.substring(3,5), cor: BRANCO  }
    ], CX, 1054);

    // 4º e 5º: totalmente brancos
    desenhaTexto(ctx, dados.p4, CX, 1208, BRANCO);
    desenhaTexto(ctx, dados.p5, CX, 1362, BRANCO);

    // --- Sorteado ---
    const sorteado7 =
        dados.p1.substring(2,5) +
        dados.p2.substring(2,5) +
        dados.p3.substring(2,3);

    const sorteado7Formatado =
        sorteado7.substring(0,1) + "." +
        sorteado7.substring(1,4) + "." +
        sorteado7.substring(4,7);

    ctx.font = "800 90px Arial";
    desenhaTexto(ctx, sorteado7Formatado, CX, 1650, LARANJA);
}


// ============================================================
// DOWNLOAD
// ============================================================

document.getElementById("downloadNormaisBtn").addEventListener("click", function () {
    gerarPNGs("normais");
});

document.getElementById("downloadIncentivosBtn").addEventListener("click", function () {
    gerarPNGs("incentivos");
});

document.getElementById("downloadTodosBtn").addEventListener("click", function () {
    gerarPNGs("todos");
});

function gerarPNGs(tipo) {

    const data = document.getElementById("dataInput").value.trim();
    const extracao = document.getElementById("extracaoInput").value.trim();

    const p1 = document.getElementById("premio1Input").value.trim();
    const p2 = document.getElementById("premio2Input").value.trim();
    const p3 = document.getElementById("premio3Input").value.trim();
    const p4 = document.getElementById("premio4Input").value.trim();
    const p5 = document.getElementById("premio5Input").value.trim();

    if (
        !data ||
        !extracao ||
        !p1 ||
        !p2 ||
        !p3 ||
        !p4 ||
        !p5
    ) {

        alert("Preencha todos os campos.");
        return;

    }

    if (data.length !== 10) {

             alert("A data deve estar no formato DD/MM/AAAA.");

             return;

          }

    if (
        p1.length !== 5 ||
        p2.length !== 5 ||
        p3.length !== 5 ||
        p4.length !== 5 ||
        p5.length !== 5
    ) {

        alert("Todos os prêmios devem possuir exatamente 5 dígitos.");
        return;

    }

    const dados = {

        data: document.getElementById("dataInput").value,
        extracao: document.getElementById("extracaoInput").value,

        p1: document.getElementById("premio1Input").value,
        p2: document.getElementById("premio2Input").value,
        p3: document.getElementById("premio3Input").value,
        p4: document.getElementById("premio4Input").value,
        p5: document.getElementById("premio5Input").value

    };

    const stories = [

        {
            fundo: "https://operacional-procap.github.io/gerador-stories/fundo_5digitos.png",
            arquivo: "5digitos.png",
            desenhar: desenhar5Digitos
        },

        {
            fundo: "https://operacional-procap.github.io/gerador-stories/fundo_6digitos.png",
            arquivo: "6digitos.png",
            desenhar: desenhar6Digitos
        },

        {
            fundo: "https://operacional-procap.github.io/gerador-stories/fundo_7digitos.png",
            arquivo: "7digitos.png",
            desenhar: desenhar7Digitos
        },

        {
            fundo: "https://operacional-procap.github.io/gerador-stories/fundo_5digitos_incentivo.png",
            arquivo: "5digitos_incentivo.png",
            desenhar: desenhar5DigitosIncentivo
        },
        {
            fundo: "https://operacional-procap.github.io/gerador-stories/fundo_6digitos_incentivo.png",
            arquivo: "6digitos_incentivo.png",
            desenhar: desenhar6DigitosIncentivo
        },
        {
            fundo: "https://operacional-procap.github.io/gerador-stories/fundo_7digitos_incentivo.png",
            arquivo: "7digitos_incentivo.png",
            desenhar: desenhar7DigitosIncentivo
        }

    ];

    let storiesSelecionados;

    if (tipo === "normais") {
        storiesSelecionados = stories.slice(0, 3);
    } else if (tipo === "incentivos") {
        storiesSelecionados = stories.slice(3, 6);
    } else {
        storiesSelecionados = stories;
    }

let indice = 0;

function gerarProximo() {

    if (indice >= storiesSelecionados.length)
        return;

        const story = storiesSelecionados[indice];

        const canvas = document.createElement("canvas");

        canvas.width = 1080;
        canvas.height = 1922;

        const ctx = canvas.getContext("2d");

        const img = new Image();

        img.crossOrigin = "anonymous";

        img.onload = function () {

            ctx.drawImage(img, 0, 0);

            story.desenhar(ctx, dados);

            const link = document.createElement("a");

            link.download = story.arquivo;
            link.href = canvas.toDataURL("image/png");

            link.click();

            indice++;

            setTimeout(gerarProximo, 500);

        };

        img.src = story.fundo;

    }

    gerarProximo();

}

// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function escreverCentro(ctx, texto, x, y, cor, fonte) {

    ctx.font = fonte;
    ctx.fillStyle = cor;
    ctx.textAlign = "center";

    ctx.fillText(texto, x, y);

}


function escreverPremio(ctx, partes, x, y) {

    ctx.font = "800 70px Arial";
    ctx.textAlign = "left";

    let larguraTotal = 0;

    partes.forEach(p => {

        larguraTotal += ctx.measureText(p.texto).width;

    });

    let inicio = x - larguraTotal / 2;

    partes.forEach(p => {

        ctx.fillStyle = p.cor;

        ctx.fillText(
            p.texto,
            inicio,
            y
        );

        inicio += ctx.measureText(p.texto).width;

    });

}


// ============================================================
// 5 DÍGITOS
// ============================================================

function desenhar5Digitos(ctx, d) {

    const BRANCO = "#ffffff";
    const LARANJA = "#ff912b";

    escreverCentro(ctx, d.data, 540, 135, BRANCO, "800 48px Arial");

    escreverCentro(ctx, "Nº" + d.extracao, 540, 1580, BRANCO, "800 24px Arial");


    escreverPremio(ctx, [

        { texto: d.p1.substring(0,2), cor: BRANCO },
        { texto: d.p1.substring(2,5), cor: LARANJA }

    ], 716, 760);


    escreverPremio(ctx, [

        { texto: d.p2.substring(0,2), cor: BRANCO },
        { texto: d.p2.substring(2,4), cor: LARANJA },
        { texto: d.p2.substring(4,5), cor: BRANCO }

    ], 716, 912);


    escreverCentro(ctx, d.p3, 716, 1064, BRANCO, "800 70px Arial");

    escreverCentro(ctx, d.p4, 716, 1216, BRANCO, "800 70px Arial");

    escreverCentro(ctx, d.p5, 716, 1368, BRANCO, "800 70px Arial");


    const sorteado5 =

        d.p1.substring(2,5) +
        d.p2.substring(2,4);


    escreverCentro(

        ctx,
        sorteado5,
        716,
        1520,
        LARANJA,
        "800 70px Arial"

    );

}



// ============================================================
// 6 DÍGITOS
// ============================================================

function desenhar6Digitos(ctx, d) {

    const BRANCO = "#ffffff";
    const LARANJA = "#ff912b";

    escreverCentro(ctx, d.data, 540, 135, BRANCO, "800 48px Arial");

    escreverCentro(ctx, "Nº" + d.extracao, 540, 1580, BRANCO, "800 24px Arial");


    escreverPremio(ctx, [

        { texto: d.p1.substring(0,2), cor: BRANCO },
        { texto: d.p1.substring(2,5), cor: LARANJA }

    ], 716, 760);


    escreverPremio(ctx, [

        { texto: d.p2.substring(0,2), cor: BRANCO },
        { texto: d.p2.substring(2,5), cor: LARANJA }

    ], 716, 912);


    escreverCentro(ctx, d.p3, 716, 1064, BRANCO, "800 70px Arial");

    escreverCentro(ctx, d.p4, 716, 1216, BRANCO, "800 70px Arial");

    escreverCentro(ctx, d.p5, 716, 1368, BRANCO, "800 70px Arial");


    const sorteado6 =

        d.p1.substring(2,5) +
        "." +
        d.p2.substring(2,5);


    escreverCentro(

        ctx,
        sorteado6,
        716,
        1520,
        LARANJA,
        "800 70px Arial"

    );

}



// ============================================================
// 7 DÍGITOS
// ============================================================

function desenhar7Digitos(ctx, d) {

    const BRANCO = "#ffffff";
    const LARANJA = "#ff912b";

    escreverCentro(ctx, d.data, 540, 135, BRANCO, "800 48px Arial");

    escreverCentro(ctx, "Nº" + d.extracao, 540, 1580, BRANCO, "800 24px Arial");


    escreverPremio(ctx, [

        { texto: d.p1.substring(0,2), cor: BRANCO },
        { texto: d.p1.substring(2,5), cor: LARANJA }

    ], 716, 760);


    escreverPremio(ctx, [

        { texto: d.p2.substring(0,2), cor: BRANCO },
        { texto: d.p2.substring(2,5), cor: LARANJA }

    ], 716, 912);


    escreverPremio(ctx, [

        { texto: d.p3.substring(0,2), cor: BRANCO },
        { texto: d.p3.substring(2,3), cor: LARANJA },
        { texto: d.p3.substring(3,5), cor: BRANCO }

    ], 716, 1064);


    escreverCentro(ctx, d.p4, 716, 1216, BRANCO, "800 70px Arial");

    escreverCentro(ctx, d.p5, 716, 1368, BRANCO, "800 70px Arial");


    const sorteado7SemPontos =
                   d.p1.substring(2,5) +
                   d.p2.substring(2,5) +
                   d.p3.substring(2,3);

    const sorteado7 =
                   sorteado7SemPontos.substring(0,1) +
                   "." +
                   sorteado7SemPontos.substring(1,4) +
                   "." +
                   sorteado7SemPontos.substring(4,7);

    escreverCentro(

        ctx,
        sorteado7,
        716,
        1520,
        LARANJA,
        "800 70px Arial"

    );

}

// ============================================================
// INCENTIVO - 5 DÍGITOS
// ============================================================

function desenhar5DigitosIncentivo(ctx, d) {

    const BRANCO = "#ffffff";
    const LARANJA = "#ff912b";

    escreverCentro(ctx, d.data, 540, 135, BRANCO, "800 48px Arial");

    escreverCentro(ctx, "Nº" + d.extracao, 540, 1580, BRANCO, "800 24px Arial");


    // P1: últimos 1 dígito em laranja
    escreverPremio(ctx, [
        { texto: d.p1.substring(0,4), cor: BRANCO },
        { texto: d.p1.substring(4,5), cor: LARANJA }
    ], 716, 760);


    // P2: último dígito em laranja
    escreverPremio(ctx, [
        { texto: d.p2.substring(0,4), cor: BRANCO },
        { texto: d.p2.substring(4,5), cor: LARANJA }
    ], 716, 912);


    // P3: último dígito em laranja
    escreverPremio(ctx, [
        { texto: d.p3.substring(0,4), cor: BRANCO },
        { texto: d.p3.substring(4,5), cor: LARANJA }
    ], 716, 1064);


    // P4: último dígito em laranja
    escreverPremio(ctx, [
        { texto: d.p4.substring(0,4), cor: BRANCO },
        { texto: d.p4.substring(4,5), cor: LARANJA }
    ], 716, 1216);


    // P5: último dígito em laranja
    escreverPremio(ctx, [
        { texto: d.p5.substring(0,4), cor: BRANCO },
        { texto: d.p5.substring(4,5), cor: LARANJA }
    ], 716, 1368);


    // Número sorteado
    const sorteado5 =
        d.p1.substring(4,5) +
        d.p2.substring(4,5) +
        d.p3.substring(4,5) +
        d.p4.substring(4,5) +
        d.p5.substring(4,5);

    escreverCentro(
        ctx,
        sorteado5,
        716,
        1520,
        LARANJA,
        "800 70px Arial"
    );
}


// ============================================================
// INCENTIVO - 6 DÍGITOS
// ============================================================

function desenhar6DigitosIncentivo(ctx, d) {

    const BRANCO = "#ffffff";
    const LARANJA = "#ff912b";

    escreverCentro(ctx, d.data, 540, 135, BRANCO, "800 48px Arial");

    escreverCentro(ctx, "Nº" + d.extracao, 540, 1580, BRANCO, "800 24px Arial");


    // P1: últimos 2 dígitos em laranja
    escreverPremio(ctx, [
        { texto: d.p1.substring(0,3), cor: BRANCO },
        { texto: d.p1.substring(3,5), cor: LARANJA }
    ], 716, 760);


    // P2: último dígito em laranja
    escreverPremio(ctx, [
        { texto: d.p2.substring(0,4), cor: BRANCO },
        { texto: d.p2.substring(4,5), cor: LARANJA }
    ], 716, 912);


    // P3: último dígito em laranja
    escreverPremio(ctx, [
        { texto: d.p3.substring(0,4), cor: BRANCO },
        { texto: d.p3.substring(4,5), cor: LARANJA }
    ], 716, 1064);


    // P4: último dígito em laranja
    escreverPremio(ctx, [
        { texto: d.p4.substring(0,4), cor: BRANCO },
        { texto: d.p4.substring(4,5), cor: LARANJA }
    ], 716, 1216);


    // P5: último dígito em laranja
    escreverPremio(ctx, [
        { texto: d.p5.substring(0,4), cor: BRANCO },
        { texto: d.p5.substring(4,5), cor: LARANJA }
    ], 716, 1368);


    // Número sorteado
    const sorteado6 =
        d.p1.substring(3,5) +
        d.p2.substring(4,5) +
        d.p3.substring(4,5) +
        d.p4.substring(4,5) +
        d.p5.substring(4,5);

    escreverCentro(
        ctx,
        sorteado6.substring(0,3) + "." + sorteado6.substring(3,6),
        716,
        1520,
        LARANJA,
        "800 70px Arial"
    );
}


// ============================================================
// INCENTIVO - 7 DÍGITOS
// ============================================================

function desenhar7DigitosIncentivo(ctx, d) {

    const BRANCO = "#ffffff";
    const LARANJA = "#ff912b";

    escreverCentro(ctx, d.data, 540, 135, BRANCO, "800 48px Arial");

    escreverCentro(ctx, "Nº" + d.extracao, 540, 1580, BRANCO, "800 24px Arial");


    // P1: últimos 3 dígitos em laranja
    escreverPremio(ctx, [
        { texto: d.p1.substring(0,2), cor: BRANCO },
        { texto: d.p1.substring(2,5), cor: LARANJA }
    ], 716, 760);


    // P2: último dígito em laranja
    escreverPremio(ctx, [
        { texto: d.p2.substring(0,4), cor: BRANCO },
        { texto: d.p2.substring(4,5), cor: LARANJA }
    ], 716, 912);


    // P3: último dígito em laranja
    escreverPremio(ctx, [
        { texto: d.p3.substring(0,4), cor: BRANCO },
        { texto: d.p3.substring(4,5), cor: LARANJA }
    ], 716, 1064);


    // P4: último dígito em laranja
    escreverPremio(ctx, [
        { texto: d.p4.substring(0,4), cor: BRANCO },
        { texto: d.p4.substring(4,5), cor: LARANJA }
    ], 716, 1216);


    // P5: último dígito em laranja
    escreverPremio(ctx, [
        { texto: d.p5.substring(0,4), cor: BRANCO },
        { texto: d.p5.substring(4,5), cor: LARANJA }
    ], 716, 1368);


    // Número sorteado
    const sorteado7 =
        d.p1.substring(2,5) +
        d.p2.substring(4,5) +
        d.p3.substring(4,5) +
        d.p4.substring(4,5) +
        d.p5.substring(4,5);

    escreverCentro(
        ctx,
        sorteado7.substring(0,1) + "." +
        sorteado7.substring(1,4) + "." +
        sorteado7.substring(4,7),
        716,
        1520,
        LARANJA,
        "800 70px Arial"
    );
}
