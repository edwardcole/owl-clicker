const owls = document.getElementById("owls")
const owl = document.getElementById("owl")
let owlCount = 0
function click() {
    owlCount += 1
    owls.innerHTML = "obese owls: "+owlCount
}
owl.onclick = click