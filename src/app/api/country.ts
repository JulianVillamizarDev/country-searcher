import { NextRequest, NextResponse } from "next/server";
import data from '@/utils/data.json';
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    return res.status(200).json({countries: data});
}