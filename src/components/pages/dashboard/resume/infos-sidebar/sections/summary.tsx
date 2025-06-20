import { ScrollText } from "lucide-react"
import { SectionTitle } from "../section-title"
import { Controller, useFormContext } from "react-hook-form"
import { Editor } from "@/components/ui/editor";

export const SummarySection = () => {
    const {control} = useFormContext();
    return(
        <div>
            <SectionTitle title="Sobre você" icon={ScrollText}/>
            <Controller
            control={control}
            name="content.summary"
            render={({field})=>(
                <Editor {...field} />
            )}
            />
        </div>
    )
}