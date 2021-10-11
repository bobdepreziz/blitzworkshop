import React, { useEffect, useState } from "react"
import { useMutation, useQuery } from "blitz"
import getBarbershops from "../barbershop/queries/getBarbershops"
import addBarbershop from "../barbershop/mutations/addBarbershop"

export default function Barbershop() {
  const [newBarbershop, setNewBarbershop] = useState("")
  const [barbershops, { isLoading, refetch }] = useQuery(getBarbershops, null, { suspense: false })
  const [addNewBarbershop, { data }] = useMutation(addBarbershop)

  useEffect(() => {
    if (data) {
      refetch()
    }
  }, [data])

  if (isLoading) {
    return <div>Barbershops are loading</div>
  } else {
    return (
      <div>
        <h1>Barbershop</h1>
        <ul>
          {barbershops?.map((shop) => (
            <li key={shop.id}>{shop.name}</li>
          ))}
        </ul>
        <br />
        <form>
          <input
            onChange={(event) => {
              setNewBarbershop(event.target.value)
            }}
            name={"barbershopName"}
          />
          <button
            disabled={newBarbershop === ""}
            onClick={(e) => {
              e.preventDefault()
              addNewBarbershop(newBarbershop)
            }}
          >
            Add barbershop
          </button>
        </form>
        <hr />
        <h1>Appointments</h1>
        <select>{/*  {barbershops?.map(shop => )}*/}</select>
      </div>
    )
  }
}
