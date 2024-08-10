# Invoice Details Extractor
Looking for an automated solution to find relevant details from an invoice pdf? <br>
Yes, automated details finder/extractor. This tool is made possible using the Javascript program made top of that using Node.js (for runtime environments) and Google's Gemini AI API..

## Description
It is a well-defined structured program for finding the details of the customer, product, and total amount for quick access using the pdf (invoice) given by the user, and it is made possible using pdf content extraction and using Langchain.js for the connectivity of Google Gemini AI API to extract the final details from huge data information in the invoice pdf.
<br>
Where will it be useful?
To quickly find relevant details of the customer, product, and total amount using the generative AI and making it LLM independent using langchain.js, and these information can be used at the stores, etc., this is one use case. There are n number of cases out there.

## Getting Started

### Requirement
Please, before going ahead, make sure you have a node.JS is installed on your device, and you do have a few pdfs for testing purposes and, most importantly, a Google Gemini AI API key.

### Get started

### Installation
To install this tool, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/AaradhyaParsodia/swipe-invoice-details-extractor
    ```
2. Navigate into the cloned directory:
   ```sh
   cd swipe-invoice-details-extractor
   ```

Just follow the below commands after cloning this repo into your local environment, and you are good to go.

3. Install dependencies:

    ```sh
    npm install
    ```
This command will install all the dependencies.

4. Create .env
    ```sh
    touch .env && cp .env.example .env
    ```
    Please make sure to put the key upfront.
## Usage

And you are ready to find details. How?
```sh
node index.js [path location]
```
At the path name in the CLI, please make sure to put the accurate and correct path of the input pdf file to make sure all things work fine. If path is not given then it will use a default pdf.
<br>
<br>
Example

```sh
node index.js "f://for-swipe/src/assets/Sample Invoice.pdf"
```