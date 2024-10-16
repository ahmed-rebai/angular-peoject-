import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { member } from 'src/models/member';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  form!: FormGroup;
  constructor(private Ms:MemberService,private router:Router,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    ///1 recuperer l id de la route active 
    
    const idCourant = this.activatedRoute.snapshot.params['id'];
    console.log(idCourant);
    if(!!idCourant){
      ///2 if id existe et a une valeur => je suis dans edit 
      this.Ms.getMember(idCourant).subscribe((response)=>{
        this.form = new FormGroup({
          cin2: new FormControl(null, [Validators.required]),
          cin: new FormControl(response.cin, [Validators.required]),
          name: new FormControl(response.name, [Validators.required]),
          cv: new FormControl(response.cv, [Validators.required]),
          type: new FormControl(response.type, [Validators.required])
        });
    
      })
    }
    else{
      ////3 
    this.initForm();

    }


    
    
  }
  initForm():void {
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required])
    });

  }
  sub(): void {
    const idCourant = this.activatedRoute.snapshot.params['id'];
    if(!!idCourant){
      console.log(this.form.value);
    const m:member={...this.form.value, createdDate: new Date()};
    this.Ms.editMember(m,idCourant).subscribe(()=>{
      this.router.navigate(['/']);})


    }
    else{
      console.log(this.form.value);
    const m:member={...this.form.value, createdDate: new Date()};
    this.Ms.CreateMember(m).subscribe(()=>{
      this.router.navigate(['/']);
    })

    }

    
  
  }
}
