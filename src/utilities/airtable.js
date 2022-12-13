import Airtable from "airtable";

Airtable.configure({
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY
});

const base = Airtable.base(process.env.REACT_APP_AIRTABLE_BASE_ID)

const table = base(process.env.REACT_APP_AIRTABLE_TABLE_NAME)

export { table }