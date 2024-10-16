import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { member } from 'src/models/member';
import { MemberService } from 'src/services/member.service';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit
{
  displayedColumns: string[] = ['id','cin', 'name', 'cv','type', 'createdDate','icon','edit'];
  constructor(private ms : MemberService,private dialog:MatDialog){}
  dataSource : member[]=[];
  ngOnInit(): void {
      //appleler la fonction de service getAllmembers 
      //attendre le rsumtat
      // une fois on recoit les => affecter sa,s le dayasource
      //PERMET DUTILISER LE SERVICE DANS LES COMPSOANT OU LES AUTRS SERVICES EN CREANT UNE INSTANCE PRIV2 DANS LE CONSTRUCTUER DU SERVICE A INJECTER 
      this.ms.getAllMembers().subscribe((a)=>{this.dataSource=a;})
  }
  delete(id:string):void{/// lancer la boite de confirmation  attendre la resu de user et si click sur confirm
    const dialogRef = this.dialog.open(ConfirmComponent);
    dialogRef.afterClosed().subscribe((response)=>{
      if (response){
        this.ms.DeleteMember(id).subscribe(()=>{
          this.ms.getAllMembers().subscribe((a)=>{this.dataSource=a;})
        })
      }
      
    })

    
    

  }
  
  

}
