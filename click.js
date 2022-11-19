const owls = document.getElementById("owls")
const owl = document.getElementById("owl")
let owlCount = 0
chrome.storage.local.get(['owls'], result => {
    if (result.key != undefined) {
        owlCount = result.key
    }
})
function click() {
    owlCount += 1
    owls.innerHTML = "obese owls: "+owlCount
    owl.style.transform = "rotate("+(Math.random()*2-1)*5+"deg)"
}
owl.onclick = click

setInterval(() => {
    chrome.storage.local.set({owls: owlCount}, () => {
        console.log("saved owls with value "+owlCount)
    })
},5000)