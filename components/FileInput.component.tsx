function getRandomHash() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  useConst,
} from '@chakra-ui/react';

export const FileInput = ({
  label,
  onChange,
  onDeleteFile,
  value,
  helperText,
  previewFiles,
}: {
  label: string;
  onChange: (e: any) => void;
  onDeleteFile: (e: any) => void;
  helperText?: string;
  value?: FileList | null;
  previewFiles?: string[];
}) => {
  const id = useConst(getRandomHash());
  return (
    <>
      <FormControl
        justifyContent="space-between"
        display="flex"
        alignItems="center"
        w="calc(100% - 32px)"
        rounded="md"
        mx={4}
        p={4}
        mt={4}
        bg="white"
      >
        <FormLabel htmlFor={id}>{label}</FormLabel>
        <Input
          multiple
          id={`${id}-form-control`}
          type="file"
          onChange={onChange}
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
      <Grid mx={4} mt={2} mb={4} h={'80px'} templateColumns="1fr 1fr 1fr 1fr" gap={4}>
        {previewFiles &&
          previewFiles.length > 0 &&
          previewFiles.map((file, index) => (
            <Box
              key={`preview-file-${index}`}
              bgSize="cover"
              bgImage={file.startsWith('/img') ? `https://sass.refrigeracionmc.com${file}` : `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${file}`}
              bgPosition="center"
              rounded="md"
              w="100%"
              position="relative"
              h="100%"
            >
              <Box
                position="absolute"
                top="0"
                right="0"
                bg="rgba(0,0,0,0.5)"
                w="24px"
                h="24px"
                fontSize="15px"
                cursor="pointer"
                rounded="md"
                p={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
                onClick={onDeleteFile}
              >
                <Box as="span" color="white" fontSize="lg">
                  X
                </Box>
              </Box>
            </Box>
          ))}
        {Array.from(value || []).map((file: any) => (
          <Box
            key={`img-${file.name}`}
            bgSize="cover"
            bgImage={URL.createObjectURL(file)}
            rounded="md"
            border="1px solid red"
            w="100%"
            h="100%"
          />
        ))}
      </Grid>
    </>
  );
};
