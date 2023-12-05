import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
 


const carList = [
  {
    "imgUrl": "https://i.ibb.co/cyvcpfF/gtmfpX.png",
    "service": "gtmfpX",
    "multiplier": 1
  },
  {
    "imgUrl": "https://i.ibb.co/YDYMKny/gtmfpXl.png",
    "service": "gtmfpXL",
    "multiplier": 1.5
  },
  {
    "imgUrl": "https://i.ibb.co/Xx4G91m/uberblack.png",
    "service": "bbcX",
    "multiplier": 2
  },
  {
    "imgUrl": "https://i.ibb.co/cyvcpfF/gtmfpX.png",
    "service": "cuntfortX",
    "multiplier": 1.2
  },
  {
    "imgUrl": "https://i.ibb.co/1nStPWT/uberblacksuv.png",
    "service": "Black SUV",
    "multiplier": 2.8
  }
]

const RideSelector = (props) => {
  const [duration, setDuration] = useState(0);

  const getDirections = (pickUpCoordinates, dropoffCoordinates) => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickUpCoordinates[0]},${pickUpCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibmF6YXJpeTE5OTUiLCJhIjoiY2t2bGlmdW12MHZlcDJ1bzA5OHh3NDIxeCJ9.li8l-1u52aCFd2ZdW-1IaA",
        })
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log
        setDuration(data.routes[0].duration);
      });
  };

  useEffect(() => {
    if (props.pickUpCoordinates && props.dropoffCoordinates) {
      getDirections(props.pickUpCoordinates, props.dropoffCoordinates);
    }
  }, [props.pickUpCoordinates, props.dropoffCoordinates]);

  return (
    <Wrapper>
      <Title>Choose a ride, or gimme that mf TRIM!</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5 min away</Time>
            </CarDetails>
            <Price>${((duration / 100) * car.multiplier).toFixed(2)}</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const Price = tw.div`
text-sm
`;

const Time = tw.div`
text-xs text-blue-500
`;

const Service = tw.div`
font-medium
`;

const CarDetails = tw.div`
flex-1
`;

const CarImage = tw.img`
h-14 mr-4
`;

const Car = tw.div`
flex items-center p-4
`;

const CarList = tw.div`
flex-1  overflow-y-scroll no-scrollbar
`;

const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`;

const Wrapper = tw.div`
flex flex-col overflow-y-scroll no-scrollbar
`;
