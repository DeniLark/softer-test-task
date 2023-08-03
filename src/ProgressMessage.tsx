import { FC } from "react"

import { IProgressMessageProps } from "./UploadFiles/types"

const ProgressMessage: FC<IProgressMessageProps> = ({
  file,
}) => {
  const classPostfix = file.isUploaded ? "success" : "error"
  const text = file.isUploaded
    ? "успешно загружен"
    : "не удалось загрузить"

  return (
    <p className={`progress-message--${classPostfix}`}>
      {file.file.name}
      &nbsp;
      {text}
    </p>
  )
}

export default ProgressMessage
