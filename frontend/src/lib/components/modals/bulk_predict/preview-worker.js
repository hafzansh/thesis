self.onmessage = (params) => {
    // @ts-ignore
    const { file, separator, decimal, hasHeaders } = params.data;
    const reader = new FileReader();
    reader.onload = (event) => {
        // @ts-ignore
        const fileContent = event.target.result;
        // @ts-ignore
        const lines = fileContent
            // @ts-ignore
            .replace(/(?:[\r])+/g, "")
            .split("\n")
            // @ts-ignore
            .map((l) => l.split(separator));
        const count = !lines.length
            ? 0
            : lines
                  // @ts-ignore
                  .map((l) => l.length)
                  .sort()
                  .reverse()[0];
        const previewLines = lines.slice(
            hasHeaders ? 1 : 0,
            hasHeaders ? 11 : 10
        );
        const headers =
            hasHeaders && lines.length
                ? lines[0]
                : Array.from(Array(count).keys()).map((i) => `Column ${i + 1}`);
        self.postMessage({ lines: previewLines, headers });
    };

    if (file && separator) reader.readAsText(file);
};