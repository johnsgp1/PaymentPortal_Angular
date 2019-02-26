import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) {}

  ngOnInit() {
    var div = $("div");
    //$("div").attr("hidden",true);

    var myIndex = 0;
    carousel();
    
    function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      $(x[1]).css("display","block");
      for (i = 0; i < x.length; i++) {
        //x[i].style.display = "none";  
        $(x[i]).css("display","none");
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}    
     // x[myIndex-1].style.display = "block";
      $(x[i]).css("display","block");  
      setTimeout(carousel, 2000);

  }
  
}
myClickFunction(event){
alert(event);
//this.router.navigate(['/Home']);
this.router.navigate(['/wizard']);

}
}
