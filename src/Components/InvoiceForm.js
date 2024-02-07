import React, { useState } from "react";
import html2pdf from "html2pdf.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import "./invoice.css";
const InvoiceForm = () => {
  const [customerName, setCustomerName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [address, setAdddress] = useState("");
  const [phone, setPhone] = useState("");

  const generateInvoice = async (e) => {
    e.preventDefault();

    // Create a div element with the content you want in the PDF
    const content = document.createElement("div");
    content.innerHTML = `
  
    <div class="wrapper">
      <div class="invoice_wrapper">
        <div class="header">
          <div class="logo_invoice_wrap">
            <div class="logo_sec">
              <img src="codingboss.png" alt="code logo">
              <div class="title_wrap">
                <p class="title bold">Subham Travellers/p>
                <p class="sub_title">Travel all over the India</p>
              </div>
            </div>
            <div class="invoice_sec">
              <p class="invoice bold">INVOICE</p>
              <p class="invoice_no">
                <span class="bold">Invoice</span>
                <span>#3488</span>
              </p>
              <p class="date">
                <span class="bold">Date</span>
                <span>${date}</span>
              </p>
            </div>
          </div>
          <div class="bill_total_wrap">
            <div class="bill_sec">
              <p>Bill To</p> 
                    <p class="bold name">${customerName}</p>
                  <span>
                  ${address}
                     <br/>
                     ${phone}
                  </span>
            </div>
            <div class="total_wrap">
              <p>Total Due</p>
                    <p class="bold price">Rs ${amount}</p>
            </div>
          </div>
        </div>
        <div class="body">
          <div class="main_table">
            <div class="table_header">
              <div class="row">
                <div class="col col_no">NO.</div>
                <div class="col col_des">Total Distance</div>
                <div class="col col_price">PRICE</div>
                
                <div class="col col_total">TOTAL</div>
              </div>
            </div>
            <div class="table_body">
              <div class="row">
                <div class="col col_no">
                  <p>01</p>
                </div>
                <div class="col col_des">
                  <p class="bold">Web Design</p>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <div class="col col_price">
                  <p>$350</p>
                </div>
                <div class="col col_qty">
                  <p>2</p>
                </div>
                <div class="col col_total">
                  <p>$700.00</p>
                </div>
              </div>
             
             
            </div>
          </div>
          <div class="paymethod_grandtotal_wrap">
            <div class="paymethod_sec">
              <p class="bold">Payment Method</p>
              <p>Visa, master Card and We accept Cheque</p>
            </div>
            <div class="grandtotal_sec">
                  <p class="bold">
                      <span>SUB TOTAL</span>
                      <span>$7500</span>
                  </p>
                  <p>
                      <span>Tax Vat 18%</span>
                      <span>$200</span>
                  </p>
                  <p>
                      <span>Discount 10%</span>
                      <span>-$700</span>
                  </p>
                   <p class="bold">
                      <span>Grand Total</span>
                      <span>$7000.0</span>
                  </p>
            </div>
          </div>
        </div>
        <div class="footer">
          <p>Thank you and Best Wishes</p>
          <div class="terms">
                <p class="tc bold">Terms & Coditions</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non praesentium doloribus. Quaerat vero iure itaque odio numquam, debitis illo quasi consequuntur velit, explicabo esse nesciunt error aliquid quis eius!</p>
            </div>
        </div>
      </div>
    </div>
    
    
   

    
    `;

    // Set up options for html2pdf
    const options = {
      margin: 10,
      filename: "invoice.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    // Use html2pdf to generate the PDF
    html2pdf(content, options);
    const pdf = await html2pdf().from(content).outputPdf();
  };

  return (
    <div className="max-w-2xl mx-auto mt-16 bg-white p-8 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Invoice Form</h2>
      <form onSubmit={generateInvoice}>
        <div className="mb-4">
          <label
            htmlFor="customerName"
            className="block text-sm font-medium text-gray-600"
          >
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
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-600"
          >
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
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-600"
          >
            date
          </label>
          <input
            type="date"
            id="date"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-600"
          >
            phone
          </label>
          <input
            type="text"
            id="phone"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-600"
          >
            phone
          </label>
          <input
            type="text"
            id="address"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={address}
            onChange={(e) => setAdddress(e.target.value)}
          />
        </div>
        setAdddress
        <button
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full"
          type="submit"
        >
          Generate Invoice
        </button>
      </form>
    </div>
  );
};

export default InvoiceForm;
