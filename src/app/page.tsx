'use client'


import { Main } from "@/components/Main"
import { ImcProvider, useImc } from "@/contexts/ImcContext"

const Page = () => {
  const imcCtx = useImc();

  return (
      <ImcProvider>
        <Main />
      </ImcProvider>
  )
}


export default Page
