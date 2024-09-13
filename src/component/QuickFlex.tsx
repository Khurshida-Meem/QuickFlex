import styled from "@emotion/styled";
import { QuickFlexProps } from "../propType/QuickFlexProps";

export const Flex = styled.div<QuickFlexProps>`
  display: flex;
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "stretch"};
  flex-direction: ${({ direction }) => direction || "row"};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};
  gap: ${({ gap }) => gap || "0"};
`;
