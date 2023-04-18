export enum DialogType {
  Info,
  Warning,
  Error,
  Confirm,
}

// *******************************************************************************************************************
//  You can use hybrid buttons in code. Ex.: { dialogButtons: DialogButton.Abort | DialogButton.Retry }
// *******************************************************************************************************************
export enum DialogButton {
  Yes = 1 << 1,
  No = 1 << 2,
  OK = 1 << 3,
  Cancel = 1 << 4,
  Abort = 1 << 5,
  Retry = 1 << 6,
  Ignore = 1 << 7,
  Confirm = 1 << 8,

  YesNo = Yes | No,
  YesNoCancel = Yes | No | Cancel,
  OkCancel = OK | Cancel,
  AbortIgnore = Abort | Ignore,
  AbortRetryIgnore = Abort | Retry | Ignore,
}

// *******************************************************************************************************************
//  DialogResult.None : Not selected any button
//  I think, DialogResult are not the same as DialogButton because some of buttons are the same meaning
//  OK => OK, Yes, Confirm
// *******************************************************************************************************************
export enum DialogResult {
  None,
  Yes,
  No,
  OK,
  Cancel,
  Abort,
  Retry,
  Ignore,
  Confirm,
}
