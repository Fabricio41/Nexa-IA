import { NextRequest, NextResponse } from 'next/server';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase.js';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { nome, whatsapp, empresa } = data;

    if (!nome || !whatsapp || !empresa) {
      return NextResponse.json({ error: 'Dados incompletos' }, { status: 400 });
    }

    await addDoc(collection(db, 'leads'), {
      nome,
      whatsapp,
      empresa,
      createdAt: Timestamp.now(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao salvar lead:', error);
    return NextResponse.json({ error: 'Falha ao salvar lead' }, { status: 500 });
  }
}
