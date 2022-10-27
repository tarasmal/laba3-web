import React, {useMemo} from 'react';
import Flex from "../atoms/Flex";
import ForWhoCreated from "../molecules/ForWhoCreated";


const ForWhoSection = () => {
    const descriptions = useMemo(() => [
        {
            header: 'Школярі та випускники',
            description: 'Отримають першу професію, не відкладаючи на потім свою мрію стати програмістом',
            img: './assets/img1.png'
        },
        {
            header: "Студенти ВНЗ (18 - 23 роки)",
            description: "Освоять другу спеціальність паралельно з університетською освітою",
            flexDirection: 'column-reverse',
            img: './assets/img_2.png'
        },
        {
            header: 'Представники інших професій (23 - 55 років)',
            description: 'Яких не влаштовує поточна карʼєрна і фінансова перспектива, зможуть перевчитися на розробника ПЗ і отримати затребувану професію',
            img: './assets/img_3.png'
        },
        {
            header: 'Всі бажаючі підвищити IT-кваліфікацію',
            description: 'Систематизують свої знання і отримають робочі навички, затребувані сучасному IT',
            flexDirection: 'column-reverse',
            img: './assets/img_4.png'
        }

    ], [])
    return (
        <Flex
            flexDirection={'row'}
            position={'relative'}
            columnGap={'30px'}
        >
            {
                descriptions.map(({header, description, flexDirection, img}) =>
                    <ForWhoCreated
                        header={header}
                        description={description}
                        flexDirection={flexDirection}
                        img={img}
                    />
                )
            }
        </Flex>
    );
};

export default ForWhoSection;
