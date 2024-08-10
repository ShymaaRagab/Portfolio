document.getElementById("downloadBtn").addEventListener("click", function () {
  // URL of the PDF file to be downloaded
  var pdfUrl = "./assets/CV/Shaimaa Ragab(front-End Developer).pdf";

  // Create an invisible anchor element
  var link = document.createElement("a");
  link.href = pdfUrl;

  // Set the download attribute with a filename
  link.download = "Shaimaa-Ragab-CV.pdf";

  // Append the anchor to the body
  document.body.appendChild(link);

  // Trigger the download by simulating a click
  link.click();

  // Remove the anchor from the document
  document.body.removeChild(link);
});
