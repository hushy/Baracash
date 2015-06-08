var curProductId = "";
var curSellerName = "";

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	curProductId = request.productId;
  	curOfferId= request.offerId;
  });
// Run our cart manager as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {

});
