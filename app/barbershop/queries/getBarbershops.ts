import { Ctx } from "blitz"
import db from "db"

export default async function getBarbershops(_ = null, { session }: Ctx) {
  return await db.barberShop.findMany()
}
