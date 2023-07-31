import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateService } from '../state/state.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
  providers: [StateService],
})
export class OrderDetailsComponent {
  title = 'doqfy_dashboard';

  public data: any[] = [];
  public completed: string[] = [];
  public inProgress: string[] = [];
  public cancelled: string[] = [];
  selectedState: string = '';

  states: string[] = ['Karnataka', 'Maharashtra', 'Tamil Nadu', 'Goa'];
  selectedOption: string = '';

  constructor(
    private http: HttpClient,
    private stateService: StateService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getData();
    this.selectedState = this.stateService.selectedState;
  }

  getData() {
    this.http.get<any[]>(`http://localhost:3000/orders `).subscribe((res) => {
      this.data = res;

      if (this.selectedState == '') {
        //show all orders
        this.data = res;

        this.snackbar('You selected All States.');

        this.completed = this.data.filter((el) => {
          if (el.status === 'Completed') {
            return el;
          }
        });

        this.inProgress = this.data.filter((el) => {
          if (el.status === 'Inprogress') {
            return el;
          }
        });

        this.cancelled = this.data.filter((el) => {
          if (el.status === 'Cancelled') {
            return el;
          }
        });
      } else {
        this.snackbar(`You selected ${this.selectedOption}.`);

        this.data = this.data.filter((el) => {
          if (el.state_name === this.selectedState) {
            return el;
          }
        });

        this.completed = this.data.filter((el) => {
          if (el.status === 'Completed') {
            return el;
          }
        });

        this.inProgress = this.data.filter((el) => {
          if (el.status === 'Inprogress') {
            return el;
          }
        });

        this.cancelled = this.data.filter((el) => {
          if (el.status === 'Cancelled') {
            return el;
          }
        });
      }
    });
  }

  onStateChange() {
    if (this.selectedOption == '') {
      this.selectedState = '';
      this.snackbar('You selected All States.');
      this.getData();
    } else {
      this.selectedState = '';
      this.selectedState = this.selectedOption;
      this.snackbar(`You selected ${this.selectedOption}.`);
      this.getData();
    }
  }

  private snackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }
}
