import React, { useState } from 'react'
import MainGrid from '../components/MainGrid/MainGrid';
import MainList from '../components/MainList/MainList';
import './MainPage.scss';
export interface ListItem {
  id: number;
  text: string;
  isExpanded: boolean;

}
enum ViewMode {
  List = 'list',
  Grid = 'grid'
}

console.log("hi");


const generateRandomList = (): ListItem[] => {
  const list: ListItem[] = [];

  for (let i = 0; list.length< 100; i++) {
    const item: ListItem = {
      id: i,
      text: `Item ${i}`,
      isExpanded: false
    };
    list.push(item);
  }

  return list;
}
const items: ListItem[] = generateRandomList();

const MainPage = () => {
  const [View, setView] = useState<ViewMode>(ViewMode.List);
  const changeView = () => {
    View === ViewMode.List ? setView(ViewMode.Grid) : setView(ViewMode.List)
  }
  return (
    <div className='mainPageDiv'>
      <button value={View} onClick={changeView}>{View}</button>
      {
        View === ViewMode.List ? (<MainList items={items} />) :
          (<MainGrid items={items} />
          )
      }
    </div>
  );
};

export default MainPage;