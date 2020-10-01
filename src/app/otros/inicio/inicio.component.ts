import { Component, OnInit } from '@angular/core';
import { SistemaService } from 'src/app/services/sistema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private sistema:SistemaService) { }

  ngOnInit() {
    this.sistema.getTest().subscribe(
      res=>{
        console.log(res)
      }
    )
  }

}
