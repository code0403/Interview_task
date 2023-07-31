import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

interface ESignData {
  state: string;
  initiated: number;
  pending: number;
  Signed: number;
  expired: number;
}

@Component({
  selector: 'app-e-sign',
  templateUrl: './e-sign.component.html',
  styleUrls: ['./e-sign.component.css']
})
export class ESignComponent {
  title = 'doqfy doghnut';

  public states: string[] = ['Karnataka', 'Maharashtra', 'Tamil Nadu', 'Goa'];
  selectedOption: string = '';
  public data: ESignData[] = [];
  public selectedState: string | undefined = '';

  // Doughnut
  public doughnutChartLabels: string[] = ['Initiated', 'Pending', 'Signed', 'Expired'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [350, 450, 100, 50], label: 'Initial Data', backgroundColor: ['#654E92', '#6C9BCF', '#4E4FEB', '#3B5249'] },
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
    radius: 100,
    cutout: 75,
  };

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.getData();
  }

  getData() {
    this.http.get<ESignData[]>(`http://localhost:3000/esign`).subscribe((res) => {
      this.data = res;

      if (this.selectedOption === '') {
        // If no state is selected, show data for all states
        this.setDatasets(this.data);
        this.showSnackbar('You selected All States.');
      } else {
        // If a specific state is selected, filter the data for that state
        const selectedData = this.data.find((item) => item.state === this.selectedOption);
        if (selectedData) {
          this.setDatasets([selectedData]);
          this.showSnackbar(`You selected ${this.selectedOption}.`);
        }
      }
    });
  }

  onStateChange() {
    if (this.selectedOption === '') {
      this.selectedState = '';
    } else {
      this.selectedState = this.selectedOption;
    }

    this.getData();
  }

  private setDatasets(updatedData: ESignData[]) {
    console.log(updatedData[0]);
    if (updatedData.length > 0) {
      this.doughnutChartDatasets = [
        {
          data: [
            updatedData[0].initiated,
            updatedData[0].pending,
            updatedData[0].Signed,
            updatedData[0].expired,
          ],
          label: updatedData[0].state,
          backgroundColor: ['#654E92', '#6C9BCF', '#4E4FEB', '#3B5249'],
        },
      ];
    }
  }

  private showSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }
}





















// import { Component } from '@angular/core';
// import { ChartConfiguration } from 'chart.js';
// import { HttpClient } from '@angular/common/http';
// import { MatSnackBar } from '@angular/material/snack-bar';


// @Component({
//   selector: 'app-e-sign',
//   templateUrl: './e-sign.component.html',
//   styleUrls: ['./e-sign.component.css']
// })
// export class ESignComponent {
//   title = 'doqfy doghnut';

//   public states: string[] = ['Karnataka', 'Maharashtra', 'Tamil Nadu', 'Goa'];
//   selectedOption: string = '';
//   public data: any[] = [];
//   public selectedState: string | undefined = '';

//       // Doughnut
//       public doughnutChartLabels: string[] = [ 'Initiated', 'Pending', 'Signed', 'Expired' ];
//       public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
//           { data: [ 350, 450, 100, 50 ], label: 'Inital Data' , backgroundColor: ['#654E92', '#6C9BCF', '#4E4FEB', '#3B5249'],},
//         ];
    
//       public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
//         responsive: false,
//         radius:100,
//         cutout:75,
//       };

    
//       constructor(private http: HttpClient, private snackBar: MatSnackBar) {
//         this.getData()
//       }

//       getData() {
//         this.http.get<any[]>(`http://localhost:3000/esign`).subscribe((res) => {
          

//           if(this.selectedState == ""){
//             this.data = res;
//             console.log(this.data);
//             this.setDatasets(this.data)
//           } else {
//              this.data = this.data.filter((el) => {
//                if(el.state === this.selectedState){
//                 return el;
//                }
//              })
//              this.setDatasets(this.data)
//           }
//         } 
//       )}
        
//       onStateChange() {
//         if (this.selectedOption == '') {
//           this.selectedState = '';
//           this.showSnackbar('You selected All States.');
//           this.getData();
//         } else {
//           this.selectedState = '';
//           this.selectedState = this.selectedOption;
//           console.log(this.selectedState);
//           this.showSnackbar(`You selected ${this.selectedState}.`);
//           this.getData()
//         }
//       }
 

//   private setDatasets(updatedData: any[]) {
//     console.log(updatedData[0])
//     if (updatedData) {
//       this.doughnutChartDatasets = [
//         {
//           data: [
//             updatedData[0].initiated,
//             updatedData[0].pending,
//             updatedData[0].Signed,
//             updatedData[0].expired,
//           ],
//           label: updatedData[0].state,
//           backgroundColor: ['#654E92', '#6C9BCF', '#4E4FEB', '#3B5249'],
//         },
//       ];
//     }
//   }

//   private showSnackbar(message: string) {
//     this.snackBar.open(message, 'Close', {
//       duration: 3000,
//       verticalPosition: 'top',
//       horizontalPosition: 'right',
//     });
//   }
// }

