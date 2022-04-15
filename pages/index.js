import PageLayout from "../components/PageLayout";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  console.log(router);

  return (
    <ThemeProvider theme={theme}>
      <PageLayout>index.js</PageLayout>
    </ThemeProvider>
  );
};

export default Index;
