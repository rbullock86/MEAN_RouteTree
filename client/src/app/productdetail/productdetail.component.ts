import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  id;
  
  constructor(
    private _route : ActivatedRoute,
    private _router : Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      console.log(params)
      this.id = params['id'];
  })

}
