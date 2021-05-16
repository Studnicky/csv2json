# CSV to JSON transformer Script

## Running the project

1. Install Node.js

See https://nodejs.org

2. Install NPM packages

```bash
npm install
```

3. Set Config Options

This project accepts configuration as an `.env` file. You must create one to proceed.
You may copy `.env.example` to configure the project for the sample run.

| First Header | Second Header                                                   |
| ------------ | --------------------------------------------------------------- |
| IMPORT_PATH  | Path to CSV file import, relative to project root               |
| EXPORT_PATH  | Export directory, relative to project root, default is `output` |
| FILE_NAME    | File name prefix for file write output; default is `report`     |
| BATCH_SIZE   | Count of records to include in an output batch; default is 1000 |

4. Run the transformer script

```bash
npm start
```

5. Output will be found in the directory specified in the config

#### Note

The project includes a sample CSV in the `./spec` directory
