import * as React from "react";
import { Flex, Text } from "@chakra-ui/react";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <section id="project" style={{ minHeight: "100vh" }}>
      {/* Section heading */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Text
          style={{ letterSpacing: "2px", display: "inline" }}
          fontSize="1.6em"
          fontWeight="bold"
          textAlign="center"
          mb="2rem"
          pb="0.5rem"
          borderBottomStyle="solid"
          borderColor="#319795"
          borderBottomWidth="5px"
        >
          PROJECTS
        </Text>
      </div>
      <Flex
        align="center"
        justify="space-evenly"
        flexWrap="wrap"
        bg="#dddddd"
        minHeight="110vh"
      >
        {/* Youtube channel application project */}

        <ProjectItem
          projectTitle="YouTube Channel Dashboard"
          projectRepo="https://github.com/mrinmay-santra/YT_Channel_Information"
          projectDemoLink="https://youtube-channel-info-1014680.netlify.app/"
          projectImage="/images/youtube.svg"
          tech1="React.js"
          tech2="Youtube Data API"
          tech3="Material UI"
        />

        {/* Justchat project */}
        <ProjectItem
          projectTitle="Realtime Chat Application"
          projectRepo="https://github.com/mrinmay-santra/JustChat-Application"
          projectDemoLink="https://justchat-application.herokuapp.com/"
          projectImage="/images/chat.svg"
          tech1="Node.js"
          tech2="Socket.io"
          imageHeight="300px"
          imageWidth="100%"
          // tech3=""
        />
        {/* Todo List project */}
        <ProjectItem
          projectTitle="TaskList Application"
          projectRepo="https://github.com/mrinmay-santra/TaskList-App"
          projectDemoLink=" https://tasklist-app1.netlify.app/"
          projectImage="/images/tasklist.svg"
          tech1="HTML"
          tech2="CSS"
          tech3="JavaScript"
          imageHeight="300px"
          imageWidth="100%"
        />
        {/* React Markdown previewer project */}
        <ProjectItem
          projectTitle="Markdown Previewer"
          projectRepo="https://github.com/mrinmay-santra/markdown_previewer"
          projectDemoLink="https://react-makrdown-previewer.netlify.app/"
          projectImage="/images/markdown_previewer.svg"
          tech1="React.js"
          tech2="JavaScript"
          imageHeight="300px"
          imageWidth="100%"
          // tech3="Google"
        />
        {/* Tic Tac Toe Game Project */}

        <ProjectItem
          projectTitle="Tic Tac Toe Game "
          projectRepo="https://github.com/mrinmay-santra/tic-tac-toe-game"
          projectDemoLink="https://tic-tac-toe-game-using-js1.netlify.app/"
          projectImage="/images/tictactoe.svg"
          tech1="HTML"
          tech2="CSS"
          tech3="JavaScript"
        />
      </Flex>
    </section>
  );
}
