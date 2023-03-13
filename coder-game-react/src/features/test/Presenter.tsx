import { useEffect, useState } from 'react';
import * as xlsx from "xlsx";

export default function Main() {
    const [file, setFile] = useState<File>()

    const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.files![0];
        setFile(value);
    };

    const onClickUpload = () => {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
            const data = e.target!.result;
            const workbook = xlsx.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = xlsx.utils.sheet_to_json(worksheet);
            console.log(json);

        };
        reader.readAsArrayBuffer(file!);
    }

    return (
        <main>
            <input
                type="file"
                name="uploadfile"
                onChange={onChangeFile}
                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            />
            <input type="button" value="Upload" onClick={onClickUpload} />
        </main>
    )
}
