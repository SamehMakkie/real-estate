// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const results = [
  {
    id: "1",
    shortAddress: "123 Main St",
    fullAddress: "123 Main St",
    city: "Famagusta",
    numOfBedrooms: 3,
    numOfBathrooms: 2,
    propertySize: 150,
    lotSize: 0,
    price: 40000,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: "2",
    shortAddress: "123 Main St",
    fullAddress: "123 Main St",
    city: "Famagusta",
    numOfBedrooms: 2,
    numOfBathrooms: 1,
    propertySize: 200,
    lotSize: 300,
    price: 50000,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: "3",
    shortAddress: "123 Main St",
    fullAddress: "123 Main St",
    city: "Famagusta",
    numOfBedrooms: 5,
    numOfBathrooms: 3,
    propertySize: 200,
    lotSize: 300,
    price: 70000,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: "4",
    shortAddress: "123 Main St",
    fullAddress: "123 Main St",
    city: "Famagusta",
    numOfBedrooms: 5,
    numOfBathrooms: 3,
    propertySize: 200,
    lotSize: 300,
    price: 70000,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: "5",
    shortAddress: "123 Main St",
    fullAddress: "123 Main St",
    city: "Famagusta",
    numOfBedrooms: 5,
    numOfBathrooms: 3,
    propertySize: 200,
    lotSize: 300,
    price: 70000,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: "6",
    shortAddress: "123 Main St",
    fullAddress: "123 Main St",
    city: "Famagusta",
    numOfBedrooms: 3,
    numOfBathrooms: 2,
    propertySize: 150,
    lotSize: 0,
    price: 40000,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: "7",
    shortAddress: "123 Main St",
    fullAddress: "123 Main St",
    city: "Famagusta",
    numOfBedrooms: 2,
    numOfBathrooms: 1,
    propertySize: 200,
    lotSize: 300,
    price: 50000,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: "8",
    shortAddress: "123 Main St",
    fullAddress: "123 Main St",
    city: "Famagusta",
    numOfBedrooms: 5,
    numOfBathrooms: 3,
    propertySize: 200,
    lotSize: 300,
    price: 70000,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: "9",
    shortAddress: "123 Main St",
    fullAddress: "123 Main St",
    city: "Famagusta",
    numOfBedrooms: 5,
    numOfBathrooms: 3,
    propertySize: 200,
    lotSize: 300,
    price: 70000,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: "10",
    shortAddress: "123 Main St",
    fullAddress: "123 Main St",
    city: "Famagusta",
    numOfBedrooms: 5,
    numOfBathrooms: 3,
    propertySize: 200,
    lotSize: 300,
    price: 70000,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80",
  },
];

type Data = {
  id: string;
  shortAddress: string;
  fullAddress: string;
  city: string;
  numOfBedrooms: number;
  numOfBathrooms: number;
  propertySize: number;
  lotSize: number;
  price: number;
  img: string;
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == "GET") {
    res.status(200).send(results);
  }
}
