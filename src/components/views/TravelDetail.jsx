import React from "react";
import { Box } from "@mui/system";
import products from "../../app/api/products";
import SwiperCities from "./SwiperCities";
import { useParams } from "react-router-dom";
import HeroDetail from "./HeroDetail";
import PlanTravel from "./PlanTravel";

const TravelDetail = () => {
  const { slug, name } = useParams();
  const result = products.find((item) => item.name === name);
  const data = result.items.find((item) => item.slug === slug);

  return (
    <div>
      <div key={result.id}>
        <HeroDetail
          textHero={data.name}
          subtextHero={data.excerpt}
          srcHero={result.image}
          variantHero="h4"
        />
      </div>
      <Box mt={3} ml={3}>
        <SwiperCities slidesPerView={4.5} category="Experiencias" />
      </Box>
      {/* Próximos Eventos */}
      <Box mt={3} ml={3}>
        <SwiperCities slidesPerView={4.5} category="Próximos Eventos" />
      </Box>

      <Box mt={3} ml={3}>
        <SwiperCities slidesPerView={3.5} category="Canales" />
      </Box>
      <Box my={3} ml={3}>
        <SwiperCities slidesPerView={4.5} category="Ciudades" />
      </Box>
      <PlanTravel />
    </div>
  );
};

export default TravelDetail;
