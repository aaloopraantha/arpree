import {qrSvg} from '../../../lib/upi-qr';
export const dynamic='force-dynamic';
export const runtime='nodejs';
const headers={'Cache-Control':'no-store, max-age=0','X-Content-Type-Options':'nosniff'};
export async function GET(request){
 const raw=new URL(request.url).searchParams.get('amount')||'';
 if(!/^\d{2,6}$/.test(raw)||Number(raw)<69||Number(raw)>100000)return Response.json({error:'Invalid contribution amount'},{status:400,headers});
 const upi=process.env.ARPREE_UPI_ID?.trim(),name=process.env.ARPREE_UPI_PAYEE?.trim();
 if(!upi||!name||! /^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+$/.test(upi))return Response.json({error:'Payments are temporarily unavailable'},{status:503,headers});
 const amount=Number(raw),uri='upi://pay?pa='+encodeURIComponent(upi)+'&pn='+encodeURIComponent(name)+'&am='+amount.toFixed(2)+'&cu=INR&tn='+encodeURIComponent('Arpree coffee contribution');
 const qr='data:image/svg+xml;base64,'+Buffer.from(qrSvg(uri)).toString('base64');
 return Response.json({uri,qr,name,amount},{headers});
}
