import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

interface FloatingLabelInputProps {
  id: string;
  label: string;
  type?: string;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({ id, label, type = 'text'}) => {
  return (
    <FormControl position="relative" variant="floating" id={id}>
      <Input
        id={id}
        placeholder=" "
        type={type}
        borderColor="gray.300"
        focusBorderColor="blue.500"
        _placeholder={{ opacity: 0 }}
      />
      <FormLabel
        htmlFor={id}
        position="absolute"
        top="-1.25rem"
        left="1rem"
        zIndex="1"
        px="1"
        bg="white"
        color="gray.500"
        fontSize="sm"
        pointerEvents="none"
        transform="translateY(0.5rem)"
        transition="all 0.2s"
      >
        {label}
      </FormLabel>
    </FormControl>
  );
};

export default FloatingLabelInput;