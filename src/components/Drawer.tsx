import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const DrawerWrapper = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;

  top: 0;
  height: 100%;
  min-width: 30rem;
  box-shadow: -1rem 0 2rem 0.5rem rgba(0, 0, 0, 0.2);
`;

const Tab = styled.div`
  writing-mode: vertical-rl;
  position: absolute;
  left: 0;
  top: 6rem;
  padding: 1rem 0.5rem;
  transform: translateX(-100%);
  color: #efefef;
  background-color: #3f3f3f;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  box-shadow: -0.5rem 0 2rem 0.5rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 99;

  &:hover {
    box-shadow: -0.5rem 0 2rem 0.5rem rgba(0, 112, 243, 0.5);
  }
`;

const Content = styled.div`
  background-color: #efefef;
  flex: 1;
  padding: 2rem;
  z-index: 999;
`;

const drawerVariants = {
  open: { opacity: 1, x: "0" },
  closed: { x: "100%" },
};

export function Drawer({ children }) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <DrawerWrapper
      key="drawer"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={drawerVariants}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Tab role="button" onClick={() => setIsOpen(!isOpen)}>
        Notes
      </Tab>
      <Content>{children}</Content>
    </DrawerWrapper>
  );
}

export const DrawerList = styled.ul`
  font-size: 1.2rem;

  & > li {
    margin-bottom: 1rem;
  }
`;
