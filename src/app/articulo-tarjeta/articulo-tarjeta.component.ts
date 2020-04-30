import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulo-tarjeta',
  templateUrl: './articulo-tarjeta.component.html',
  styleUrls: ['./articulo-tarjeta.component.css']
})
export class ArticuloTarjetaComponent implements OnInit {

  

parametros:any = {};

  constructor(private route: ActivatedRoute) {
   route.params.subscribe(params => {
     this.parametros = params;
       return this.parametros;
     //console.log (course.name);
    });
  }

  ngOnInit() {
  }

}