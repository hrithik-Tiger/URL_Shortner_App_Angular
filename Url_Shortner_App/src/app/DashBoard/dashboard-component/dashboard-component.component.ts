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
  
  fetchedUrl:string=""
  fetchedUrlList:string[]=[]
  isloading = false;
  formShorter!: FormGroup;

  //Expression to check the validity of Url entered by user
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


  //Checking the Validity of Url entered
  ngOnInit(): void {
    this.formShorter = this.fb.group({
      longLink: ["", [Validators.required, Validators.pattern(this.reg)]],
      shortLink: new FormControl({ value: null, disabled: true })
    });
  }


  //Async fn to make code run asyncronusly to pass values until its fetched from the source
  async onSubmit(form: FormGroup) 
  {
    
    if (form.valid) {

      this.isloading = true;
      this.longUrl = form.value.longLink;
      console.log("on submit : ",this.longUrl)

      const res:any = await setTimeout(()=>{
       this.fetchedUrl = this.apiService.getShortUrl(this.longUrl)
       this.fetchedUrlList.push(this.fetchedUrl)
        console.log("fn",this.fetchedUrl)
        this.isloading = false;
      }, 2000) 
      this.error = "";
      

      



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






//If the Url entered by user is Invalid 


    } else {
      const errorMessage =`Invalid URL!`;
      this.error = errorMessage;
      this.isloading = false;
    }

  }
  




 
}