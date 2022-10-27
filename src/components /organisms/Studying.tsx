import React, {useMemo} from 'react';
import Flex from "../atoms/Flex";
import Img from "../atoms/Img";

const Studying = () => {
    const images = useMemo(() => ['img_5.png', 'img_6.png', 'img_7.png'],[])
    return (
        <Flex
            width={'90%'}
            flexDirection={'row'}
            justifyContent={'space-between'}
        >
            {
                images.map((src, index) => <Img src={`./assets/${src}`} alt={'photo'} key={index} />)
            }
        </Flex>
    );
};

export default Studying;
