import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { EventService } from 'src/services/event.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  id:string
  constructor(public dialogRef: MatDialogRef<ModalComponent>,private ms : EventService,@Inject(MAT_DIALOG_DATA) data:any ){
    if(data){}
    this.id=data.id;
    if(!!this.id){
      this.ms.getEventByID(this.id).subscribe((event)=>{
        this.form = new FormGroup({
          title: new FormControl(event.title, [Validators.required]),
          dateDebut: new FormControl(event.dateDebut, [Validators.required]),
          dateFin: new FormControl(event.dateFin, [Validators.required]),
          lieu: new FormControl(event.lieu, [Validators.required])
        });

      })
    }
    else /// create{
    {
      this.form = new FormGroup({
        title: new FormControl(null, ),
        dateDebut: new FormControl(null,),
        dateFin: new FormControl(null,),
        lieu: new FormControl(null,)
      });
    }




   }
  
  
  form!:FormGroup
  ngOnInit(){
    this.initForm();

  }
  initForm():void{
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      dateDebut: new FormControl(null, [Validators.required]),
      dateFin: new FormControl(null, [Validators.required]),
      lieu: new FormControl(null, [Validators.required])
    });

  }
  save() {
    this.dialogRef.close(this.form.value);
}

close() {
    this.dialogRef.close();
}
  

}
