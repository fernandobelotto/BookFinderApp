import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { BookResponse, VolumeInfo } from "./models/book-response";
import { QueryResponse } from "./models/query-response";

export default function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<QueryResponse | null>();
  const [book, setBook] = useState<BookResponse | null>();

  function handleSearch() {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((res) => res.json())
      .then((result) => {
        setResult(result);
        setBook(null);
      });
  }

  function getBook(url: any) {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setBook(result);
        setResult(null);
      });
  }

  return (
    <Center h="100vh">
      <VStack>
        <Heading>Book Finder App</Heading>
        <HStack>
          <Input value={query} onChange={(e) => setQuery(e.target.value)} />
          <Button onClick={handleSearch}>Search</Button>
        </HStack>

        <Box>
          {book?.volumeInfo
            ? Object.keys(book?.volumeInfo).map((value) => {
                return (
                  <>
                    <VStack
                      alignItems="flex-start"
                      w="300px"
                      border="1px solid"
                      borderColor="gray.200"
                      rounded='lg'
                      p="1"
                    >
                      <Text> title: {book?.volumeInfo?.title} </Text>
                      <Text> subtitle: {book?.volumeInfo?.subtitle} </Text>
                      <Text> publisher: {book?.volumeInfo?.publisher} </Text>
                      <Text>
                        publishedDate: {book?.volumeInfo?.publishedDate}
                      </Text>
                      <Text noOfLines={2}>
                        description: {book?.volumeInfo?.description}
                      </Text>
                      <Text> pageCount: {book?.volumeInfo?.pageCount} </Text>
                      <Text>
                        printedPageCount: {book?.volumeInfo?.printedPageCount}
                      </Text>
                      <Text> printType: {book?.volumeInfo?.printType} </Text>
                      <Text>
                        averageRating: {book?.volumeInfo?.averageRating}
                      </Text>
                      <Text>
                        ratingsCount: {book?.volumeInfo?.ratingsCount}
                      </Text>
                      <Text>
                        maturityRating: {book?.volumeInfo?.maturityRating}
                      </Text>
                      <Text>
                        allowAnonLogging: {book?.volumeInfo?.allowAnonLogging}
                      </Text>
                      <Text>
                        contentVersion: {book?.volumeInfo?.contentVersion}
                      </Text>
                      <Text> language: {book?.volumeInfo?.language} </Text>
                      <Link
                        display="block"
                        fontWeight={500}
                        href={book?.volumeInfo?.previewLink}
                      >
                        previewLink
                      </Link>
                      <Link
                        display="block"
                        fontWeight={500}
                        href={book?.volumeInfo?.infoLink}
                      >
                        infoLink
                      </Link>
                      <Link
                        display="block"
                        fontWeight={500}
                        href={book?.volumeInfo?.canonicalVolumeLink}
                      >
                        canonicalVolumeLink
                      </Link>
                    </VStack>
                  </>
                );
              })[0]
            : null}
          <VStack spacing={2} alignItems="flex-start">
            {result?.items.map((item) => {
              return (
                <>
                  <Box
                    border="1px solid"
                    borderColor="gray.200"
                    p="1"
                    key={item.id}
                    onClick={() => getBook(item.selfLink)}
                    rounded="lg"
                  >
                    <Text>{item.volumeInfo.title}</Text>
                    <Text>{item.volumeInfo.subtitle}</Text>
                  </Box>
                </>
              );
            })}
          </VStack>
        </Box>
      </VStack>
    </Center>
  );
}
