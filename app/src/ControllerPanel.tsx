import { Box, Link, Text, Image, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import design2 from "./assets/controller/design2.png";
// import design1 from "./assets/controller/design1.png";
// import design2 from "./assets/controller/design2.png";
// import shapehapticsgif1 from "./assets/controller/shapehapticsgif1.gif";
// import shapehapticsgif2 from "./assets/controller/shapehapticsgif2.gif";
// import shapehapticsgif3 from "./assets/controller/shapehapticsgif3.gif";
// import interface from "./assets/controller/interface.png";
// import mechanism from "./assets/controller/mechanism.png";
import { namespaces } from "./i18n/i18n.constants";

export const ControllerPanel = () => {
  const { t } = useTranslation(namespaces.pages.controller);

  return (
    <VStack maxW="70%" spacing={"3rem"} fontSize={"2rem"} align="center">
      <Box>
        {/* <Image maxW="80%" src={design1} /> */}
        <Text fontSize="1.5rem" mb={"1rem"}>
          {t("para0")}
        </Text>
        <Image maxW="80%" src={design2} />
        <Text fontSize="1.5rem" mb={"1rem"}>
          {t("para1")}
        </Text>
        {/* <Image maxW="80%" src={shapehapticsgif1} /> */}
        {/* <Image maxW="80%" src={shapehapticsgif2} /> */}
        {/* <Image maxW="80%" src={shapehapticsgif3} /> */}
        <Text fontSize="1.5rem" mb={"1rem"}>
          {t("para2")}
        </Text>
        {/* <Image maxW="80%" src={interface} /> */}
        {/* <Image maxW="80%" src={mechanism} /> */}
        <Text fontSize="1.5rem" mb={"1rem"}>
          {t("para3")}
        </Text>
        <Text fontSize="1.5rem" mb={"1rem"}>
          {t("para4")}
        </Text>
        <Link
          color="blue"
          href="https://clementzheng.info/Shape-Haptics"
          isExternal
        >
          <Text fontSize="1.5rem" mb={"1rem"}>
            https://clementzheng.info/Shape-Haptics
          </Text>
        </Link>
      </Box>
    </VStack>
  );
};
