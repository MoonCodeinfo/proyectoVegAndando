const completeInner ='target="_blank"><p>Enviar comprobante de pago <i class="bx bxl-whatsapp"></i></p>';

function sendInvoiceMoca() {
    const sendInvoice = document.querySelectorAll("#invoice_button_moca");
 
    //Links Moca
    const wYeniferMoca = "https://wa.link/z5zv52";
    const wLizMoca = "https://wa.link/mvnvh6";
 
     //wYenifer
     sendInvoice[0].innerHTML = `<a href="${wYeniferMoca}" ${completeInner}</a>`;
    //wLiz
    sendInvoice[1].innerHTML = `<a href="${wLizMoca}" ${completeInner}</a>`;
     return
 }
 sendInvoiceMoca()