import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  helpkey:string;

  navToAbout(): void {
    this.router.navigateByUrl('/about');
  }

  constructor(
    private route: ActivatedRoute, 
    private router: Router 
    ) { }

  ngOnInit() {
    this.helpkey = this.route.snapshot.params.id;
  }
  
}
