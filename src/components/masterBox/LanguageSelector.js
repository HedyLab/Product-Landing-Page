import React from "react";
// import ContentText from "../../stories/components/ContentText";

// import Dropdown from "../../stories/components/Dropdown";
// import Icon from "../../stories/components/Icon";
// import List from "../../stories/components/List";
// import ListItem from "../../stories/components/ListItem";
import Dropdown from "./Dropdown";
import ListItem from "./ListItem"
import ContentText from "./ContentText"


const LanguageSelector = ({ list, currentLanguages,customStyles }) => {

  let languages
  switch (currentLanguages) {
    case 'zh-TW':
      languages="繁體中文"
      break;
    case 'en':
      languages="English"
      break;
  
    default:
      languages=currentLanguages
      break;
  }

  return (
    <>
    <div className="languageSelector mt-[20px]"  >
      <Dropdown list={list} justify='left' distance='close' 
        outSideElement={
            <div className="w-[108px] h-[28px] flex items-center justify-start space-x-2 py-[6px] px-[8px] rounded-[14px] relative">
            {/* <Icon name='earth' size='small'/> */}

            <ContentText title={languages} color='white' size='small' customStyles='whitespace-nowrap' />
            
            {/* <Icon name='arrow-down' customStyles={{ filter: 'brightness(0.5) invert(1)',position:'absolute', right:'8px'}} size='mini' /> */}
            </div>
        }
        customStyles={{left:'10px', top:'5px'}}
      >

        <ul className='footer-ul'>
            {
                list && list.map
                (
                    ({ title, onClick }, index) => 

                    <ListItem key={index} onClick={() => onClick()} customStyles='whitespace-nowrap cursor-pointer hover:bg-primary_light'>
                        <ContentText title={title} size='normal'/>
                    </ListItem>
                )
            }
        </ul>

      </Dropdown>

    </div>
    </>
  );
};

export default LanguageSelector;
