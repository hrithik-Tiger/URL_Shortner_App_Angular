import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  NgForm,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

import { ClipboardService } from 'ngx-clipboard';
import { ApiService } from 'src/app/Service/api.service';
@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {
  longUrl:string="";
  //url :string="";
  fetchedUrl:string=""
  fetchedUrlList:string[]=[]
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
    private clipboardApi: ClipboardService

  ) {}

  ngOnInit(): void {
    this.formShorter = this.fb.group({
      longLink: ["", [Validators.required, Validators.pattern(this.reg)]],
      shortLink: new FormControl({ value: null, disabled: true })
    });
  }

  onSubmit(form: FormGroup) 
  {
    
    if (form.valid) {
      this.loading = true;
      this.longUrl = form.value.longLink;
      console.log("on submit : ",this.longUrl)
      this.fetchedUrl =this.apiService.getShortUrl(form.value["longLink"])
      console.log("F : ",this.fetchedUrl)
      this.fetchedUrlList.push(this.fetchedUrl)
      console.log("FL : ",this.fetchedUrlList)
      console.log("FP : ",this.fetchedUrlList[0])
      const errorMessage ="";
      this.error = errorMessage;
      // .subscribe(
      //   ({ link }) => {
      //     this.formShorter.patchValue({ shortLink: link });
      //     this.loading = false;
      //   },
      //   (error) => {
      //     console.log("error from on sub : ",error.error)
      //         this.error = error;
      //   }
      // );







    } else {
      const errorMessage =`Invalid URL!`;
      this.error = errorMessage;
      this.loading = false;
    }

  }
  

  
}