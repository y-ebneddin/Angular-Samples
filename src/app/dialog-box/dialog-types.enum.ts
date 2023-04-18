 
export enum DialogType
{
  Info,
  Warning,
  Error,
  Confirm
}
  
export enum DialogButton {
  Yes = 1 << 1,
  No = 1 << 2,
  Cancel = 1 << 3,
  Abort = 1 << 4,
  Retry = 1 << 5,
  Ignore = 1 << 6,
  OK = 1 << 7,
  YesNo = Yes | No,
  YesNoCancel = Yes | No | Cancel,
  OkCancel = OK | Cancel
}

export enum DialogResult {
  None,
  Yes,
  No,
  Cancel,
  Abort,
  Retry,
  Ignore,
  OK
}
  