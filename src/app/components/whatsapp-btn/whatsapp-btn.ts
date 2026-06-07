import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-btn',
  standalone: true,
  template: `
    <a 
      href="https://api.whatsapp.com/send/?phone=917051415184&text&type=phone_number&app_absent=0" 
      target="_blank" 
      class="whatsapp-float-btn"
      aria-label="Contact Golo Holidays on WhatsApp"
    >
      <i class="bi bi-whatsapp"></i>
      <span class="tooltip-text">Chat with Us</span>
    </a>
  `,
  styles: [`
    .whatsapp-float-btn {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 60px;
      height: 60px;
      background-color: #25D366;
      color: white;
      border-radius: 50% !important; /* Excluded from global sharp-edge rule due to standard brand icon look, or we can make it sharp! Let's keep it rounded or sharp as they like, but the prompt says: No rounded corners on buttons, cards, inputs, navbar, or images. Wait, the prompt says "No rounded corners on buttons, cards, inputs, navbar, or images. Sharp clean edges everywhere". Let's make it a sharp square box for consistency with the theme, or a nice diamond! A sharp square WhatsApp floating button will look very unique and follow the prompt exactly! Let's make it a sharp square. */
      border-radius: 0px !important;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
      z-index: 999;
      text-decoration: none;
      transition: all 0.3s ease;
      overflow: visible;

      &:hover {
        background-color: #128C7E;
        transform: translateY(-5px);
        
        .tooltip-text {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
        }
      }

      .tooltip-text {
        position: absolute;
        right: 70px;
        background-color: #1c1c1c;
        color: white;
        padding: 8px 15px;
        font-size: 14px;
        font-family: 'Inter', sans-serif;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transform: translateX(10px);
        transition: all 0.3s ease;
        border-radius: 0px !important;
        border-left: 3px solid #25D366;
        box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
      }
    }
  `]
})
export class WhatsappBtnComponent {}
