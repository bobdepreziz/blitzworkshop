import { Ctx } from "blitz"
import db from "../../../db"

export default async function addBarbershop(name: string) {
  return await db.barberShop.create({
    data: {
      name,
    },
  })
}
