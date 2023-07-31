// import { Component } from '@angular/core';
// import { ChartConfiguration } from 'chart.js';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-e-sign',
//   templateUrl: './e-sign.component.html',
//   styleUrls: ['./e-sign.component.css']
// })
// export class ESignComponent {
//   title = 'doqfy doughnut';
//   public doughnutChartLabels: string[] = ['Initiated', 'Pending', 'Signed', 'Expired'];
//   public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [];

//   public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
//     responsive: false,
//     radius: 100,
//     cutout: 95,
//   };

//   public states: string[] = []; // Store the list of states from the JSON data
//   public selectedState: string | undefined; // Store the selected state
//   public data: any[] = []; // Store the fetched JSON data

//   constructor(private http: HttpClient) {
//     // Fetch the JSON data on component initialization
//     this.getData();
//   }

//   getData() {
//     // Replace the URL with the correct path to your JSON data
//     this.http.get<any[]>('http://localhost:3000/esign').subscribe((data) => {
//       // Extract the list of states from the JSON data
//       this.states = data.map((item) => item.state);

//       // Set the initial datasets to the first state's data
//       this.setDatasets(this.states[0]);
//     });
//   }

//   // Method to update the datasets based on the selected state
//   updateChart() {
//     if (this.selectedState) {
//       this.setDatasets(this.selectedState);
//     }
//   }
  

//   // Helper method to update the datasets
//   private setDatasets(state: string) {
//     const selectedStateData = this.data.find((item) => item.state === state);
//     if (selectedStateData) {
//       this.doughnutChartDatasets = [
//         {
//           data: [
//             selectedStateData.initiated,
//             selectedStateData.pending,
//             selectedStateData.Signed,
//             selectedStateData.expired,
//           ],
//           label: state,
//           backgroundColor: ['blue', 'skyblue', 'violet', 'cadet blue'],
//         },
//       ];
//     }
//   }
// }





















import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-e-sign',
  templateUrl: './e-sign.component.html',
  styleUrls: ['./e-sign.component.css']
})
export class ESignComponent {
  title = 'doqfy doghnut';

      // Doughnut
      public doughnutChartLabels: string[] = [ 'Initiated', 'Pending', 'Signed', 'Expired' ];
      public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
          { data: [ 350, 450, 100, 50 ], label: 'Series A' , backgroundColor: ['blue', 'skyblue', 'violet', 'cadet blue'],},
        ];
    
      public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
        responsive: false,
        radius:100,
        cutout:95,
      };
    
      constructor() {
  
      }
}
