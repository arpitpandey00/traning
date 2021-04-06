import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { IUser } from '../form/IUser';
function ageRangeValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 70)) {
      return { "ageerror": true };
    }
    return null;

  }

}


// function ageRangeValidator(control:AbstractControl):{[key:string]:boolean}|null{
// if(control.value!==undefined &&(isNaN(control.value)||control.value<18||control.value>70))
// {
//   return {"ageerror":true};
// }
//   return null;

// }

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  title: "dedemo";
  loginform: FormGroup;
  minage = 18;
  maxage = 70;
  user: IUser = {

    email: "pandeyarpit003@gmail.com",
    password: "qwerty",
  };

  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl(this.user.email, [Validators.required]),
      password: new FormControl(this.user.password, [Validators.required, Validators.minLength(5)]),
      age: new FormControl(null, [ageRangeValidator(this.minage, this.maxage)]),
      phonenumber: new FormControl(null, []),
      notification: new FormControl("email", []),
    })
    this.formcontrolvaluechanged();
  }
  login(): void {
    console.log(this.loginform.value);
  }
  reset(): void {
    this.loginform.reset();
  }
  formcontrolvaluechanged() {
    const phoneControl = this.loginform?.get('phonenumber');
    this.loginform.get('notification')?.valueChanges.subscribe((data: string) => {
      console.log(data);
      if (data == 'phone') {
        phoneControl?.setValidators([Validators.required]);
      }
      else if(data =='email') {
        phoneControl?.clearValidators();
      }
      phoneControl?.updateValueAndValidity();
    })
  }
}
