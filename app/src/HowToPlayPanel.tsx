import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import overview from "./assets/howToPlay/overview.png";
import { namespaces } from "./i18n/i18n.constants";

export function HowToPlayPanel() {
  const { t } = useTranslation(namespaces.pages.howto);

  return (
    <VStack maxW="70%" spacing={"3rem"} fontSize={"2rem"} align="center">
      <Box>
        <Image maxW="60%" src={overview} />
        <Text mb={"1rem"} fontSize="1.5rem">
          {t("para0")}
        </Text>
        <Text mb={"1rem"} fontSize="1.5rem">
          {t("para1")}
        </Text>
        <Text mb={"1rem"} fontSize="1.5rem">
          {t("para2")}
        </Text>
        {/* playing1.gif */}
        {/* playing2.gif */}
        <Text mb={"1rem"} fontSize="1.5rem">
          {t("inputs")}
        </Text>
        <Text mb={"1rem"} fontSize="1.5rem">
          {t("para3")}
        </Text>
        {/* iconCut.png */}
        <Text mb={"1rem"} fontSize="1.5rem">
          {t("cut")}
        </Text>
        {/* cut.gif */}
        {/* iconKnead.png */}
        <Text mb={"1rem"} fontSize="1.5rem">
          {t("knead")}
        </Text>
        {/* knead.gif */}
        {/* iconFill.png */}
        <Text mb={"1rem"} fontSize="1.5rem">
          {t("fill")}
        </Text>
        {/* fill.gif */}
        {/* iconSprinkle.png */}
        <Text mb={"1rem"} fontSize="1.5rem">
          {t("sprinkle")}
        </Text>
        {/* sprinkle.gif */}
        {/* iconBake.png */}
        <Text mb={"1rem"} fontSize="1.5rem">
          {t("bake")}
        </Text>
        {/* bake.gif */}
        <Text mb={"1rem"} fontSize="1.5rem">
          {t("recipes")}
        </Text>
        <Text mb={"1rem"} fontSize="1.5rem">
          {t("para4")}
        </Text>
      </Box>
    </VStack>
  );
}
