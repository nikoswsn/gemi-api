# gemi-api: Under Development
`gemi-api` is a TypeScript wrapper for the official GEMI API. It provides a streamlined interface for interacting with GEMI resources, including company data, metadata, and document handling. This library simplifies making requests to GEMI, allowing developers to focus on using the data rather than managing API calls and error handling.

## Features
Easy-to-use methods for interacting with GEMI API resources
Full TypeScript support with comprehensive type definitions
Modular and extensible architecture for each endpoint category
Built-in error handling and response management

## Installation
To install gemi-api, use npm:

```bash
npm install gemi-api
```

## Configuration
Set up your API configuration, including the base URL and any required headers, using the ApiConfig module.

## Example Usage

```typescript
import gemi from 'gemi-api';

gemi.init(YOUR_API_KEY)

try {
    const companyDetails = await gemi.companies.getByArGemi(arGemi);
    console.log(companyDetails);
} catch (error) {
    console.error('Error fetching company details:', error);
}
```


## Testing
To run tests, use the following command:

```bash
npm run test
```

## Contributing
Contributions are welcome! Please open issues for bugs or suggestions, and feel free to submit pull requests.

## License
This project is licensed under the MIT License.