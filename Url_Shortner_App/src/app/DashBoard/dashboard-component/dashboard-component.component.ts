import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  NgForm,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";


import { ApiService } from 'src/app/Service/api.service';
@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {
  loading = false;
  formShorter!: FormGroup;
  reg =
    "((http|https)://)(www.)?" +
    "[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]" +
    "{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)";
    error: string = "";
  text = "";
  constructor(
    public fb: FormBuilder,
    private apiService : ApiService,
    private cdr: ChangeDetectorRef,
    
    

  ) {}

  ngOnInit(): void {
    this.formShorter = this.fb.group({
      longLink: ["", [Validators.required, Validators.pattern(this.reg)]],
      shortLink: new FormControl({ value: null, disabled: true })
    });
  }

  onSubmit(form: FormGroup) {
    
    if (form.valid) {
      this.loading = true;
      const url = form.value.longLink;
      console.log(url)
      this.apiService.shortenUrl(url).subscribe(
        ({ link }) => {
          this.formShorter.patchValue({ shortLink: link });
          this.loading = false;
        },
        (errorMessage) => {
          this.error = errorMessage;
          this.loading = false;
        }
      );
    } else {
      const errorMessage =`Invalid URL!`;
      this.error = errorMessage;
      this.loading = false;
    }
  }

  
}