// import { accessToken } from "mapbox-gl";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import RideSelector from "./components/RideSelector";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";




const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickUpCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const getPickUpCoordinates = () => {
    const pickUp = pickup ?? "Santa Monica";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickUp}.json?` +
      new URLSearchParams({
        access_token:
        "pk.eyJ1Ijoicm9icDkxMTEiLCJhIjoiY2xoYjBtb2duMGJ4azNkazRxeTVpNTN6YyJ9.2uMLBPyRsyiLyhcHVBQYyQ",
        limit: 1,
      })
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoodrinates = () => {
    const dropOff = dropoff ?? "Los Angeles";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?` +
      new URLSearchParams({
        access_token:
          "pk.eyJ1IjoibmF6YXJpeTE5OTUiLCJhIjoiY2t2bGlmdW12MHZlcDJ1bzA5OHh3NDIxeCJ9.li8l-1u52aCFd2ZdW-1IaA",
        limit: 1,
      })
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    if (pickup && dropoff) {
      getPickUpCoordinates(pickup);
      getDropoffCoodrinates(dropoff);
    }
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/search" passHref>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
    
      <Map style={{ width: "100vw", height: "600px" }}  
        pickUpCoordinates={pickUpCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
 
      <ConfirmRideContainer>
        <RideSelector
          pickUpCoordinates={pickUpCoordinates}
          dropoffCoordinates={dropoffCoordinates}
        />
 
          <Button
            w="100vw"
            bg="lightblue"
            color="blue"

            borderRadius={20}
            h="100px"
            onClick={() => {
              alert("Gimme that pussy!!!!");
              router.push("https://thugorgy.com");
            }}


          >Confirm GTMFP</Button>
 
      </ConfirmRideContainer>
      {/* Confirm Ride Button */}
    </Wrapper>
  );
};

export default Confirm;

const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-gray.500   cursor-pointer
`;

const BackButton = tw.img`
h-full object-contain 
`;

const ConfirmButton = tw.div`
bg-black text-white text-center py-4 mx-4 my-4 text-xl rounded-xl
`;

const ConfirmButtonContainer = tw.div`
border-t-2
`;

const ConfirmRideContainer = tw.div`
flex-1 flex flex-col 
`;

const Wrapper = tw.div`
h-screen flex flex-col
`;
