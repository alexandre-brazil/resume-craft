import { UserRound } from "lucide-react";
import { SectionTitle } from "../section-title";
import { InputField } from "@/components/ui/input/field";
import { SwitchField } from "@/components/ui/switch/field";

export const BasicInfoSection = () => {
  return (
    <div>
      <SectionTitle icon={UserRound} title="Informações Básicas" />
      <div className="grid grid-cols-2 gap-4 mt-4 w-full ">
        <div className="col-span-full w-full flex gap-3 items-end">
          <InputField
            label="Foto"
            placeholder="https://..."
            name="content.image.url"
            containerClassName="w-full"
          />
          <SwitchField className="mb-2" name="content.image.visible" />
        </div>
        <InputField
          label="Nome Completo"
          placeholder="Luana Cristielle"
          name="content.infos.fullName"
          containerClassName="w-full"
        />
        <InputField
          label="Cabeçalho"
          name="content.infos.headline"
          containerClassName="w-full"
        />
        <InputField
          label="Web site"
          placeholder="luanacristielle.com.br"
          name="content.infos.website"
          containerClassName="w-full"
        />
        <InputField
          label="Telefone"
          placeholder="Ex: 931846162"
          name="content.infos.phone"
          containerClassName="w-full"
        />
        <InputField
          label="Localização"
          placeholder="Ex: Rua numero 1"
          name="content.infos.location"
          containerClassName="w-full"
        />
      </div>
    </div>
  );
};
