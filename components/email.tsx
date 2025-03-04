import * as React from "react";
import {
  Html,
  Text,
  Button,
  Heading,
  Link,
  Section,
  Container,
  Preview,
  Head,
  Body,
} from "@react-email/components";

interface EmailProps {
  from: string;
  name: string;
  message: string;
}

export const Email: React.FC<Readonly<EmailProps>> = ({
  from,
  name,
  message,
}) => {
  return (
    <Html lang="en">
      <Head />
      <Preview>
        New inbound from {name} about {message.slice(0, 20)}...
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading className="text-center">Builders garden</Heading>

          <Section>
            <Text className="text-[24px] font-semibold leading-[32px] text-indigo-400">
              New inbound message received
            </Text>
          </Section>

          <Section>
            <Text>Request details</Text>
            <Text>
              <b>Name:</b> {name}
            </Text>
            <Text>
              <b>From:</b>
              <Link href={`mailto:${from}`}>{from}</Link>
            </Text>
            <Text>
              <b>Message:</b> {message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  margin: "0 auto",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  margin: "auto",
  padding: "96px 20px 64px",
};
