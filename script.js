const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const result = document.getElementById("result");

let selectedImage = null;

imageInput.addEventListener("change", function () {
  const file = this.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    preview.innerHTML = `<img src="${e.target.result}" />`;
    selectedImage = e.target.result;
  };
  reader.readAsDataURL(file);
});

function analyzeImage() {
  if (!selectedImage) {
    result.innerText = "Please upload an image first.";
    return;
  }

  // 🔴 Dummy AI logic (replace with real ML model later)
  const random = Math.random();

  if (random > 0.5) {
    result.innerText = "⚠️ High risk detected (Demo result)";
    result.style.color = "red";
  } else {
    result.innerText = "✅ Low risk detected (Demo result)";
    result.style.color = "green";
  }
}
