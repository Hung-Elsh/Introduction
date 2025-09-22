async function generatePDF() {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF("p", "mm", "a4"); // portrait, A4 size

  const pages = document.querySelectorAll(".cv-page");

  for (let i = 0; i < pages.length; i++) {
    const canvas = await html2canvas(pages[i], { scale: 1 }); // high resolution
    const imgData = canvas.toDataURL("image/png");

    const pdfWidth = 210;  // A4 width in mm
    const pdfHeight = 297; // A4 height in mm

    // Get image dimensions
    const imgProps = pdf.getImageProperties(imgData);
    const imgRatio = imgProps.width / imgProps.height;
    let imgWidth = pdfWidth;
    let imgHeight = pdfWidth / imgRatio;

    // If image is taller than page height, scale by height instead
    if (imgHeight > pdfHeight) {
      imgHeight = pdfHeight;
      imgWidth = pdfHeight * imgRatio;
    }

    // Add the captured image to the PDF
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    // Add a new page except after the last page
    if (i < pages.length - 1) {
      pdf.addPage();
    }
  }

  // Save the multi-page PDF
  pdf.save("CV (en) -long.pdf");
}
