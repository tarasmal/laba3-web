import React, {FC, MouseEventHandler} from 'react';
import styled from "styled-components";

interface LogoProps{
    src: string,
    alt: string,
    width?: string
    height?: string,
    position?: string,
    right?: string,
    marginBottom?: string,
    top?: string,
    justifySelf?: string,
    alignSelf?: string,
    left?: string,
    flexGrow?: number,
    onClick?: MouseEventHandler
}

const StyledImg = styled.img<LogoProps>`
  flex-grow: ${props => props.flexGrow};
  width: ${props => props.width};
  height: ${props => props.height};
  position: ${props => props.position || 'relative'};
  right: ${props => props.right};
  margin-bottom: ${props => props.marginBottom};
  top: ${props => props.top};
  left: ${props => props.left};
  justify-self: ${props => props.justifySelf};
  align-self: ${props => props.alignSelf};
`

const Img: FC <LogoProps> = ({src, alt, ...props}) => {
    return (
        <StyledImg
            src={src}
            alt={alt}
            {...props}
        />
    );
};

export default Img;
