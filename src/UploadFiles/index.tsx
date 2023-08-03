import { FC, useRef } from "react"

import { uploadFile } from "./Api"
import { IInputFilesProps } from "./types"

const limitFiles = 100

const UploadFiles: FC<IInputFilesProps> = ({
  setProgressMsg,
  setFilesUpload,
}) => {
  const inputFiles = useRef<HTMLInputElement>(null)

  const handlerInputFiles = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFiles = e.target.files
    let countSelectedFiles = selectedFiles
      ? selectedFiles.length
      : 0
    const message =
      `Выбранно файлов: ${countSelectedFiles}.` +
      (countSelectedFiles > limitFiles
        ? ` Количество сокращено до лимитного значения(${limitFiles})`
        : "")

    countSelectedFiles = Math.min(
      countSelectedFiles,
      limitFiles
    )

    setProgressMsg(message)
    setFilesUpload([])

    for (let i = 0; i < countSelectedFiles; i++) {
      const file = selectedFiles?.item(i)
      file && uploadFile(file, setFilesUpload)
    }
  }

  return (
    <>
      <button
        className="actions__btn"
        onClick={() => inputFiles.current?.click()}
      >
        Выбрать
      </button>

      <input
        ref={inputFiles}
        onChange={handlerInputFiles}
        type="file"
        multiple
        style={{ display: "none" }}
      />
    </>
  )
}

export default UploadFiles
