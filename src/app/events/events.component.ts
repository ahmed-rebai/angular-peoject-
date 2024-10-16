import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Events } from 'src/models/Events';
import { EventService } from 'src/services/event.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{
  
  displayedColumns: string[] = ['id','title', 'dateDebut', 'dateFin','lieu','icon','edit'];

  constructor(private ms : EventService,private dialog :MatDialog ){}
  dataSource : Events[]=[]
  ngOnInit(): void {

      //appleler la fonction de service getAllmembers 
      //attendre le rsumtat
      // une fois on recoit les => affecter sa,s le dayasource
      //PERMET DUTILISER LE SERVICE DANS LES COMPSOANT OU LES AUTRS SERVICES EN CREANT UNE INSTANCE PRIV2 DANS LE CONSTRUCTUER DU SERVICE A INJECTER 
      this.ms.getAllEvents().subscribe((test)=>{this.dataSource=test;})
  }
  delete(id:string):void{
    
    
    

  }
  open():void{
    const  dialogRef = this.dialog.open(ModalComponent, {
      height: '400px',
      width: '600px',
    });
    //recevoir 
    dialogRef.afterClosed().subscribe(
      data =>{
        this.ms.addEvent(data).subscribe(()=>{
          //mettre a jour du tableau 
          this.ms.getAllEvents().subscribe((test)=>{this.dataSource=test;})
        })

      });
  }
  open1(id: string):void{
    ///ouvrir la boite et envoyer id 
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id
    };
    


    dialogConfig
    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);
  }


}
