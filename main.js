const interval = setInterval(() => {
    const ad = document.querySelector("._3_hHr3kfEhbNYRFM5YJxH9")
    if (ad) {

        ad.innerHTML="";
        ad.className = 'nothing_here'
        ad.style.display = "none"
    }
    console.log("test")
}, 10000)
