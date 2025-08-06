import { google } from 'googleapis';

export async function GET() {
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT!),
    scopes: ['https://www.googleapis.com/auth/drive.metadata.readonly'],
  });

  const drive = google.drive({ version: 'v3', auth });

  const spreadsheetId = process.env.GOOGLE_SPREAD_SHEET_ID;

  const file = await drive.files.get({
    fileId: spreadsheetId,
    fields: 'modifiedTime',
  });

  return new Response(
    JSON.stringify({ modifiedTime: file.data.modifiedTime }),
    { status: 200 }
  );
}
