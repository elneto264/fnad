import { Component, OnInit,  } from '@angular/core';





@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  //FormData: FormGroup;
  // fullname: string;
  // email: string;
  // message: string;

 

  constructor( ) {

    }

  

  ngOnInit(): void {

      
    // this.FormData = this.builder.group({
    //   Fullname: new FormControl('', [Validators.required]),
    //   Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
    //   // Phone: new FormControl('', [Validators.required]),
    //   Comment: new FormControl('', [Validators.required])
    // });
  }

  // onSubmit() {
  //   const allInfo = `My name is ${this.fullname}. My email is ${this.email}. My message is ${this.message}`;
  //   alert(allInfo); 
  // }


}
