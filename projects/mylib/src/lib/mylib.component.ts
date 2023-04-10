import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer/Services/customer.service';
import { Account } from 'src/Models/Account';

@Component({
  selector: 'lib-mylib',
  template: `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Privacy Policy | EuroBank</title>
    <style>
      body {
        
        font-family: Arial, sans-serif;
        font-size: 16px;
        line-height: 1.5;
        margin: 0;
        padding: 0;
      }
      h1 {
        color: #f50057;
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      h2 {
        color:#f50057;
        font-size: 22px;
        font-weight: bold;
        margin-top: 30px;
        margin-bottom: 10px;
      }
      p {
        margin-bottom: 10px;
      }
      .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 30px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
    </style>
  </head>
  <body>
  <div class="container">
    <h1>Privacy Policy</h1>
    <p>At <strong style="color:#f50057;">EuroBank</strong>, we are committed to protecting the privacy and confidentiality of our customers' personal and financial information. We recognize the importance of maintaining the privacy of your information, and we take great care in safeguarding your information.</p>
    <h2>Collection of Information</h2>
    <p>We collect personal information about our customers when they open an account or apply for a product or service. This information includes, but is not limited to, name, address, phone number, email address, social security number, and financial information. We also collect information from third-party sources, such as credit reporting agencies and other financial institutions.</p>
    <h2>Use of Information</h2>
    <p>We use your personal information to provide products and services to you, to administer your account, and to comply with legal and regulatory requirements. We may also use your information to offer you additional products and services that may be of interest to you. We will never sell your personal information to third parties for marketing purposes.</p>
    <h2>Disclosure of Information</h2>
    <p>We may share your personal information with our affiliates and service providers as necessary to provide products and services to you. We may also share your information with regulatory and law enforcement authorities as required by law. We will not disclose your personal information to third parties for their marketing purposes.</p>
    <h2>Protection of Information</h2>
    <p>We have implemented physical, electronic, and procedural safeguards to protect your personal information from unauthorized access, use, and disclosure. We require our employees and service providers to maintain the confidentiality of your information and to use it only for the purposes for which it was collected.</p>
    <h2>Changes to Policy</h2>
    <p>We may change this privacy policy from time to time. Any changes will be posted on our website, and the revised policy will apply to all information we have about you.</p>
    <h2>Contact Us</h2>
    <p>If you have any questions or concerns about our privacy policy, please contact us at <a href="mailto:EurofinsInterns@outlook.com">AshokKumar@EuroBank.com</a>.</p>
  </div>
  </body>
</html>


  `,
  
   styles: [
    
   ]
})
export class MylibComponent
 {

   
}
