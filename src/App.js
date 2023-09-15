import React, { useState } from 'react';
import { ChakraProvider, Input, Button, Box, Heading, Image, Flex } from '@chakra-ui/react';
import SmallWithSocial from './socials';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse(''); // Clear previous response
    fetch('http://localhost:3001', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    })
      .then(res => res.json())
      .then(data => setResponse(data.message))
  };

  return (
    <ChakraProvider>
      <Box minHeight="100vh" display="flex" flexDirection="column" justifyContent="space-between">
        <Box textAlign="center" padding="2rem">
          <Heading as="h1" size="2xl" mb="4">TheOfficeGPT</Heading>
          <form onSubmit={handleSubmit}>
            <Input
              value={message}
              placeholder='Talk to Michael Scott'
              onChange={(e) => setMessage(e.target.value)}
              mb="2" // Add margin-bottom to adjust spacing
            />
            <br />
            <Button type="submit">Submit</Button>
          </form>
          <Flex justifyContent="center" mt="4">
            <Image src="logo.jpg" alt="Image Description" boxSize="200px" mb="2" /> {/* Add margin-bottom to adjust spacing */}
          </Flex>
          <Box>{response}</Box>
        </Box>
        <SmallWithSocial />
      </Box>
    </ChakraProvider>
  );
}

export default App;
