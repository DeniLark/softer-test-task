export type FileUpload = {
  file: File
  isUploaded: boolean
}

export interface IProgressMessageProps {
  file: FileUpload
}

export interface IInputFilesProps {
  setProgressMsg: React.Dispatch<
    React.SetStateAction<string>
  >
  setFilesUpload: React.Dispatch<
    React.SetStateAction<FileUpload[]>
  >
}
