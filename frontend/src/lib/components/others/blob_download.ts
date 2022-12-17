import papa from 'papaparse'
export const downloadBlob=(blob:Blob, name = "file.txt")=> {
    // Convert your blob into a Blob URL (a special url that points to an object in the browser's memory)
    const blobUrl = URL.createObjectURL(blob);

    // Create a link element
    const link = document.createElement("a");

    // Set link's href to point to the Blob URL
    link.href = blobUrl;
    link.download = name;

    // Append link to the body
    document.body.appendChild(link);

    // Dispatch click event on the link
    // This is necessary as link.click() does not work on the latest firefox
    link.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      })
    );

    // Remove link from body
    document.body.removeChild(link);
  }
  export const downloadCSV=(data:any) =>{
    var csv = papa.unparse(data);

    var csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    downloadBlob(csvData, 'download.csv');
  }