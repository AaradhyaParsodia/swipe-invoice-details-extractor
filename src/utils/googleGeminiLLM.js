import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

/**
 * 
 * @param {String} textContent - The Text Content of Invoice pdf 
 * @description - Uses gemini-1.5-flash by utilizing langchain.js to extract customer details, products, and total amount
 * @returns - A string containing Customer Details, Products, and Total Amount  
 */
export async function getDetailsGoogleGeminiAPI(textContent) {
    try {

        // Check for API key
        if(!process.env.GOOGLE_AI_STUDIO_API_KEY){
            console.error("Please Enter a valid API key in the .env file");
            return;
        }

        // Initialized gemini model
        const llm = new ChatGoogleGenerativeAI({
            model: "gemini-1.5-flash",
            temperature: 0.4,
            maxOutputTokens: 8192,
            // maxRetries: 2,
            apiKey: process.env.GOOGLE_AI_STUDIO_API_KEY,
        });

        // Created a custom prompt for a better output
        const prompt = ChatPromptTemplate.fromMessages([
            [
                "system",
                `You are a helpful assistant who can extract specific details from an invoice PDF. The text of the PDF will be provided by the user's query. Your task is to extract and please return the following information from it:
                Customer Details: this field must contain the customer details such as bank details and name of customer if present in the text,
                Products: this field must contain the all the products prresent in invoice with its details including individual amount if multiple items are there remember that one product should be in one line and other should start from other line in case of multiple including minute details like rate: , quantity: if present,
                Total Amount: including currency,
                Make sure to return a clean string at the end that does not contain any newline characters (<0x7D>), and customer details must consist of billing and shipping addresses and all necessary details of customers. Same for products too, and remember, do not return a JSON format, and each point starts with a new line.`
            ],
            ["human", "{input}"],
        ]);

        // Including the prompt into the chain pipeline of langchain framework
        const chain = prompt.pipe(llm);

        // Finally invoking the model using text content
        const aiResponse = await chain.invoke({
            input: textContent,
        });

        return aiResponse.content;

    } catch (error) {
        // Handling the error which can occure during API call 
        console.log(`Error in the googleGeminiLLM.js getDetailsGoogleGeminiAPI function ${error}`);
    }
}
