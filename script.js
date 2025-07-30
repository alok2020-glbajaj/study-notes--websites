// script.js
// Placeholder script for uploading logic
const form = document.getElementById("uploadForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fileInput = document.getElementById("pdfFile");
    if (fileInput.files.length > 0) {
      alert("PDF uploaded successfully (simulation)");
    } else {
      alert("Please select a PDF to upload.");
    }
  });
}