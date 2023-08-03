import { FileUpload } from "./types"

const baseUrl =
  "https://cloud-api.yandex.net/v1/disk/resources/upload?path="
const token = import.meta.env.VITE_APP_TOKEN

export const uploadFile = (
  file: File,
  func: React.Dispatch<React.SetStateAction<FileUpload[]>>
) => {
  const url = baseUrl + file.name

  fetch(url, {
    headers: {
      Authorization: token,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      if (!json.href) {
        func((msgs) => [
          { file: file, isUploaded: false },
          ...msgs,
        ])
        return
      }
      const body = new FormData()
      body.append("file", file)
      fetch(json.href, { method: "PUT", body }).then(() =>
        func((msgs) => [
          { file: file, isUploaded: true },
          ...msgs,
        ])
      )
    })
}
