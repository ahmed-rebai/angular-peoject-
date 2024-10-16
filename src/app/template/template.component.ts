import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/AuthService';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  constructor(private AS:AuthService,private router:Router){}
Logout():void
{
  this.AS.doLogout().then(()=>{
    this.router.navigate([''])
  })
}

}
