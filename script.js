function adjustIframeHeight() {
    const iframe = document.getElementById('myIframe');
    if (iframe) {
      try {
        const iframeDocument = iframe.contentWindow.document;
        const iframeBody = iframeDocument.body;
        if (iframeBody) {
          iframe.style.height = iframeBody.scrollHeight + 'px';
        }
      } catch (error) {
        console.error('Error adjusting iframe height:', error);
      }
    }
  }
  
  // Initial adjustment
  window.onload = adjustIframeHeight;
  
  // Optional: Adjust on iframe load
  const iframe = document.getElementById('myIframe');
  iframe.onload = adjustIframeHeight;
  