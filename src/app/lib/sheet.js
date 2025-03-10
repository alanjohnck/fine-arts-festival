// src/app/lib/sheet.js
import { google } from 'googleapis';

export async function getSheetData() {
  try {
    // Configure auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    // Get data from Google Sheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range: 'Points!A2:D', // Adjust range based on your sheet structure
    });

    const rows = response.data.values;
    
    if (!rows || rows.length === 0) {
      return [];
    }

    // Convert sheet data to structured format
    return rows.map((row) => ({
      id: row[0],
      name: row[1],
      points: parseInt(row[2], 10),
    }));
  } catch (error) {
    console.error('Google Sheets API Error:', error);
    throw new Error('Failed to fetch data from Google Sheets');
  }
}