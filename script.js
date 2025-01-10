// Import jsPDF and html2canvas to save as PDF
const { jsPDF } = window.jspdf;

document.getElementById("savePdf").addEventListener("click", () => {
  const resume = document.getElementById("resume");

  html2canvas(resume, { scale: 2 }).then((canvas) => {
    const pdf = new jsPDF("p", "mm", "a4");
    const imgData = canvas.toDataURL("image/png");
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("resume.pdf");
  });
});
