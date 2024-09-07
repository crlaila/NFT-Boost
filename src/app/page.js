import { CardNFT } from "@/components/card-nft";
import { ContainerGrid } from "@/components/container";
import ImageNft01 from '@/assets/nfts/01.jpg';
import ImageNft02 from '@/assets/nfts/02.jpg';
import ImageNft03 from '@/assets/nfts/03.jpg';
import ImageNft04 from '@/assets/nfts/04.jpg';


export default function Home() {
  return (
    <>
      <ContainerGrid>
        <CardNFT
          thumbnail={ImageNft01}
          name='Cat #221'
          price='0.0721'
          price_brl='R$ 602,02'
        />
      </ContainerGrid>
    </>
  );
}
