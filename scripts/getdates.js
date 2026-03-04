// Dynamically set the current year in the footer
const yearSpan = document.querySelector("#currentyear");
if (yearSpan) {
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
}

// Display the document's last modified date
const lastModifiedParagraph = document.querySelector("#lastModified");
if (lastModifiedParagraph) {
  lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
}

