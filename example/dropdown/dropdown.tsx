import React, {useState} from 'react';
import Dropdown from "../../lib/dropdown/dropdown";
import './dropdown.scss';
import {useTranslation} from "react-i18next";

const DropdownExample: React.FunctionComponent = () => {
    const {t} = useTranslation();
    const [visible, setVisible] = useState(false);
    const hoverButton = <div>hover me</div>;
    return (
        <div className={'dropDownExample'}>
            <h4>{t('hover-dropdown')}</h4>
            <div className={'wrapper'}>
                <Dropdown button={hoverButton} trigger="hover"
                          position="bottomLeft"
                          visible={visible}
                          onHoverShow={() => setVisible(true)}
                          onHoverHide={() => setVisible(false)}>
                    <ul className={'dropdown-content'}>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                        <li onClick={() => setVisible(false)}>item 5</li>
                    </ul>
                </Dropdown>
            </div>
        </div>
    );
};

export default DropdownExample;
