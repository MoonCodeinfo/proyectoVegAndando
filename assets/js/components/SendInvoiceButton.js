const sendInvoice = document.querySelectorAll("#invoice_button");

const wYenifer = "https://wa.link/1bfn1o";
const wLiz = "https://wa.link/mivrcz";
const completeInner ='target="_blank"><p>Enviar comprobante de pago <i class="bx bxl-whatsapp"></i></p>';

//wYenifer
sendInvoice[0].innerHTML = `<a href="${wYenifer}" ${completeInner}</a>`;
//wLiz
sendInvoice[1].innerHTML = `<a href="${wLiz}" ${completeInner}</a>`;
