import { useContext } from "react";
import LightDarkMode from "../../light-dark-mode/LightDarkMode";
import TicTacToe from "../../tic-tac-toe/TicTacToe";
import RandomColor from "../../random-color/RandomColor";
import Accordian from "../../accordian/Accordian";
import TreeView from "../../tree-view/TreeView";
import CustomTabsTest from "../../custom-tabs/CustomTabsTest";
import { ChildComponent, FeatureFlagsContext } from "./FeatureFlagGlobalState";
// import MenuList from "../../tree-view/MenuList";



export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    // {
    //   key: "showTreeView",
    //   component: <TreeView  menus={<MenuList/>} />,
    // },
    {
        key : 'showTabs',
        component : <CustomTabsTest />
    },
    {
        key : 'ChildComponent',
        component : <ChildComponent  />
    }

  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data ! Please wait</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}