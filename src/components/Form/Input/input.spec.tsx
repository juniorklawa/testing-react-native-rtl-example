import { render } from "@testing-library/react-native";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { Input } from ".";
import theme from "../../../global/styles/theme";

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe("Input Component", () => {
  it("must have specific border color when active", () => {
    const { getByTestId, debug } = render(
      <Input
        testID="input-email"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCorrect={false}
        active={true}
      />,
      {
        wrapper: Providers,
      }
    );

    debug();

    const inputComponent = getByTestId("input-email");

    expect(inputComponent.props.style[0].borderColor).toEqual(theme.colors.attention);
  });
});
