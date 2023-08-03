import { FC, useState } from "react"

import { FileUpload } from "./UploadFiles/types"

import "./App.css"
import UploadFiles from "./UploadFiles"
import ProgressMessage from "./ProgressMessage"

const App: FC = () => {
  const [progressMsg, setProgressMsg] = useState<string>(
    "Ничего не выбрано"
  )

  const [filesUpload, setFilesUpload] = useState<
    FileUpload[]
  >([])

  return (
    <>
      <div className="info">
        <h3 className="info__title">Выберите файлы</h3>
        <p className="info__subtitle">
          Минимум: 1, Максимум: 100
        </p>
      </div>

      <div className="actions">
        <UploadFiles
          setFilesUpload={setFilesUpload}
          setProgressMsg={setProgressMsg}
        />
      </div>

      <div className="progress-message">
        {progressMsg}
        <div>
          {filesUpload.map((m, i) => (
            <ProgressMessage file={m} key={i} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
