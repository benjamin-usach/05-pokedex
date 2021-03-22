import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pokemon } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit {

  constructor(  private dialogRef: MatDialogRef<ConfirmarComponent>,
                @Inject(MAT_DIALOG_DATA) public data: Pokemon 
    ) { }

  ngOnInit(): void {
    console.log(this.data)

  }

  cerrar(){
    this.dialogRef.close();
  }

  borrar(){
    this.dialogRef.close(true);
  }

}
