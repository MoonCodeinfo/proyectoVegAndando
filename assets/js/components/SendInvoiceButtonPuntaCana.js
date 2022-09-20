const completeInner ='target="_blank"><p>Enviar comprobante de pago <i class="bx bxl-whatsapp"></i></p>';

function sendInvoicePuntaCana() {
    const sendInvoice = document.querySelectorAll("#invoice_button_puntaCana");
 
    //Links PuntaCana
    const wYeniferPuntaCana = "https://wa.link/z5zv52";
    const wLizPuntaCana = "https://wa.link/mvnvh6";
 
     //wYenifer
     sendInvoice[0].innerHTML = `<a href="${wYeniferPuntaCana}" ${completeInner}</a>`;
    //wLiz
    sendInvoice[1].innerHTML = `<a href="${wLizPuntaCana}" ${completeInner}</a>`;
     return
 }
 sendInvoicePuntaCana()