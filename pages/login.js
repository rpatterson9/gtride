import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import tw from "tailwind-styled-components";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";


const Login = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, []);

  return (
    <Wrapper>
  <Heading color="lightblue" letterSpacing={8} >GTMFRide!</Heading>
      <TopSection>
        <Text>Log in to access yor account</Text>
        <SignInButton onClick={() => signInWithPopup(auth, provider)}>
          Sign in with Google
        </SignInButton>
      </TopSection>
    </Wrapper>
  );
};

export default Login;

const Wrapper = tw.div`
flex flex-col h-screen w-screen bg-gray-200 p-4   items-center
`;

const UberLogo = tw.img`
h-8 object-contain 
`;

const TopSection = tw.div`
flex  flex-col flex-grow items-center
`;

const Title = tw.div`
text-5xl pt-4 text-gray-500
`;
const HeadImage = tw.img`
obejct-contain w-1/2 
`;
const SignInButton = tw.button`
bg-black text-white text-center py-6 mt-8 rounded-md self-center w-full cursor-pointer w-48
`;
