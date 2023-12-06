import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";
import { auth } from "../firebase";
import { useRouter } from "next/router";

import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  Box,
  Heading,
  Center,
  Flex,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";
export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        });
        console.log(user);
      } else {
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <><Map /><Wrapper>


      <br />  <br />

      <ActionItems>
        <Header>
          <Heading
            color={"lightblue"}
            letterSpacing={8}

          >GTMFRide </Heading>
          <Profile>
            <Name>{user && user?.name}</Name>
            <UserImage
              src={user && user?.photoUrl}
              onClick={() => signOut(auth)}
            ></UserImage>
          </Profile>
        </Header>
        <br />  <br />  <br />

        <Link href="/search">
          <Center>
            <Button
              w="300px"

              onClick={() => router.push("/search")}>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </Button>
          </Center>
        </Link>

      </ActionItems>
    </Wrapper></>
  );
}

const Wrapper = tw.div`
flex flex-col bg-black
`;

const ActionItems = tw.div`
flex-1 p-4
`;

const Header = tw.div`
flex justify-between items-center bg-black
`;

const ActionButtons = tw.div`
flex
`;

const UberLogo = tw.img`
h-28
`;

const Profile = tw.div`
flex
`;

const Name = tw.div`
w-20 mr-4 text-sm
`;

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px
`;

const ActionButton = tw.div`
h-32 bg-gray-200 m-1 flex-1 flex flex-col items-center rounded-lg justify-center text-xl font-medium
`;

const ActionButtonImage = tw.img`
h-3/5
`;
