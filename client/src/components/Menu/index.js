import React, { useState } from "react";
import {
  SteakTile,
  MenuContainer,
  SteakTilesContainer,
  MenuSection,
  MenuHeader,
  MenuTab,
  MenuTabContainer,
  MenuElementsContainer,
  MenuElement,
} from "./styles.js";

const Menu = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <MenuContainer id="menu">
      <SteakTilesContainer>
        <SteakTile no={1} />
        <SteakTile no={2} />
        <SteakTile no={3} />
      </SteakTilesContainer>
      <MenuSection>
        <MenuHeader>Menu</MenuHeader>
        <MenuTabContainer>
          <MenuTab active={activeTab === 1} onClick={() => setActiveTab(1)}>
            Steaks
          </MenuTab>
          <MenuTab active={activeTab === 2} onClick={() => setActiveTab(2)}>
            Starters{" "}
          </MenuTab>
          <MenuTab active={activeTab === 3} onClick={() => setActiveTab(3)}>
            Drinks
          </MenuTab>
        </MenuTabContainer>
        <MenuElementsContainer>
          {activeTab === 1 ? (
            <>
              <MenuElement>Monte - Grass Fed 23 $</MenuElement>
              <MenuElement>Rump Eye 200g</MenuElement>
              <MenuElement>Monte - Grain Fed 23 $</MenuElement>
              <MenuElement>Fillet 200g 23 $</MenuElement>
              <MenuElement>Rib-Eye 300g 23 $</MenuElement>
              <MenuElement>Monte - Grass Fed 23 $</MenuElement>
              <MenuElement>Rump Eye 200g</MenuElement>
              <MenuElement>Monte - Grain Fed 23 $</MenuElement>
              <MenuElement>Fillet 200g 23 $</MenuElement>
              <MenuElement>Rib-Eye 300g 23 $</MenuElement>
              <MenuElement>Monte - Grass Fed 23 $</MenuElement>
              <MenuElement>Rump Eye 200g</MenuElement>
              <MenuElement>Monte - Grain Fed 23 $</MenuElement>
              <MenuElement>Fillet 200g 23 $</MenuElement>
              <MenuElement>Rib-Eye 300g 23 $</MenuElement>
            </>
          ) : activeTab === 2 ? (
            <>
              <MenuElement>Monte - Grass Fed 23 $</MenuElement>
              <MenuElement>Rump Eye 200g</MenuElement>
              
            </>
          ) : activeTab === 3 ? (
            <>
              <MenuElement>Monte - Grass Fed 23 $</MenuElement>
              <MenuElement>Rump Eye 200g</MenuElement>
              <MenuElement>Monte - Grain Fed 23 $</MenuElement>
              <MenuElement>Fillet 200g 23 $</MenuElement>
              <MenuElement>Rib-Eye 300g 23 $</MenuElement>
              <MenuElement>Monte - Grass Fed 23 $</MenuElement>
              <MenuElement>Rump Eye 200g</MenuElement>
            </>
          ) : null}
        </MenuElementsContainer>
      </MenuSection>
    </MenuContainer>
  );
};
export default Menu;
