import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateService } from './state/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StateService] // Provide the StateService at the component level
})
export class AppComponent {
  title = 'doqfy_dashboard';


  // public data: any[] = [];
  // public completed: string[] = [];
  // public inProgress: string[] = [];
  // public cancelled: string[] = []
  // selectedState : string= ""


  

  // states: string[] = ['Karnataka', 'Maharashtra', 'Tamil Nadu', 'Goa'];
  // selectedOption: string = '';
    
  
    // constructor(private http: HttpClient, private stateService: StateService) {
    //   this.getData();
    // }

    
    // getData(){
    //   this.http.get<any[]>(`http://localhost:3000/orders `).subscribe((res) => {
    //     this.data = res
    //   })
    // }



    // onStateChange(){
    //    if(this.selectedOption == ""){
    //     this.stateService.selectedState = ""
    //     this.filterData(this.stateService.selectedState)
    //    } else {
    //       this.stateService.selectedState = ""
    //       this.stateService.selectedState = this.selectedOption
    //       console.log(this.stateService.selectedState)
    //       this.filterData(this.stateService.selectedState)
    //    }
    // }
    
    


    // filterData(selectedStates: string="") {
    //   if (selectedStates === "") {
    //     this.stateService.selectedState = ""
    //     console.log(this.stateService.selectedState)
    //   } else {
    //     this.stateService.selectedState = selectedStates
    //     console.log(this.stateService.selectedState)
    //   }
    // }
}
