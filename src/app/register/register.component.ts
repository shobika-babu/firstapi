import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform:any=FormGroup;
  submitted = false;
  isNextDisabled=true;
  router: any;
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    //form-validation defaulst
    this.registerform=this.formBuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email_id:['',[Validators.required,Validators.email]],
      phonenumber:['',[Validators.required,Validators.minLength(10), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      c_password: ['', Validators.required],
      dob:['',Validators.required],
      gender:['',Validators.required],
    })
  }
  //owl Carousel
  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    }
  }
 //easy to access form fields
 get f(){
   return this.registerform.controls;
 }
 //submit form
  onsubmitregisterform():void{
    this.submitted=true;
    alert('Register Successfully');
      this.router.navigate(['/']);
    // this.registerform.subscribe(()=>{
      
    // })
  }
  

}
