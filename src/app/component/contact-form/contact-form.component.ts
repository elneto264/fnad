import { Component, OnInit,  } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';







@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {


  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_7vi1ebi', 'template_6t0to98', e.target as HTMLFormElement, 'user_XHR7SjA59di4YygrkGort')
      .then((result: EmailJSResponseStatus) => {
       

        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
 

  constructor( ) {}

  

  ngOnInit(): void {

   
  }

 


}
