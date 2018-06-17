import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormModalComponent} from '../../../_shared/components/modals/form-modal/form-modal.component'

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  public text: string;

  public constructor(
    public dialog: MatDialog
  ) { }

  public ngOnInit(): void {
  }

  public openModal(text: string): void {
    let dialogRef = this.dialog.open(FormModalComponent, {
      width: '310px',
      data: { position: text }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
