import { extractText, getDetailsGoogleGeminiAPI } from "./src/utils/index.js";
import "dotenv/config";

/** 
 * @param {string} filePath - The path of the pdf file (invoice) location locally
 * @description This function preforms basically two tasks which is extracting the content from the pdf and use a llm ai's api for getting desired output
**/
async function main(filePath) {
    try {
        // Extract the whole text content from the provided pdf file location
        const pdfTextContent = await extractText(filePath);

        // Use Google's Gemini API (internally using langchain.js) for getting the desired output.
        const detailsResult = await getDetailsGoogleGeminiAPI(pdfTextContent);
        
        // Logging the output on the console (CLI)
        console.log(detailsResult);

    } catch (error) {
        // Handling the unexpected error
        console.log(`Error in the index.js main function ${error}`);
    }
}

// getting the custom path for performing the extraction task from command line arguments.
const filePath = process.argv[2];

// making sure to pass a default path if user does not provide one
// Ensure a default path is used if no argument is provided.
if (!filePath || typeof filePath !== 'string') {
    
    console.warn('No file path provided; using default path.');
    
    await main('./src/assets/Sample Invoice.pdf');
} else {
    await main(filePath);
}