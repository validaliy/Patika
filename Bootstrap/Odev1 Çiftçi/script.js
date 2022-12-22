function pil(variable) {
    yesil = document.getElementById("yesil")
    yuzdeLabel = document.getElementById("yuzde")
    inpt = document.getElementById("deger").value
    if (inpt > 100) {
        variable = 100
        document.getElementById("deger").value = 100
      } else if (inpt != 0) {
        variable = inpt
      }
    yesil.style.width = `${variable}%`
    yuzdeLabel.innerHTML = `${variable}%`
}

function deneme(yuzde) {
    setTimeout(pil, 1000, yuzde);
}

// var input = document.getElementById("deger");
// input.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//       event.preventDefault();
//       pil(0)
//     }
//   });


// while (true) {
//     yesil = document.getElementById("yesil")
//     yuzdeLabel = document.getElementById("yuzde")
//     inpt = document.getElementById("deger").value
//     if (inpt > 100) {
//         variable = 100
//         document.getElementById("deger").value = 100
//       } else if (inpt != 0) {
//         variable = inpt
//       }
//     yesil.style.width = `${variable}%`
//     yuzdeLabel.innerHTML = `${variable}%`
// }