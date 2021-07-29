import styled from "styled-components";
import Image from "next/image";
import { Header, Page } from "../src/components";
import headshot from "../public/mat.dupont.headshot.jpg";

const Content = styled.main`
  max-width: 80rem;
  width: 100%;
  align-self: center;
`;

const Heading = styled.h1`
  padding: 3rem 2rem;
  display: flex;
  // background: #aaa;
  // border-bottom: 1px solid #bbb;
`;

const HeadshotWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset: 3px 4px 5px #fff;
`;

const Resume = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
  font-size: 1.5rem;
  font-weight: 500;

  & > div {
    margin-bottom: 0.5rem;
  }
`;

const ResumeLine = styled.div`
  margin-left: 3rem;
  font-weight: 400;
`;

const Handle = styled.span`
  font-size: 3rem;
  font-weight: 700;
  margin-right: 3rem;
  margin-bottom: 1rem;
`;

const Points = styled.ul`
  list-style-type: none;
  font-size: 2rem;
  margin-top: 6rem;
`;

const Point = styled.li`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  & > div {
    margin-left: 2rem;
  }

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 58px;
    width: 58px;
  }
`;

export default function Me() {
  return (
    <Page>
      <Header>Mat Dupont</Header>
      <Content>
        <Heading>
          <HeadshotWrapper>
            <Image
              src={headshot}
              alt="Vercel Logo"
              height={200}
              width={200}
              quality={100}
            />
          </HeadshotWrapper>
          <Resume>
            <Handle>@matldupont</Handle>
            <ResumeLine>github.com/matldupont</ResumeLine>
            <ResumeLine>instagram.com/matldupont</ResumeLine>
            <ResumeLine>linkedin.com/in/matldupont</ResumeLine>
          </Resume>
        </Heading>
        <Points>
          <Point>
            <Image
              width={58}
              height={58}
              alt="auth0"
              src="https://media-exp1.licdn.com/dms/image/C4E0BAQExIQzr-IV3qg/company-logo_100_100/0/1622567481184?e=1635379200&v=beta&t=JeUqwb-FhERFT6l-TG1GxodsabiwQJ77wkB9czKPko0"
            />
            <div>Sr. Engineer - Office of the CTO, Auth0</div>
          </Point>
          <Point>
            <Image
              width={58}
              height={58}
              alt="auth0"
              src="https://media-exp1.licdn.com/dms/image/C4E0BAQFBsXJofnC5cQ/company-logo_100_100/0/1613492082811?e=1635379200&v=beta&t=jPTuXoFlRkwVurt8QsG3bDvgdPqz6XI33vAV8VJsCMs"
            />
            <div>Former R&D Technical Lead - Rebel.com</div>
          </Point>
          <Point>
            <span>👋</span>
            <div>Co-founder - ReactOttawa</div>
          </Point>
          <Point>
            <span>📣</span>
            <div>ForwardJS - (GatsbyJS and State Machines)</div>
          </Point>
        </Points>
      </Content>
    </Page>
  );
}
