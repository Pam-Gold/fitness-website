import { Box, Flex, Heading, Text, Img, Button } from "@chakra-ui/react";

import reviewDb from "../data/reviewDb";

import "../assets/icons/fontawesome/css/fontawesome.min.css";
import "../assets/icons/fontawesome/css/all.min.css";

import { useState } from "react";

const Review = () => {

  const reviewButtonStyles = {
    pos:'absolute',
    h:'50px',
    w:'50px',
    borderRadius:'50%',
    bg:'red.400',
    top:'45%',
    fontSize:'1.5rem',
    color:'white'
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === reviewDb.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? reviewDb.length - 1 : prevIndex - 1
    );
  };


 console.log(reviewDb[0].userName)
  return (
    <Flex h={{base:'300px', sm:'300px', md:'300px', lg:'400px', xl:'400px'}} w="100%" flexDirection="column" align="flex-start" justify="center" p="10px" pos="relative" bg="white" borderRadius="10px"  rowGap="40px">
      <Flex align="center" columnGap="15px">
        <Img src={reviewDb[currentIndex].img} h="100px" w="100px" borderRadius="50%" />
        <Flex flexDirection="column" rowGap="15px">
          <Heading fontSize="1.65rem">{reviewDb[currentIndex].userName}</Heading>
          <Text fontSize="1rem">{reviewDb[currentIndex].userTag}</Text>
        </Flex>
      </Flex>

      {}
      <Text fontSize="1rem">{reviewDb[currentIndex].comment}</Text>

      <Button onClick={handlePrevious} sx={reviewButtonStyles} left="10px"><i className="fa-solid fa-arrow-left"></i></Button>
      <Button onClick={handleNext} sx={reviewButtonStyles} right="10px"><i className="fa-solid fa-arrow-right"></i></Button>
    </Flex>
  );
};

export default Review;
