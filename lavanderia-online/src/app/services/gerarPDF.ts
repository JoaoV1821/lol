import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

async function createPDF() {
  // Create a new PDF document
  const pdfDoc = await PDFDocument.create();

  // Add a new page
  const page = pdfDoc.addPage([600, 400]);

  // Draw text on the page
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const { width, height } = page.getSize();
  const fontSize = 30;
  const text = 'Hello, PDF!';

  page.drawText(text, {
    x: 50,
    y: height - 50,
    size: fontSize,
    font: font,
    color: rgb(0, 0, 0),
  });

  // Serialize the PDF document to bytes
  const pdfBytes = await pdfDoc.save();

  // You can save the bytes to a file or send the PDF as an HTTP response, depending on your use case
}

createPDF().catch((error) => {
  console.error('Error creating PDF:', error);
});

