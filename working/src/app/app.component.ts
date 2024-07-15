// import { CommonModule } from '@angular/common';
// import { Component, ViewChild } from '@angular/core';
// import { FormsModule, NgForm } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, CommonModule, FormsModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title(title: any) {
//     throw new Error('Method not implemented.');
//   }
//   languages = ['JavaScript', 'PHP','Java', 'C#']
//   years = ['year 1', 'yaer 2', 'year 3', 'year 4']
//   @ViewChild('form') form!:NgForm
//     onSubmit(){
//       console.log(this.form);
//   }

//   prepopulate(){
//     //setValue -- you want to update all the inputs{name,email, yearofStudy}
//     // this.form.setValue({
//     //   personalData: {
//     //     name: 'John',
//     //     email: 'john@gmail.com',
//     //     year: this.years[2]
//     //   },
//     //   language: this.languages[3]
//     // })
//     this.form.form.patchValue({
//       personalData: {
//             name: 'Just Name'
//       }
//     })
//   }
// }




import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  languages = ['JavaScript', 'PHP','Java', 'C#']
  years = ['year 1', 'yaer 2', 'year 3', 'year 4']
  // @ViewChild('form') form!:NgForm
  form!:FormGroup
    onSubmit(){
      console.log(this.form);
      // this.form.reset()
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      personalData: new FormGroup({
        name: new FormControl(null, Validators.required), 
      email: new FormControl(null, [Validators.email, Validators.required]), 
      year: new FormControl(null, Validators.required), 
      }),
      language: new FormControl(null, Validators.required), 
      skills: new FormArray([])
    })
  }

  prepopulate(){
    //setValue -- you want to update all the inputs{name,email, yearofStudy}
    // this.form.setValue({
    //   personalData: {
    //     name: 'John',
    //     email: 'john@gmail.com',
    //     year: this.years[2]
    //   },
    //   language: this.languages[3]
    // })
    // this.form.form.patchValue({
    //   personalData: {
    //         name: 'Just Name'
    //   }
    // })
  }

  addControl(){
    // adds controls into form array
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.form.get('skills')).push(control)
  }

  getControl(){
    return (<FormArray>this.form.get('skills')).controls
  }

  delete(i:number){
    (<FormArray>this.form.get('skills')).removeAt(i)
  }
}

