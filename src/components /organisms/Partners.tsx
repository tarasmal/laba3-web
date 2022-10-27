import React from 'react';
import Flex from "../atoms/Flex";
import Img from "../atoms/Img";
import Text from "../atoms/Text";

const Partners = () => {
    return (
        <Flex
            width={'100%'}
            flexDirection={'row'}
            justifyContent={'space-between'}
        >
            <Flex flexGrow={1}>
                <Img src={'./assets/img_8.png'} alt={'photo'} />
            </Flex>
            <Flex flexGrow={2} >
                <Text fontSize={'24px'}>Luxoft</Text>

                <Text marginBottom={'30px'}> <span style={{color: 'rgb(120,202,246)'}}>Luxoft</span> - глобальна технологічна компанія, одна із лідерів на ринку послуг цифрової трасформації та створення програмниї продуктів. Luxoft пропонує індивідуальні IT-рішення, які заохочують до змін у бізнесах клієнтів у всьому світі</Text>
                <Text>Luxoft обʼєднує понад 13 000 спеціалістів із 22 країн світу зі штаб квартирою у м. Цуг, Швейцарія. Україна є однією з найпотужніших локацій в географії Luxoft. Близько 3500 фахівців усіх ключових напрямків зосереджені в офісах Києва, Одеси і Дніпра</Text>
            </Flex>
        </Flex>
    );
};

export default Partners;
