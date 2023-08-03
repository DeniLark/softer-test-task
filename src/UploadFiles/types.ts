export type FileUpload = {
  file: File
  isUploaded: boolean
}

export interface IProgressMessageProps {
  file: FileUpload
}

export interface IInputFilesProps {
  limitFiles: number
  setProgressMsg: React.Dispatch<
    React.SetStateAction<string>
  >
  setFilesUpload: React.Dispatch<
    React.SetStateAction<FileUpload[]>
  >
}
