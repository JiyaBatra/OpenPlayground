const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const charNoSpace = document.getElementById("charNoSpace");
const wordCount = document.getElementById("wordCount");
const readTime = document.getElementById("readTime");

textInput.addEventListener("input", () => {
  const text = textInput.value;

  charCount.textContent = text.length;
  charNoSpace.textContent = text.replace(/\s/g, "").length;

  const words = text.trim().split(/\s+/).filter(Boolean);
  wordCount.textContent = words.length;

  const minutes = Math.ceil(words.length / 200);
  readTime.textContent = minutes || 0;
});