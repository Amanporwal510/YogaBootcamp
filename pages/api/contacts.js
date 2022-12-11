import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
   if(req.method !== 'POST') {
      return res.status(405).jason({
         message: 'Method not allowed'
      });
   }

   const contactData = JSON.parse(req.body);

   const savedContact = await prisma.contact.create({
      data: contactData
   })

   res.json(savedContact)
}