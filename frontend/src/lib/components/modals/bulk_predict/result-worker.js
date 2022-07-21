self.onmessage = ({ data }) => {
    const { file, separator, decimal, hasHeaders } = data;
    const decimalRegex = new RegExp("/" + decimal + "/g");
    const reader = new FileReader();
    reader.onload = (event) => {
        // @ts-ignore
        const fileContent = event.target.result;
        // @ts-ignore
        let lines = fileContent
            // @ts-ignore
            .replace(/(?:[\r])+/g, "")
            .split("\n")
            // @ts-ignore
            .map((l) =>
                l
                    .split(separator)
                    // @ts-ignore
                    .map((c) =>
                        isNaN(c.replace(decimalRegex, "."))
                            ? c.toLowerCase() === "null"
                                ? null
                                : c.toLowerCase() === "true"
                                ? true
                                : c.toLowerCase() === "false"
                                ? false
                                : c
                            : Number(c.replace(decimalRegex, "."))
                    )
            );
        const count = !lines.length
            ? 0
            : lines
                  // @ts-ignore
                  .map((l) => l.length)
                  .sort()
                  .reverse()[0];
        const headers =
            hasHeaders && lines.length
                ? lines[0]
                : Array.from(Array(count).keys()).map((i) => `Column ${i + 1}`);
        if (hasHeaders) lines = lines.slice(1);
        const json = lines.reduce(
            // @ts-ignore
            (memo, line) => [
                ...memo,
                line.reduce(
                    // @ts-ignore
                    (memo, column, index) => ({
                        ...memo,
                        [headers[index]]: column,
                    }),
                    {}
                ),
            ],
            []
        );
        self.postMessage(json);
    };
    if (file && separator && decimal) reader.readAsText(file);
};