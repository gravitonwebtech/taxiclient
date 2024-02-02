// InvoiceForm.js
import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';

const InvoiceForm = () => {
  const [customerName, setCustomerName] = useState('');
  const [amount, setAmount] = useState('');

  const generateInvoice = async (e) => {
    e.preventDefault();

    const invoiceContent = document.getElementById('invoice-content');

    // Ensure the content exists before generating the PDF
    if (invoiceContent) {
      const pdfOptions = {
        margin: 10,
        filename: 'invoice.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };

      const pdf = await html2pdf().from(invoiceContent).set(pdfOptions).outputPdf();

      // Use FormData to send the PDF file to Django API
      const formData = new FormData();
      formData.append('customer_name', customerName);
      formData.append('amount', amount);
      formData.append('pdf_file', new Blob([pdf], { type: 'application/pdf' }), 'invoice.pdf');

      // Send the form data to Django API
      fetch('http://127.0.0.1:8000/api/upload_invoice/', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log(data); // You can handle the response accordingly
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Invoice Form</h2>
        <form onSubmit={generateInvoice}>
          <div className="mb-4">
            <label htmlFor="customerName" className="block text-sm font-medium text-gray-600">
              Customer Name
            </label>
            <input
              type="text"
              id="customerName"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-600">
              Amount
            </label>
            <input
              type="text"
              id="amount"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <button
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full"
            type="submit"
          >
            Generate Invoice
          </button>
        </form>
      </div>

      <div id="invoice-content" className="hidden">
        <h2 className="text-2xl font-semibold mb-4">Invoice</h2>
        <p>Customer Name: {customerName}</p>
        <p>Amount: {amount}</p>
      </div>
    </div>
  );
};

export default InvoiceForm;
