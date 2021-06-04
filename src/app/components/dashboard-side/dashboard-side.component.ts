import { ViewChild ,ElementRef} from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-side',
  templateUrl: './dashboard-side.component.html',
  styleUrls: ['./dashboard-side.component.scss']
})
export class DashboardSideComponent implements OnInit {

  @ViewChild('sidebar') firstChild: ElementRef= new ElementRef(
    "button"
  );
  
  panelOpenState = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  openSidebar(){
    if( this.firstChild.nativeElement.style.display=="block"){
      this.firstChild.nativeElement.style.display="none";
    }

    else{
      this.firstChild.nativeElement.style.display="block";
    }
    
  }
}
