  // Obtener el ID del producto de la URL
  const urlParams = new URLSearchParams(document.location.search);
  const productId = urlParams.get('id');

  // Mostrar un mensaje de alerta con el ID del producto
  alert(`Hiciste clic en el producto con el ID: ${productId}`);
