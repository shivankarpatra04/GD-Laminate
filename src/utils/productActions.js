// productActions.js - Utility functions for product actions

/**
 * Share product with social media platforms
 * @param {Object} product - The product to share
 */
export const shareProduct = (product) => {
  // Check if Web Share API is available
  if (navigator.share) {
    navigator.share({
      title: `GD Laminates - ${product.name}`,
      text: `Check out ${product.name} from GD Laminates: ${product.description}`,
      url: window.location.href,
    })
      .then(() => console.log('Shared successfully'))
      .catch((error) => console.error('Error sharing:', error));
  } else {
    // Fallback for browsers that don't support Web Share API
    // Open a custom share dialog
    openShareDialog(product);
  }
};

/**
 * Open a custom share dialog for browsers that don't support Web Share API
 * @param {Object} product - The product to share
 */
const openShareDialog = (product) => {
  const shareUrl = window.location.href;
  const shareText = encodeURIComponent(`Check out ${product.name} from GD Laminates: ${product.description}`);
  
  // Create share links for different platforms
  const sharePlatforms = [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      icon: 'facebook'
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`,
      icon: 'twitter'
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      icon: 'linkedin'
    },
    {
      name: 'WhatsApp',
      url: `https://api.whatsapp.com/send?text=${shareText}%20${encodeURIComponent(shareUrl)}`,
      icon: 'whatsapp'
    },
    {
      name: 'Email',
      url: `mailto:?subject=Check out this product from GD Laminates&body=${shareText}%20${encodeURIComponent(shareUrl)}`,
      icon: 'mail'
    }
  ];

  // Return the share platforms for the UI to render
  return sharePlatforms;
};

/**
 * Download product specifications
 * @param {Object} product - The product to download specs for
 */
export const downloadSpecs = (product) => {
  // In a real application, this would fetch the specific product specs PDF
  // For now, we'll simulate downloading a generic catalog PDF
  
  // Create a link to the PDF file
  const link = document.createElement('a');
  link.href = '/GD-Laminates.pdf'; // Path to the PDF in the public folder
  link.download = `GD-Laminates-${product.name}-Specs.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Request a product sample and send the details to WhatsApp
 * @param {Object} formData - The form data containing user information and product details
 */
export const requestSample = async (formData) => {
  try {
    // Format the message for WhatsApp
    const message = formatWhatsAppMessage(formData);
    
    // Send to WhatsApp
    await sendToWhatsApp(message, '9818086303');
    
    // Return success response
    return { 
      success: true, 
      message: 'Sample request submitted successfully! Our team will contact you shortly.'
    };
  } catch (error) {
    console.error('Error requesting sample:', error);
    return { 
      success: false, 
      message: 'An error occurred while submitting your request. Please try again.'
    };
  }
};

/**
 * Format the form data into a readable WhatsApp message
 * @param {Object} formData - The form data to format
 * @returns {string} - Formatted message for WhatsApp
 */
const formatWhatsAppMessage = (formData) => {
  return `*New Sample Request*\n\n` +
    `*Product:* ${formData.productName} (${formData.productId})\n` +
    `*Category:* ${formData.productCategory}\n` +
    `*Date:* ${new Date(formData.requestDate).toLocaleDateString()}\n\n` +
    `*Customer Details*\n` +
    `*Name:* ${formData.name}\n` +
    `*Email:* ${formData.email}\n` +
    `*Phone:* ${formData.phone || 'Not provided'}\n` +
    `*Address:* ${formData.address}\n\n` +
    `*Additional Message:*\n${formData.message || 'None'}`;
};

/**
 * Send a message to WhatsApp using the WhatsApp API
 * @param {string} message - The message to send
 * @param {string} phoneNumber - The phone number to send to (without +)
 * @returns {Promise} - Promise resolving to the API response
 */
const sendToWhatsApp = async (message, phoneNumber) => {
  // For client-side implementation, we'll use the WhatsApp URL scheme
  // This will open WhatsApp with a pre-filled message
  // Note: In a production environment, you would typically use a server-side API
  
  // Format the phone number (add country code if not present)
  const formattedNumber = phoneNumber.startsWith('+') ? 
    phoneNumber.substring(1) : 
    `91${phoneNumber}`; // Assuming India (+91)
  
  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // Create the WhatsApp URL
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${formattedNumber}&text=${encodedMessage}`;
  
  // Open WhatsApp in a new window
  window.open(whatsappUrl, '_blank');
  
  // Return a resolved promise (since we can't track if the user actually sent the message)
  return Promise.resolve({ success: true });
};