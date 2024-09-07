import { ContainerGrid } from "@/components/container";
import { TitleSection } from "@/components/title-section";

export default function Home() {
  return (
    <>
      <section>
        <ContainerGrid>
          <TitleSection
            title={'Coleções notáveis'}
            subtitle={'Destaque em Coleções'}
          />
        </ContainerGrid>
      </section>
    </>
  );
}
