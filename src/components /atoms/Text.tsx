import styled from "styled-components";

interface Text {
    fontSize?: string,
    fontWeight?: string,
    color?: string,
    overflowWrap?: string,
    wordBreak?: string
    marginBottom?: string,
}

const Text = styled.p<Text>`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  font-family: 'Noto Sans', sans-serif;
  margin: 0;
  overflow-wrap: ${props => props.overflowWrap};
  word-break: ${props => props.wordBreak};
  margin-bottom: ${props => props.marginBottom};
`

export default Text;
