/* eslint-disable import/no-extraneous-dependencies */
import styled from '@emotion/styled';
import type { NextUITheme } from '@nextui-org/react';
import {
  Avatar,
  Col,
  Container,
  Grid,
  Row,
  Text,
  useTheme,
} from '@nextui-org/react';

import { ThemeSwitch } from '@/components/Switch';

const HeadingWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  & > label:last-of-type {
    margin-top: 8px;
  }
`;

const BodyWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
`;

const H1 = styled(Text)`
  font-size: 3rem;
  line-height: 3rem;
  margin-bottom: 8px;
  font-weight: 700;
`;

const List = styled.ul`
  margin-top: 10px;
  list-style-type: disc;
  margin: 10px 10px 10px 20px;
`;
const ListItem = styled.li``;

const TechItem = styled.span<{ theme: NextUITheme | undefined }>`
  padding: 0.125rem 0.5rem;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors?.accents1.value};
  font-size: 0.75rem;
  transition: background-color 0.4s ease 0s, color 0.3s ease 0s;
  margin-right: 8px;
`;

const Index = () => {
  // const router = useRouter();
  const { theme } = useTheme();

  return (
    <Container css={{ padding: '$0 $10', maxWidth: '660px' }}>
      <HeadingWrapper>
        <H1
          h1
          css={{
            textGradient: `45deg, ${theme?.colors.text.value} 10%, ${theme?.colors.primary.value} 60%`,
          }}
        >
          Xin chào đây là CV của tôi!
        </H1>
        <ThemeSwitch />
      </HeadingWrapper>
      <BodyWrapper>
        <Grid css={{ marginBottom: '$10' }}>
          <Row align="center">
            <Avatar
              size="lg"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              css={{ size: '$10', marginRight: '$5' }}
            />
            <Text>
              Xin chào tôi là Fanvo, lập trình viên fullStack đến từ Việt Nam.
              Đây là CV của tôi mọi người tham khảo ạ!
            </Text>
          </Row>
        </Grid>
        <Grid>
          <Row align="center">
            <Text css={{ fontSize: '$4xl' }}>Work Experience</Text>
          </Row>
        </Grid>
        <Grid css={{ marginTop: '$14' }}>
          <Row align="flex-start">
            <Col css={{ paddingRight: '$20' }}>
              <Text css={{ fontSize: '$2xl' }}>Foo company</Text>
              <Text css={{ fontSize: '$1xl' }}>2021.03 ~ Web Developer</Text>
              <Text css={{ fontSize: '$1xl' }}>
                Foo company is social media company for every world
              </Text>
            </Col>
            <Col>
              <Text css={{ fontSize: '$2xl' }}>Foo Pay</Text>
              <Text css={{ fontSize: '$1xl' }}>
                2022.01 ~ Leading FE developers
              </Text>
              <List>
                <ListItem>leading fe developers</ListItem>
                <ListItem>foster SEO</ListItem>
              </List>
              <Row>
                <TechItem theme={theme}>Typescript</TechItem>
                <TechItem theme={theme}>Typescript</TechItem>
                <TechItem theme={theme}>Typescript</TechItem>
                <TechItem theme={theme}>Typescript</TechItem>
              </Row>
            </Col>
          </Row>
        </Grid>
      </BodyWrapper>
    </Container>
  );
};

export default Index;
