import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogButton, DialogResult, DialogType } from './dialog-types.enum';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css'],
})
export class DialogBoxComponent implements OnInit {
  public title: string;
  public message: string;
  public showYesNo: boolean = true;
  public dynamicColor: any;
  public dialogType: DialogType = DialogType.Info;
  public buttons: DialogButton = DialogButton.Ignore;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // , private translate: TranslatePipe
    this.title = data.title;
    this.message = data.message;
    this.showYesNo = data.showYesNo ?? true;

    if (data.dialogType != null || data.dialogType != undefined)
      this.dialogType = data.dialogType;

    // *******************************************************************************************************************
    //    Default value of dialog type. you can customize buttons and title in data.buttons and data.title
    // *******************************************************************************************************************
    switch (this.dialogType) {
      case DialogType.Info:
        this.dynamicColor = 'dialog-info';
        this.buttons =
          data.buttons != null || data.buttons != undefined
            ? data.buttons
            : DialogButton.OK;
        this.title =
          data.title != null || data.title != undefined
            ? data.title
            : 'Inforamtion';
        break;
      case DialogType.Confirm:
        this.dynamicColor = 'dialog-confirm';
        this.buttons =
          data.buttons != null || data.buttons != undefined
            ? data.buttons
            : DialogButton.YesNo;
        this.title =
          data.title != null || data.title != undefined
            ? data.title
            : 'Confirmation';
        break;
      case DialogType.Warning:
        this.dynamicColor = 'dialog-warning';
        this.buttons =
          data.buttons != null || data.buttons != undefined
            ? data.buttons
            : DialogButton.OK;
        this.title =
          data.title != null || data.title != undefined
            ? data.title
            : 'Warning';
        break;
      case DialogType.Error:
        this.dynamicColor = 'dialog-error';
        this.buttons =
          data.buttons != null || data.buttons != undefined
            ? data.buttons
            : DialogButton.OK;
        this.title =
          data.title != null || data.title != undefined ? data.title : 'Error';
        break;
    }

    // console.log('dialogType:', this.dialogType);
    // console.log('buttons:', this.buttons);
    // console.log('title:', this.title);
    // console.log('dynamicColor:', this.dynamicColor);
  }

  ngOnInit() {}

  public GetDialogButtons(): DialogButton[] {
    return Object.values(DialogButton)
      .filter((item) => {
        return (
          this.checkButtons(Number(item)) && // check in selected buttons list
          Number(item) != 0 &&
          (Number(item) & (Number(item) - 1)) == 0
        ); // check single values
      })
      .map((p) => p as DialogButton);
  }

  public get DialogButton() {
    return DialogButton;
  }

  public get DialogType() {
    return DialogType;
  }

  public checkButtons(buttonType: DialogButton): boolean {
    return buttonType === (this.buttons & buttonType);
  }

  onClick(clickButton: DialogButton): void {
    switch (clickButton) {
      case DialogButton.No:
        this.dialogRef.close(DialogResult.No);
        break;
      case DialogButton.Abort:
        this.dialogRef.close(DialogResult.Abort);
        break;
      case DialogButton.Cancel:
        this.dialogRef.close(DialogResult.Cancel);
        break;
      case DialogButton.Ignore:
        this.dialogRef.close(DialogResult.Ignore);
        break;
      case DialogButton.OK:
        this.dialogRef.close(DialogResult.OK);
        break;
      case DialogButton.Retry:
        this.dialogRef.close(DialogResult.Retry);
        break;
      case DialogButton.Yes:
        this.dialogRef.close(DialogResult.Yes);
        break;
      default:
        this.dialogRef.close(DialogResult.None);
        break;
    }
  }
}
