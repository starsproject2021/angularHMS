import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 
  constructor(private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {

  }
   
  customOptions: OwlOptions = {
    autoplay:true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots:false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      500: {
        items: 3
      },
      700: {
        items: 1
      }
    },
    
  }


  navigateToHome() {
    this.router.navigateByUrl('/home');
 }

  


}
