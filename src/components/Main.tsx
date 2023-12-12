import { useImc } from "@/contexts/ImcContext";
import { CalcImc } from "./CalcImc"
import { Result } from "./Result";
import { PossibleResults } from "./PossibleResults";

export const Main = () => {
    const imcCtx = useImc();

    return (
        <div className="container mx-auto max-w-6xl max-sm:p-5 max-md:p-5 p-10 bg-white/90 md:mt-5 rounded-md">
          <div className="grid max-sm:grid-cols-1 grid-cols-2 ">
              <CalcImc />
              {imcCtx.imcValue !== 0 ? <Result imcRes={imcCtx.imcValue}/> : <PossibleResults />}
          </div>
        </div>
    )
}