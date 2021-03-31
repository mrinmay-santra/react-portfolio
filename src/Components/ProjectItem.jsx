// import React from 'react'
import * as React from "react";
import { motion } from "framer-motion";

import { Box, Image, Flex, Badge, Text, Button, Icon } from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
function ProjectItem(props) {
  let imageHeight =props.imageHeight
  let imageWidth = props.imageWidth
    return (
      <motion.div 
        whileHover={{ scale: 1.25 }} whileTap={{ scale: 0.8 }}
            >
          <Box
           
           p="2"
           m="10px"
           maxW="420px"
           borderWidth="1px"
           borderRadius="5px"
           boxShadow="2xl"
           mb="20px"
           borderColor="black"
           bg="white"
  //          _hover={{
  //   background: "darkgrey",
  //   color: "teal.500",
  //   transform:scale(1.4)
  // }}
        >
          <div       
            style={{height: imageHeight,width: imageWidth}}
          >

            <Image
            style={{ maxHeight: "100%",
            width: "100%"}}
            src={props.projectImage}
            alt="project image"
            />
           </div>
          <Flex align="baseline" mt={2}>
            <Badge
              style={{ textTransform: "none" }}
              colorScheme="pink"
              fontSize="xl"
              mr={5}
              ml="2"
            >
              {props.tech1}
            </Badge>
              <Badge
              style={{ textTransform: "none" }}
              colorScheme="purple"
              fontSize="xl"
              mr={5}
              ml="2"
            >
              {props.tech2}
            </Badge>
              <Badge
              style={{ textTransform: "none" }}
              colorScheme="green"
              fontSize="xl"
              mr={5}
              ml="2"
            >
              {props.tech3}
            </Badge>
          </Flex>
          <Text
            mt={5}
            ml="2"
            fontSize="2xl"
            fontWeight="bold"
            lineHeight="short"
          >
            {props.projectTitle}
          </Text>
          <Flex mt={2} align="center" justify="flex-start">
            <a
              href={props.projectRepo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                colorScheme="green"
                fontSize="xl"
                size="md"
                mt="2"
                mr="5"
                ml="2"
                mb="2"
              >
                Source Code <Icon as={FaGithub} ml="2" w={7} h={7} />
              </Button>
            </a>
            <a
              href={props.projectDemoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                colorScheme="blue"
                fontSize="xl"
                size="md"
                mr="5"
                mb="2"
                mt="2"
              >
                View Demo
                <Icon as={FaExternalLinkAlt} ml="2" w={6} h={6} />
              </Button>
            </a>
          </Flex>
        </Box> 
      </motion.div>

    )
}

export default ProjectItem
