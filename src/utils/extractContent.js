import PDFParser from "pdf2json";
// pdf2json is used to deal with the pdf's

/**
 * 
 * @param {String} filePath - file location in string format
 * @description - function focuses on the extracting the text content from pdf's regard less of the tabular or image type
 * @returns - A string containing the whole pdf's content well formatted
 */
export async function extractText(filePath) {
    const pdfParser = new PDFParser(this, true);    //initialized the library

    try {
        return new Promise((resolve, reject) => {   // returning the promise for text data
            let text = '';

            pdfParser.on("pdfParser_dataError", (errData) => {
                reject(errData.parserError);    //Error Handler
            });     

            pdfParser.on("pdfParser_dataReady", (pdfData) => {
                text += (pdfParser.getRawTextContent());
                // console.log(text);
                resolve(text);  //sending the text if the data is ready
            });  

            pdfParser.loadPDF(filePath);    //loading the pdf using pdf2json library
        });
    } catch (err) {
        `Error in the textExtraction.js textExtraction function ${err}`
    }

}