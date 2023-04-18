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
  public dialogButtons: DialogButton = DialogButton.OK;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {  //, private translate: TranslatePipe
    this.title = data.title;
    this.message = data.message;
    this.showYesNo = data.showYesNo ?? true;

    if (data.dialogType != null || data.dialogType != undefined)
      this.dialogType = data.dialogType;

    // *******************************************************************************************************************
    //  Default value of dialog type. 
    //  You can customize dialogButtons and title in data.dialogButtons and data.title in constructor
    // *******************************************************************************************************************
    switch (this.dialogType) {
      case DialogType.Info:
        this.dynamicColor = "dialog-info";
        this.dialogButtons = (data.dialogButtons != null || data.dialogButtons != undefined) ? data.dialogButtons : DialogButton.OK;
        this.title = (data.title != null || data.title != undefined) ? data.title : "Information";
        break;
      case DialogType.Confirm:
        this.dynamicColor = "dialog-confirm";
        this.dialogButtons = (data.dialogButtons != null || data.dialogButtons != undefined) ? data.dialogButtons : DialogButton.YesNo;
        this.title = (data.title != null || data.title != undefined) ? data.title : "Confirmation";
        break;
      case DialogType.Warning:
        this.dynamicColor = "dialog-warning";
        this.dialogButtons = (data.dialogButtons != null || data.dialogButtons != undefined) ? data.dialogButtons : DialogButton.AbortRetryIgnore;
        this.title = (data.title != null || data.title != undefined) ? data.title : "Warnning";
        break;
      case DialogType.Error:
        this.dynamicColor = "dialog-error";
        this.dialogButtons = (data.dialogButtons != null || data.dialogButtons != undefined) ? data.dialogButtons : DialogButton.AbortRetryIgnore;
        this.title = (data.title != null || data.title != undefined) ? data.title : "Error";
        break;
    }

    // console.log('dialogButtons:', Object.keys(DialogButton).filter((item) => { return isNaN(Number(item)) }));
    // console.log('dialogButtons:', Object.values(DialogButton).filter((item) => { return this.checkButtons(Number(item)) }).map(p => p as DialogButton));
    // console.log('dialogButtons:', Object.values(DialogButton).filter((item) => { return this.checkButtons(Number(item)) && (Number(item) != 0 && (Number(item) & (Number(item) - 1)) == 0) }).map(p => DialogButton[p]));
  }

  public getDialogButtons(): DialogButton[] {
    return Object.values(DialogButton).filter((item) => {
      return this.checkExistButtons(Number(item)) // check in selected dialogButtons list
        && (Number(item) != 0 && (Number(item) & (Number(item) - 1)) == 0) // check single values
    }).map(p => p as DialogButton);
  }

  public getDialogButtonName(buttonType: DialogButton): string {
    return DialogButton[buttonType];
  }

  public get DialogButton() {
    return DialogButton; 
  }

  public get DialogType() {
    return DialogType; 
  }

  public checkExistButtonInSource(soureceButtons: DialogButton, buttonType: DialogButton) : boolean
  {
    return buttonType === (soureceButtons & buttonType);
  }

  public checkSingleValue(soureceButtons: DialogButton) : boolean
  {
    return (Number(soureceButtons) != 0 && (Number(soureceButtons) & (Number(soureceButtons) - 1)) == 0);
  }

  private checkExistButtons(buttonType: DialogButton) : boolean
  {
    return buttonType === (this.dialogButtons & buttonType);
  }

  protected onClick(clickButton: DialogButton): void {
    switch (clickButton) {

      case DialogButton.No:
        this.dialogRef.close(DialogResult.No);
        break;
      case DialogButton.Yes:
        this.dialogRef.close(DialogResult.Yes);
        break;
      case DialogButton.Cancel:
        this.dialogRef.close(DialogResult.Cancel);
        break;
      case DialogButton.OK:
        this.dialogRef.close(DialogResult.OK);
        break;
      case DialogButton.Abort:
        this.dialogRef.close(DialogResult.Abort);
        break;
      case DialogButton.Retry:
        this.dialogRef.close(DialogResult.Retry);
        break;
      case DialogButton.Ignore:
        this.dialogRef.close(DialogResult.Ignore);
        break;
      case DialogButton.Confirm:
        this.dialogRef.close(DialogResult.Confirm);
        break;
      default:
        this.dialogRef.close(DialogResult.None);
        break;
    }
  }
}
