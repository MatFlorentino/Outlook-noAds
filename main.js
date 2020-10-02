const interval = setInterval(() => {
    const container = document.querySelector("#owaTimePanelBtn_container")
    if (container) {

        var buttun = document.createElement('buttun')
        buttun.innerText = "Bloquear by Mateus :)"
        buttun.className = "_2-4jfRBkDLE1Xuu-op_VA2 o365sx-button"
        buttun.onclick = function () {
            block()
        }
        container.appendChild(buttun)

    }
    clearInterval(interval)

}, 5000)

function block() {
    const ad = document.querySelector("._3_hHr3kfEhbNYRFM5YJxH9")
    if (ad) {

        ad.innerHTML = "";
        ad.className = 'nothing_here'
        ad.style.display = "none"
    }
}

