import { Box, Button, Container, Text, Link, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import FloatingLabelInput from '@/components/FloatingLabelInput';

const SignInPage: React.FC = () => {
  const router = useRouter();

  return (
    <Container maxW="full" height="100vh" p={0} display="flex">
      <Box width="50%" bg="white" p={8} display="flex" alignItems="center" justifyContent="center">
        <VStack spacing={4} alignItems="flex-start" width="full" maxW="sm">
        <Text fontSize="2xl"mb={2} align="center" fontWeight="bold">Sign Up Form</Text> 
        <FloatingLabelInput id="username" label="Username" />
        <FloatingLabelInput id="password" label="Password" type="password" />
          <Button colorScheme="blue" width="full" maxW="sm ">
            Sign Up
          </Button>
          <NextLink href="/login" passHref>
            Already have an account?{' '}
            <Link color="blue.500">
              Log In
            </Link>
          </NextLink>
        </VStack>
      </Box>
      <Box
        width="50%"
        height="100%"
        bgGradient="linear(to-r, blue.500, blue.700)"
        display="flex"
        alignItems="center"
        justifyContent="center"
      />
    </Container>
  );
};

export default SignInPage;