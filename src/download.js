function downloadHTML() {
    const container = document.getElementById('myContainer');
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>Downloaded HTML</title>
        </head>
        <body>
          ${container.outerHTML}
        </body>
      </html>
    `;
  
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'container.html';
    link.click();
    URL.revokeObjectURL(link.href);
  }