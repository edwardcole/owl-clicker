const owls = document.getElementById("owls")
const owl = document.getElementById("owl")
let owlCount = 0
chrome.storage.local.get(['owls'], function(result) {
    if (result.owls != undefined) {
        owlCount += result.owls
        owls.innerHTML = "obese owls: "+owlCount
    }
})
function click() {
    owlCount += 1
    owls.innerHTML = "obese owls: "+owlCount
    owl.style.transform = "rotate("+(Math.random()*2-1)*5+"deg)"
    chrome.storage.local.set({owls: owlCount})
}
owl.onclick = click
